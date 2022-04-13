import { inputObjectType } from "nexus";

export const ReferencePriceInput = inputObjectType({
	name: "ReferencePriceInput",
	definition(t) {
		t.float("avgSellingPrice");
		t.float("markUp");
	},
});

export const PriceInput = inputObjectType({
	name: "PriceInput",
	definition(t) {
		t.float("originalPrice");
		t.field("referencePrice", { type: ReferencePriceInput }); // todo chequear tipo generado de un campo opcional nullable
	},
});

export const ClaimsPolicyInput = inputObjectType({
	name: "ClaimsPolicyInput",
	definition(t) {
		t.boolean("acceptsRefund");
	},
});

export const TechnicalSpecificationInput = inputObjectType({
	name: "TechnicalSpecificationInput",
	definition(t) {
		t.string("description");
	},
});

export const CreateProductInput = inputObjectType({
	name: "CreateOrderInput",
	definition(t) {
		t.string("title");
		t.string("titleDescription");
		t.float("minQSale");
		t.field("price", { type: PriceInput });
		t.field("claimsPolicy", { type: ClaimsPolicyInput });
		t.field("technicalSpecification", { type: TechnicalSpecificationInput });
		t.int("selledUnits");
	},
});
