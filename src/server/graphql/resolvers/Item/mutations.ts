import { mutationField, nonNull, nullable } from "nexus";
import { Item } from "./models";
import { CreateItemInput, ItemWhereUniqueInput } from "./inputs";

export const createItem = mutationField("createItem", {
	type: nullable(Item),
	args: { input: nonNull(CreateItemInput) },
	resolve: async (root, args, ctx) => {
		return ctx.prisma.item.create({
			data: {
				...args.input,
			},
		});
	},
});

export const removeItem = mutationField("removeItem", {
	type: nullable(Item),
	args: {
		where: nonNull(ItemWhereUniqueInput),
	},
	resolve: async (root, args, ctx) => {
		return ctx.prisma.item.delete({
			...args,
		});
	},
});
