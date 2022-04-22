import { objectType } from "nexus";

export const PreUserBrand = objectType({
	name: "PreUserBrand",
	definition(t) {
		t.id("id");
		t.string("contactMail");
		t.float("contactPhone");
		t.float("taxId");
		t.string("commercialCategory");
	},
});
