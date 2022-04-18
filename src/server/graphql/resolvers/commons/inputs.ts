import { inputObjectType } from "nexus";

export const WhereUniqueId = inputObjectType({
	name: "WhereUniqueId",
	definition(t) {
		t.id("id");
	},
});

export const FullNameInput = inputObjectType({
	name: "FullNameInput",
	definition(t) {
		t.string("firstName");
		t.string("lastName");
	},
});

export const AddressInput = inputObjectType({
	name: "AddressInput",
	definition(t) {
		t.string("street");
		t.string("city");
		t.string("province");
		t.int("cp");
		t.string("country");
	},
});

export const DepositAddressInput = inputObjectType({
	name: "DepositAddressInput",
	definition(t) {
		t.field("address", { type: AddressInput });
		t.string("depositContact");
		t.int("depositPhone");
	},
});
