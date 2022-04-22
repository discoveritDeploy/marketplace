
import ConfirmOrderDetails from './confirm';
import { useRouter } from "next/router";
import React from "react";
import { Order } from '@client/types/commonTypes'
import InvoiceOrderDetails from './invoice';
import PayOrderDetails from './payment'
import ShippingOrderDetails from './shipping'
import DeliveryOrderDetails from './delivery' 

const order: Order = {
	id: "1050017AS",
	createdAt: new Date(new Date().setDate(3)),
	updatedAt: new Date(new Date().setDate(4)),
	orderStatus: "DELIVERED",
	orderProduct: [{
		id: "as1234567890",
		title: "sabanas peruanas",
		quantity: 15,
		unitPrice: 3200
	}],
	totalAmount: 47500,
	orderRetail: {
		id: "34564322",
		nickname: "once textiles",
		cuit: 452622728298,
		address: "Avda Libertador 7208, NUñez",
		tax_status: "Responsable Inscripto",
		fullname: "Textiles Corcho S.A."
	},
	orderBrand: {
		id: "123432345",
		nickname: "demo brand"
	},
	payment: {
		status: "UNPAID",
		withholding: [{type: 'mercadopago'}]
	},
	shippingId: 1234567890
}


const OrderDetails = () => {
	const router = useRouter();
	const { status } = router.query;

	switch (status) {
	case "new": return <ConfirmOrderDetails order={order}/>
	case "confirmed": return <InvoiceOrderDetails order={order}/>
	case "invoiced": return <PayOrderDetails order={order}/>
	case "paid": return <ShippingOrderDetails order={order}/>
	case "delivered": return <DeliveryOrderDetails order={order}/>
	default: return <ConfirmOrderDetails order={order}/>
	}
};



export default OrderDetails;
