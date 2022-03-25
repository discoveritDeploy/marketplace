import { ApolloServer } from "apollo-server-micro";
import prisma from "../../server/db/prisma";
import { getRequestOrigin } from "../../server/get-request-origin";
import { schema } from "../../server/graphql/schema";
import handler from "../../server/api-route";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse } from "http";

export const config = {
	api: {
		bodyParser: false,
	},
};

export interface GraphQLContext {
  user?: Express.User;
  prisma: typeof prisma;
  origin: string;
}

const apolloServer = new ApolloServer({
	schema,
	context: ({ req }): GraphQLContext => ({
		user: req.user,
		origin: getRequestOrigin(req),
		prisma,
	}),
});

const startServer = apolloServer.start();

export default handler().use((req: MicroRequest, res: ServerResponse) => {
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader(
		"Access-Control-Allow-Origin",
		"https://studio.apollographql.com"
	);
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	if (req.method === "OPTIONS") {
		res.end();
		return false;
	}
	startServer.then(() => {
		apolloServer.createHandler({
			path: "/api",
		})(req, res);
	});
});
