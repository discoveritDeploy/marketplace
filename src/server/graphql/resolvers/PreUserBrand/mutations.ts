import { mutationField, nonNull, nullable } from "nexus";
import { PreUserBrand } from "./models";
import { WhereUniqueId } from "../commons";

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
