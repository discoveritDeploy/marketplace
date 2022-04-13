import { mutationField, nonNull, nullable } from "nexus";
import { Product } from "./models";
import { WhereUniqueId } from "../commons";

export const removeProduct = mutationField("removeProduct", {
	type: nullable(Product),
	args: {
		where: nonNull(WhereUniqueId),
	},
	resolve: async (root, args, ctx) => {
		return ctx.prisma.product.delete({
			...args,
		});
	},
});

import { CreateProductInput } from "./inputs";

export const createProduct = mutationField("createProduct", {
	type: nullable(Product),
	args: { input: nonNull(CreateProductInput) },
	resolve: async (root, args, ctx) => {
		return ctx.prisma.product.create({
			data: {
				...args.input,
			},
		});
	},
});
