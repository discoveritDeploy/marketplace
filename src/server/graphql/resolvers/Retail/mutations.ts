import { mutationField, nonNull, nullable } from "nexus";
import { Retail } from "./models";
import { WhereUniqueId } from "../commons/inputs";

export const removeRetail = mutationField("removeRetail", {
	type: nullable(Retail),
	args: {
		where: nonNull(WhereUniqueId),
	},
	resolve: async (root, args, ctx) => {
		return ctx.prisma.retail.delete({
			...args,
		});
	},
});
