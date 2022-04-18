import { objectType, enumType } from "nexus";

export const FullName = objectType({
	name: "FullName",
	definition(t) {
		t.string("firstName");
		t.string("lastName");
	},
});

export const Address = objectType({
	name: "Address",
	definition(t) {
		t.string("street");
		t.string("city");
		t.string("province");
		t.int("cp");
		t.string("country");
	},
});

export const DepositAddress = objectType({
	name: "DepositAddress",
	definition(t) {
		t.field("address", { type: Address });
		t.string("depositContact");
		t.int("depositPhone");
	},
});


export const CommercialCategory = enumType({
	name: 'commercialCategory',
	members: ['INDUMENTARIA', 'BLANQUERIA', 'CUIDADO', 'VARIOS'],
	description: 'categoria comercial',
})