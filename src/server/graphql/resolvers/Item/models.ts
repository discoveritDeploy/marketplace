import { objectType } from "nexus";

export const Info = objectType({
	name: "Info",
	definition(t) {
		t.string("info1");
		t.string("info2");
	},
});

export const Item = objectType({
	name: "Item",
	definition(t) {
		t.nonNull.id("id");
		t.nonNull.string("title");
		t.string("description");
		t.string("url");
		t.string("imageUrl");
		t.field("info", { type: Info });
	},
});
