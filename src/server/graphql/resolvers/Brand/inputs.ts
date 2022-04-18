import { inputObjectType } from "nexus";
import { AddressInput, DepositAddressInput } from "../commons";

export const CommercialAddressInput = inputObjectType({
	name: "CommercialAddressInput",
	definition(t) {
		t.field("address", { type: AddressInput });
		t.string("commercialContact");
		t.int("commercialPhone");
	},
});

export const DeliveryInput = inputObjectType({
	name: "DeliveryInput",
	definition(t) {
		t.string("deliveryTime");
		t.string("shipping");
	},
});

export const CommercialConditionInput = inputObjectType({
	name: "CommercialConditionInput",
	definition(t) {
		t.int("minimumPurchase");
		t.int("amountDiscount");
		t.int("term");
		t.string("paymentAccepted");
		t.field("delivery", { type: DeliveryInput });
	},
});

export const CreateBrandInput = inputObjectType({
	name: "CreateBrandInput",
	definition(t) {
		t.string("brandName");
		t.string("commercialName");
		t.string("taxId");
		t.string("taxCategory");
		t.field("legalAddress", { type: AddressInput });
		t.field("commercialAddress", { type: CommercialAddressInput });
		t.field("depositAddress", { type: DepositAddressInput });
		t.field("commercialCondition", {
			type: CommercialConditionInput,
		});
	},
});
