import { list, nonNull, nullable, queryField } from "nexus";
import { Retail } from "./models";
import { WhereUniqueId } from "../commons";

export const retail = queryField("retail", {
	type: nullable(Retail),
	args: {
		where: nonNull(WhereUniqueId),
	},
	resolve: async (root, args, ctx) => {
		return ctx.prisma.retail.findUnique({
			where: {
				...args.where,
			},
		});
	},
});

export const retails = queryField("retails", {
	type: nullable(list(nonNull(Retail))),
	resolve: async (root, args, ctx) => {
		return ctx.prisma.retail.findMany({});
	},
});
