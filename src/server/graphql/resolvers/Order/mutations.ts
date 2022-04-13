import { mutationField, nonNull, nullable } from "nexus";
import { Order } from "./models";
import { WhereUniqueId } from "../commons/inputs";

export const removeOrder = mutationField("removeOrder", {
	type: nullable(Order),
	args: {
		where: nonNull(WhereUniqueId),
	},
	resolve: async (root, args, ctx) => {
		return ctx.prisma.order.delete({
			...args,
		});
	},
});
