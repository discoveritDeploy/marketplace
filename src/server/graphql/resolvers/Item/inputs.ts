import { inputObjectType } from "nexus";

export const ItemWhereUniqueInput = inputObjectType({
	name: "ItemWhereUniqueInput",
	definition(t) {
		t.id("id");
	},
});

export const InfoInput = inputObjectType({
	name: "InfoInput",
	definition(t) {
		t.string("info1");
		t.string("info2");
	},
});

export const CreateItemInput = inputObjectType({
	name: "ItemInput",
	definition(t) {
		t.nonNull.string("title");
		t.string("description");
		t.string("url");
		t.string("imageUrl");
		t.field("info", { type: InfoInput });
	},
});
