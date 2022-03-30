import { inputObjectType } from "nexus";

export const ItemWhereUniqueInput = inputObjectType({
	name: "ItemWhereUniqueInput",
	definition(t) {
		t.nonNull.id("id");
	},
});
