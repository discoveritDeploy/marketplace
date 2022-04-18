import { objectType } from "nexus";
import { Address, DepositAddress } from "../commons";

export const CommercialAddress = objectType({
	name: "CommercialAddress",
	definition(t) {
		t.field("address", { type: Address });
		t.string("commercialContact");
		t.int("commercialPhone");
	},
});

export const Delivery = objectType({
	name: "Delivery",
	definition(t) {
		t.string("deliveryTime");
		t.string("shipping");
	},
});

export const CommercialCondition = objectType({
	name: "CommercialCondition",
	definition(t) {
		t.int("minimumPurchase");
		t.int("amountDiscount");
		t.int("term");
		t.string("paymentAccepted");
		t.field("delivery", { type: Delivery });
	},
});

export const Brand = objectType({
	name: "Brand",
	definition(t) {
		t.id("id");
		t.string("brandName");
		t.string("commercialName");
		t.string("taxId");
		t.string("taxCategory");
		t.field("legalAddress", { type: Address });
		t.field("commercialAddress", { type: CommercialAddress });
		t.field("depositAddress", { type: DepositAddress });
		t.field("commercialCondition", { type: CommercialCondition });
	},
});
