import { inputObjectType } from "nexus";

export const BrandWhereUniqueInput = inputObjectType({
	name: "BrandWhereUniqueInput",
	definition(t) {
		t.nonNull.id("id");
	},
});

export const AddressInput = inputObjectType({
	name: "AddressInput",
	definition(t) {
		t.nonNull.string("street");
		t.nonNull.string("city");
		t.nonNull.string("province");
		t.nonNull.int("cp");
		t.nonNull.string("country");
	},
});

export const CommercialAddressInput = inputObjectType({
	name: "CommercialAddressInput",
	definition(t) {
		t.nonNull.field("addressInput", { type: AddressInput });
		t.nonNull.string("commercialContact");
		t.nonNull.int("commercialPhone");
	},
});

export const DepositAddressInput = inputObjectType({
	name: "DepositAddressInput",
	definition(t) {
		t.nonNull.field("addressInput", { type: AddressInput });
		t.nonNull.string("depositContact");
		t.nonNull.int("depositPhone");
	},
});

export const DeliveryInput = inputObjectType({
	name: "DeliveryInput",
	definition(t) {
		t.nonNull.string("deliveryTime");
		t.nonNull.string("shipping");
	},
});

export const CommercialConditionsInput = inputObjectType({
	name: "CommercialConditionsInput",
	definition(t) {
		t.nonNull.int("minimumPurchase");
		t.nonNull.int("amountDiscount");
		t.nonNull.int("term");
		t.nonNull.string("paymentAccepted");
		t.nonNull.field("deliveryInput", { type: DeliveryInput });
	},
});

export const CreateBrandInput = inputObjectType({
	name: "CreateBrandInput",
	definition(t) {
		t.nonNull.id("id");
		t.nonNull.string("brandName");
		t.nonNull.string("commercialName");
		t.nonNull.string("taxId");
		t.nonNull.string("taxCategory");
		t.nonNull.field("legalAddressInput", { type: AddressInput });
		t.nonNull.field("commercialAddressInput", { type: CommercialAddressInput });
		t.nonNull.field("depositAddressInput", { type: DepositAddressInput });
		t.nonNull.field("commercialConditionsInput", {
			type: CommercialConditionsInput,
		});
	},
});
