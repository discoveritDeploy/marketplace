import { inputObjectType } from "nexus";

export const CreatePreUserBrandInput = inputObjectType({
	name: "CreatePreUserBrandInput",
	definition(t) {
		t.string("contactMail");
		t.int("contactPhone");
		t.int("taxId");
		t.string("commercialCategory");
	},
});
