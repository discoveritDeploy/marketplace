import FlexBox from "client/components/FlexBox";
import TableRow from "client/components/TableRow";
import { H5 } from "client/components/Typography";
import { Pagination } from "@mui/material";
import React, { FC, Fragment } from "react";
import OrderRow from "./OrderRow";

// component props interface
export interface VendorOrderListProps {}

const VendorOrderList: FC<VendorOrderListProps> = () => {
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

const orderList = [
	{
		order_id: "1050017AS",
		status: "Pendiente de facturar",
		creation_date: new Date(),
		last_updated: new Date(),
		payment_amount: 350,
		retail: {
			nickname: "Cliente"
		},
		href: "/vendor/orders/5452423",
	},
	{
		order_id: "1050017AS",
		status: "Pendiente de pago",
		creation_date: new Date(),
		last_updated: new Date(),
		payment_amount: 500,
		retail: {
			nickname: "Cliente"
		},
		href: "/vendor/orders/5452423",
	},
	{
		order_id: "1050017AS",
		status: "Entregada",
		creation_date: "2020/12/23",
		payment_amount: 700,
		retail: {
			nickname: "Cliente"
		},
		href: "/vendor/orders/5452423",
	},
	{
		order_id: "1050017AS",
		status: "Nueva",
		creation_date: "2020/12/23",
		payment_amount: 700,
		retail: {
			nickname: "Cliente"
		},
		href: "/vendor/orders/5452423",
	},
	{
		order_id: "1050017AS",
		status: "Cancelada",
		creation_date: "2020/12/15",
		payment_amount: 300,
		retail: {
			nickname: "Cliente"
		},
		href: "/vendor/orders/5452423",
	},
];

export default VendorOrderList;
