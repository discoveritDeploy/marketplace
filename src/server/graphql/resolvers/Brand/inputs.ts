import { inputObjectType } from "nexus";

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

export const CommercialAddressInput = inputObjectType({
	name: "CommercialAddressInput",
	definition(t) {
		t.field("address", { type: AddressInput });
		t.string("commercialContact");
		t.int("commercialPhone");
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
