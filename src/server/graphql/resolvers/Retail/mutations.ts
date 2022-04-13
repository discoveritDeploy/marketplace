import { mutationField, nonNull, nullable } from "nexus";
import { Retail } from "./models";
import { WhereUniqueId } from "../commons";
import { CreateRetailInput } from "./inputs";

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

export const createRetail = mutationField("createRetail", {
	type: nullable(Retail),
	args: { input: nonNull(CreateRetailInput) },
	resolve: async (root, args, ctx) => {
		return ctx.prisma.retail.create({
			data: {
				...args.input,
			},
		});
	},
});
