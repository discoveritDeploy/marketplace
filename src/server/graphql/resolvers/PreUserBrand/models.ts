import { objectType } from "nexus";
import { CommercialCategory } from "../commons";

export const PreUserBrand = objectType({
	name: "PreUserBrand",
	definition(t) {
		t.id("id");
		t.string("contactMail");
		t.float("contactPhone");
		t.float("taxId");
		t.field("commercialCategory", { type: CommercialCategory});
	},
});
