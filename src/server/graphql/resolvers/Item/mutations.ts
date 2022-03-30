import { mutationField, nullable } from "nexus";
import { Item } from "./models";

export const createItem = mutationField("createItem", {
	type: nullable(Item),
	resolve: async (root, args, ctx) => {
		return null;
	},
});

export const removeItem = mutationField("removeItem", {
	type: nullable(Item),
	resolve: async (root, args, ctx) => {
		return null;
	},
});
