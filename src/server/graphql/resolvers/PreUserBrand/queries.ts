import { list, nonNull, nullable, queryField } from "nexus";
import { PreUserBrand } from "./models";
import { WhereUniqueId } from "../commons/inputs";

export const preUserBrand = queryField("preUserBrand", {
	type: nullable(PreUserBrand),
	args: {
		where: nonNull(WhereUniqueId),
	},
	resolve: async (root, args, ctx) => {
		return ctx.prisma.preUserBrand.findUnique({
			where: {
				...args.where,
			},
		});
	},
});

export const preUserBrands = queryField("preUserBrands", {
	type: nullable(list(nonNull(PreUserBrand))),
	resolve: async (root, args, ctx) => {
		return ctx.prisma.preUserBrand.findMany({});
	},
});
