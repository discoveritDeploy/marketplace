import { inputObjectType } from "nexus";

export const BrandWhereUniqueInput = inputObjectType({
	name: "BrandWhereUniqueInput",
	definition(t) {
		t.nonNull.id("id");
	},
});
