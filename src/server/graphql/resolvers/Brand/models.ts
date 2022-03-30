import { objectType } from "nexus";

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

export const CommercialAddress = objectType({
	name: "CommercialAddress",
	definition(t) {
		t.field("Address", { type: Address });
		t.string("commercialContact");
		t.int("commercialPhone");
	},
});

export const DepositAddress = objectType({
	name: "DepositAddress",
	definition(t) {
		t.field("Address", { type: Address });
		t.string("depositeContact");
		t.int("depositePhone");
	},
});

export const Delivery = objectType({
	name: "Delivery",
	definition(t) {
		t.string("deliveryTime");
		t.string("shipping");
	},
});

export const CommercialConditions = objectType({
	name: "CommercialConditions",
	definition(t) {
		t.int("minimumPurchase");
		t.int("amountDiscount");
		t.int("term");
		t.string("paymentAccepted");
		t.field("Address", { type: Delivery });
	},
});

export const Brand = objectType({
	name: "Brand",
	definition(t) {
		t.nonNull.id("id");
		t.nonNull.string("brandName");
		t.string("commercialName");
		t.string("taxId");
		t.string("taxCategory");
		t.field("legalAddress", { type: Address });
		t.field("commercialAddress", { type: CommercialAddress });
		t.field("depositAddress", { type: DepositAddress });
		t.field("commercialConditions", { type: CommercialConditions });
	},
});
