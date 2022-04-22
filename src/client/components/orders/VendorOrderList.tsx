import FlexBox from "@client/components/FlexBox";
import TableRow from "@client/components/TableRow";
import { H5 } from "@client/components/Typography";
import { Pagination } from "@mui/material";
import React, { FC, Fragment } from "react";
import OrderRow from "./OrderRow";
import { Order } from '@client/types/commonTypes'

// component props interface

const VendorOrderList: FC= () => {
	return (
		<Fragment>
			<TableRow
				sx={{
					display: { xs: "none", md: "flex" },
					padding: "0px 18px",
					background: "none",
				}}
				elevation={0}
			>
				<H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Orden #
				</H5>
				<H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Estado 
				</H5>
				<H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Fecha de compra
				</H5>
				<H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Última modificación
				</H5>
				<H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Total
				</H5>
				<H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Cliente
				</H5>
				<H5 flex="0 0 0 !important" color="grey.600" px={2.75} my="0px"></H5>
			</TableRow>

			{orderList.map((item, ind) => (
				<OrderRow item={item} key={ind} />
			))}

			<FlexBox justifyContent="center" mt={5}>
				<Pagination
					count={5}
					variant="outlined"
					color="primary"
					onChange={(data) => {
						console.log(data);
					}}
				/>
			</FlexBox>
		</Fragment>
	);
};


const orderList: Order[] = [
	{
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
	},
	{
		id: "1050017AS",
		createdAt: new Date(new Date().setDate(3)),
		updatedAt: new Date(new Date().setDate(4)),
		orderStatus: "INVOICED",
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
	},
	{
		id: "1050017AS",
		createdAt: new Date(new Date().setDate(3)),
		updatedAt: new Date(new Date().setDate(4)),
		orderStatus: "NEW",
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
	},
	{
		id: "1050017AS",
		createdAt: new Date(new Date().setDate(3)),
		updatedAt: new Date(new Date().setDate(4)),
		orderStatus: "CONFIRMED",
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
	},
	{
		id: "1050017AS",
		createdAt: new Date(new Date().setDate(3)),
		updatedAt: new Date(new Date().setDate(4)),
		orderStatus: "CONFIRMED",
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
	},
];

export default VendorOrderList;
