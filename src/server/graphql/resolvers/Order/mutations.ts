import { mutationField, nonNull, nullable } from "nexus";
import { Order } from "./models";
import { WhereUniqueId } from "../commons";
import { CreateOrderInput } from "./inputs";

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

export const createOrder = mutationField("createOrder", {
	type: nullable(Order),
	args: { input: nonNull(CreateOrderInput) },
	resolve: async (root, args, ctx) => {
		return ctx.prisma.order.create({
			data: {
				...args.input,
			},
		});
	},
});
