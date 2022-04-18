import { inputObjectType } from "nexus";
import { CommercialCategory } from "../commons";

export const CreatePreUserBrandInput = inputObjectType({
	name: "CreatePreUserBrandInput",
	definition(t) {
		t.string("contactMail");
		t.float("contactPhone");
		t.float("taxId");
		t.field('commercialCategory', {
			type: CommercialCategory
		})
	},
});
