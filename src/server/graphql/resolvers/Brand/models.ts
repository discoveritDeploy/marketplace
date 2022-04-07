import { objectType } from "nexus";

export const Address = objectType({
	name: "Address",
	definition(t) {
		t.nonNull.string("street");
		t.nonNull.string("city");
		t.nonNull.string("province");
		t.nonNull.int("cp");
		t.nonNull.string("country");
	},
});

export const CommercialAddress = objectType({
	name: "CommercialAddress",
	definition(t) {
		t.nonNull.field("address", { type: Address });
		t.nonNull.string("commercialContact");
		t.nonNull.int("commercialPhone");
	},
});

export const DepositAddress = objectType({
	name: "DepositAddress",
	definition(t) {
		t.nonNull.field("address", { type: Address });
		t.nonNull.string("depositContact");
		t.nonNull.int("depositPhone");
	},
});

export const Delivery = objectType({
	name: "Delivery",
	definition(t) {
		t.nonNull.string("deliveryTime");
		t.nonNull.string("shipping");
	},
});

export const CommercialCondition = objectType({
	name: "CommercialCondition",
	definition(t) {
		t.nonNull.int("minimumPurchase");
		t.nonNull.int("amountDiscount");
		t.nonNull.int("term");
		t.nonNull.string("paymentAccepted");
		t.nonNull.field("delivery", { type: Delivery });
	},
});

export const Brand = objectType({
	name: "Brand",
	definition(t) {
		t.nonNull.id("id");
		t.nonNull.string("brandName");
		t.nonNull.string("commercialName");
		t.nonNull.string("taxId");
		t.nonNull.string("taxCategory");
		t.nonNull.field("legalAddress", { type: Address });
		t.nonNull.field("commercialAddress", { type: CommercialAddress });
		t.nonNull.field("depositAddress", { type: DepositAddress });
		t.nonNull.field("commercialCondition", { type: CommercialCondition });
	},
});
