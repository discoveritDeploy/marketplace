import { objectType } from "nexus";

export const PreUserBrand = objectType({
	name: "PreUserBrand",
	definition(t) {
		t.id("id");
		t.string("contactMail");
		t.int("contactPhone");
		t.int("taxId");
		t.string("commercialCategory");
	},
});
