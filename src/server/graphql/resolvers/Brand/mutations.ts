import { mutationField, nonNull, nullable } from "nexus";
import { Brand } from "./models";
import { BrandWhereUniqueInput, CreateBrandInput } from "./inputs";

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
		where: nonNull(BrandWhereUniqueInput),
	},
	resolve: async (root, args, ctx) => {
		return ctx.prisma.brand.delete({
			...args,
		});
	},
});
