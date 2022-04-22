import { inputObjectType } from "nexus";

export const CreatePreUserBrandInput = inputObjectType({
	name: "CreatePreUserBrandInput",
	definition(t) {
		t.string("contactMail");
		t.float("contactPhone");
		t.float("taxId");
		t.string('commercialCategory')
	},
});
