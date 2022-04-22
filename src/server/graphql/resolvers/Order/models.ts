import { enumType, objectType } from "nexus";

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

export const OrderStatus = enumType({
	name: "orderStatus",
	members: ['NEW', 'CONFIRMED', 'INVOICED', 'PAID', 'SHIPPED', 'DELIVERED', 'CANCELLED'],
	description: "status de la orden"
})

export const Order = objectType({
	name: "Order",
	definition(t) {
		t.id("id");
		t.string("createdAt")
		t.string("updatedAt")
		t.field("orderStatus", { type: OrderStatus});
		t.list.field("orderProduct", { type: OrderProduct });
		t.float("totalAmount");
		t.field("orderRetail", { type: OrderRetail });
		t.field("orderBrand", { type: OrderBrand });
		t.field("payment", { type: Payment });
		t.int("shippingId");
	},
});
