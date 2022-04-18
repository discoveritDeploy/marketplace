import { list, nonNull, nullable, queryField } from "nexus";
import { Brand } from "./models";
import { WhereUniqueId } from "../commons";

export const brand = queryField("brand", {
	type: nullable(Brand),
	args: {
		where: nonNull(WhereUniqueId),
	},
	resolve: async (root, args, ctx) => {
		return ctx.prisma.brand.findUnique({
			where: {
				...args.where,
			},
		});
	},
});

export const brands = queryField("brands", {
	type: nullable(list(nonNull(Brand))),
	resolve: async (root, args, ctx) => {
		return ctx.prisma.brand.findMany({});
	},
});
