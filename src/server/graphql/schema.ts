import { makeSchema, connectionPlugin } from "nexus";
import path from "path";
import * as types from "./resolvers";

// Only generate in development or when the yarn run generate:nexus command is run
// This fixes deployment on Netlify, otherwise you'll run into an EROFS error during building
const shouldGenerateArtifacts =
  process.env.NODE_ENV === "development" || !!process.env.GENERATE;

export const schema = makeSchema({
	nonNullDefaults: {
		input: true,
		output: false,
	},
	types: types,
	// Type the GraphQL context when used in Nexus resolvers
	contextType: {
		module: path.join(process.cwd(), "src/pages/api/index.ts"),
		export: "GraphQLContext",
	},
	plugins: [connectionPlugin()],
	// Generate the files
	shouldGenerateArtifacts,
	outputs: {
		typegen: path.join(
			process.cwd(),
			"src/server/graphql/nexus-types.generated.ts"
		),
		schema: path.join(process.cwd(), "src/server/graphql/schema.graphql"),
	},
});
