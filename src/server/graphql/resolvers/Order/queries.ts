import { list, nonNull, nullable, queryField } from "nexus";
import { Order } from "./models";
import { WhereUniqueId } from "../commons";

export const order = queryField("order", {
	type: nullable(Order),
	args: {
		where: nonNull(WhereUniqueId),
	},
	resolve: async (_, args, ctx) => {
		return ctx.prisma.order.findUnique({
			where: {
				...args.where,
			},
		});
	},
});

export const orders = queryField("orders", {
	type: nullable(list(nonNull(Order))),
	resolve: async (root, args, ctx) => {
		return ctx.prisma.order.findMany({});
	},
});
