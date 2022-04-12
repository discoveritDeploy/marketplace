import { inputObjectType } from "nexus";

export const WhereUniqueId = inputObjectType({
	name: "WhereUniqueId",
	definition(t) {
		t.id("id");
	},
});
