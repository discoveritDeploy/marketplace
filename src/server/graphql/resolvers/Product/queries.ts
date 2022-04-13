import { list, nonNull, nullable, queryField } from "nexus";
import { Product } from "./models";
import { WhereUniqueId } from "../commons/inputs";

export const product = queryField("product", {
	type: nullable(Product),
	args: {
		where: nonNull(WhereUniqueId),
	},
	resolve: async (root, args, ctx) => {
		return ctx.prisma.product.findUnique({
			where: {
				...args.where,
			},
		});
	},
});

export const products = queryField("products", {
	type: nullable(list(nonNull(Product))),
	resolve: async (root, args, ctx) => {
		return ctx.prisma.product.findMany({});
	},
});
