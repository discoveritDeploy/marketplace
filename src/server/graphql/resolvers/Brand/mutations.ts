import { mutationField, nullable } from "nexus";
import { Brand } from "./models";

// TODO complete mutation
export const createBrand = mutationField("createBrand", {
	type: nullable(Brand),
	resolve: async (root, args, ctx) => {
		return null;
	},
});

export const removeBrand = mutationField("removeBrand", {
	type: nullable(Brand),
	resolve: async (root, args, ctx) => {
		return null;
	},
});
