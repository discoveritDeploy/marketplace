import { objectType } from "nexus";

export const OrderProduct = objectType({
	name: "OrderProduct",
	definition(t) {
		t.id("id");
		t.string("title");
		t.int("quantity");
		t.float("unitPrice");
	},
});

export const OrderRetail = objectType({
	name: "OrderRetail",
	definition(t) {
		t.id("id");
		t.string("nickname");
	},
});

export const OrderBrand = objectType({
	name: "OrderBrand",
	definition(t) {
		t.id("id");
		t.string("nickname");
	},
});

export const Withholding = objectType({
	name: "Withholding",
	definition(t) {
		t.string("type");
	},
});

export const Payment = objectType({
	name: "Payment",
	definition(t) {
		t.string("status");
		t.list.field("withholding", { type: Withholding });
	},
});

export const Order = objectType({
	name: "Order",
	definition(t) {
		t.id("id");
		t.string("orderStatus");
		t.list.field("orderProduct", { type: OrderProduct });
		t.float("totalAmount");
		t.field("orderRetail", { type: OrderRetail });
		t.field("orderBrand", { type: OrderBrand });
		t.field("payment", { type: Payment });
		t.int("shippingId");
	},
});
