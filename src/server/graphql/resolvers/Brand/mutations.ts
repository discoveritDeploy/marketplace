import { mutationField, nonNull, nullable } from "nexus";
import { Brand } from "./models";
import { CreateBrandInput } from "./inputs";
import { WhereUniqueId } from "../commons";

export const createBrand = mutationField("createBrand", {
	type: nullable(Brand),
	args: { input: nonNull(CreateBrandInput) },
	resolve: async (root, args, ctx) => {
		return null;
		// return ctx.prisma.brand.create({
		// 	data: {
		// 		...args.input
		// 	},
		// });
	},
});

export const removeBrand = mutationField("removeBrand", {
	type: nullable(Brand),
	args: {
		where: nonNull(WhereUniqueId),
	},
	resolve: async (root, args, ctx) => {
		return ctx.prisma.brand.delete({
			...args,
		});
	},
});
