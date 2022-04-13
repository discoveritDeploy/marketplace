import { inputObjectType } from "nexus";

export const OrderProductInput = inputObjectType({
	name: "OrderProductInput",
	definition(t) {
		t.id("id");
		t.string("title");
		t.int("quantity");
		t.float("unitPrice");
	},
});

export const OrderRetailInput = inputObjectType({
	name: "OrderRetailInput",
	definition(t) {
		t.id("id");
		t.string("nickname");
	},
});

export const OrderBrandInput = inputObjectType({
	name: "OrderBrandInput",
	definition(t) {
		t.id("id");
		t.string("nickname");
	},
});

export const WithholdingInput = inputObjectType({
	name: "WithholdingInput",
	definition(t) {
		t.string("type");
	},
});

export const PaymentInput = inputObjectType({
	name: "PaymentInput",
	definition(t) {
		t.string("status");
		t.field("withholding", { type: WithholdingInput });
	},
});

export const CreateOrderInput = inputObjectType({
	name: "CreateOrderInput",
	definition(t) {
		t.string("orderStatus");
		t.list.field("orderProduct", { type: OrderProductInput });
		t.float("totalAmount");
		t.field("orderRetail", { type: OrderRetailInput });
		t.field("orderBrand", { type: OrderBrandInput });
		t.field("payment", { type: PaymentInput });
		t.int("shippingId");
	},
});
