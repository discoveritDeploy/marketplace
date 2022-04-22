import TableRow from "@client/components/TableRow";
import { H5 } from "@client/components/Typography";
import East from "@mui/icons-material/East";
import { Chip, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { format } from "date-fns";
import { es } from 'date-fns/locale'
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Order } from '@client/types/commonTypes'
// component props interface
export interface OrderRowProps {
  item: Order;
}

const OrderRow: FC<OrderRowProps> = ({ item }) => {
	const {  query } = useRouter();
	const getColor = (status: string) => {
		switch (status) {
		case "NEW":
			return "success";
		case "CONFIRMED":
			return "secondary";
		case "INVOICED":
			return "success";
		case "PAID":
			return "success";
		case "SHIPPED":
			return "success";
		case "DELIVERED":
			return "success";
		case "CANCELLED":
			return "error";
		default:
			return "";
		}
	};

	const getLabel = (status: string) => {
		switch (status) {
		case "NEW":
			return "Nueva";
		case "CONFIRMED":
			return "Confirmada";
		case "INVOICED":
			return "Facturada";
		case 'PAID':
			return 'Pagada'
		case "SHIPPED":
			return "Enviada";
		case "DELIVERED":
			return "ENtregada";
		case "CANCELLED":
			return "Cancelada";
		default:
			return "";
		}
	};

	return (
		<Link href={{
			pathname: "/[brand]/orders/[id]/[status]", 
			query:{ 
				brand: query.brand as string,
				id: item.id,
				status: item.orderStatus.toLocaleLowerCase()
			}
		}}>
			<a>
				<TableRow sx={{ my: "1rem", padding: "6px 18px" }}>
					<H5 m={0.75} textAlign="left">
						{item.id}
					</H5>
					<Box m={0.75}>
						<Chip
							size="small"
							label={getLabel(item.orderStatus)}
							sx={{
								p: "0.25rem 0.5rem",
								fontSize: 12,
								color: getColor(item.orderStatus)
									? `${getColor(item.orderStatus)}.900`
									: "inherit",
								backgroundColor: getColor(item.orderStatus)
									? `${getColor(item.orderStatus)}.100`
									: "none",
							}}
						/>
					</Box>
					<Typography className="pre" m={0.75} textAlign="left">
						{format(new Date(item.createdAt), "MMM dd, yyyy", { locale: es})}
					</Typography>
					<Typography className="pre" m={0.75} textAlign="left">
						{format(new Date(item.updatedAt), "MMM dd, yyyy", { locale: es})}
					</Typography>
					<Typography m={0.75} textAlign="left">
            ${item.totalAmount.toFixed(2)}
					</Typography>
					<Typography m={0.75} textAlign="left">
						{item.orderRetail.nickname}
					</Typography>
					<Typography
						textAlign="center"
						color="grey.600"
						sx={{
							flex: "0 0 0 !important",
							display: { xs: "none", md: "block" },
						}}
					>
						<IconButton>
							<East fontSize="small" color="inherit" />
						</IconButton>
					</Typography>
				</TableRow>
			</a>
		</Link>
	);
};

export default OrderRow;
