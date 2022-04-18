import { mutationField, nonNull, nullable } from "nexus";
import { PreUserBrand } from "./models";
import { WhereUniqueId } from "../commons";
import { CreatePreUserBrandInput } from "./inputs";

export const createPreUserBrand = mutationField("createPreUserBrand", {
	type: nullable(PreUserBrand),
	args: { input: nonNull(CreatePreUserBrandInput) },
	resolve: async (root, args, ctx) => {
		console.log('args preuser: ', args, ctx)
		return ctx.prisma.preUserBrand.create({
			data: {
				...args.input,
			},
		});
	},
});

export const removePreUserBrand = mutationField("removePreUserBrand", {
	type: nullable(PreUserBrand),
	args: {
		where: nonNull(WhereUniqueId),
	},
	resolve: async (root, args, ctx) => {
		return ctx.prisma.preUserBrand.delete({
			...args,
		});
	},
});
