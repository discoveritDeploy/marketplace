import { objectType } from "nexus";

export const ReferencePrice = objectType({
	name: "ReferencePrice",
	definition(t) {
		t.float("avgSellingPrice");
		t.float("markUp");
	},
});

export const Price = objectType({
	name: "Price",
	definition(t) {
		t.float("originalPrice");
		t.field("referencePrice", { type: ReferencePrice }); // todo chequear tipo generado de un campo opcional nullable
	},
});

export const ClaimsPolicy = objectType({
	name: "ClaimsPolicy",
	definition(t) {
		t.boolean("acceptsRefund");
	},
});

export const TechnicalSpecification = objectType({
	name: "TechnicalSpecification",
	definition(t) {
		t.string("description");
	},
});

export const Product = objectType({
	name: "Product",
	definition(t) {
		t.id("id");
		t.string("title");
		t.string("titleDescription");
		t.float("minQSale");
		t.field("price", { type: Price });
		t.field("claimsPolicy", { type: ClaimsPolicy });
		t.field("technicalSpecification", { type: TechnicalSpecification });
		t.int("selledUnits");
	},
});
