import { list, nonNull, nullable, queryField } from "nexus";
import { Item } from "./models";
import { ItemWhereUniqueInput } from "./inputs";

export const item = queryField("item", {
	type: nullable(Item),
	args: {
		where: nonNull(ItemWhereUniqueInput),
	},
	resolve: async (root, args, ctx) => {
		return ctx.prisma.item.findUnique({
			where: {
				...args.where,
			},
		});
	},
});

export const items = queryField("items", {
	type: nullable(list(nonNull(Item))),
	resolve: async (root, args, ctx) => {
		console.log(await ctx.prisma.item.findFirst());

		return ctx.prisma.item.findMany({});
	},
});
