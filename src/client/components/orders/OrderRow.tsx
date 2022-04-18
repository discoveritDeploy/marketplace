import TableRow from "client/components/TableRow";
import { H5 } from "client/components/Typography";
import East from "@mui/icons-material/East";
import { Chip, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { format } from "date-fns";
import Link from "next/link";
import React, { FC } from "react";

type retail = {
  nickname: string
}
// component props interface
export interface OrderRowProps {
  item: {
    order_id: any;
    status: string;
    href: string;
    creation_date: string | Date;
    last_update: string | Date;
    payment_amount: number;
    retail: retail,
  };
}

const OrderRow: FC<OrderRowProps> = ({ item }) => {
	const getColor = (status: string) => {
		switch (status) {
		case "Pendiente de facturar":
			return "secondary";
		case "Entregada":
			return "success";
		case "Nueva":
			return "success";
		case "Pendiente de pago":
			return "error";
		case "Cancelada":
			return "error";
		default:
			return "";
		}
	};

	return (
		<Link href={item.href}>
			<a>
				<TableRow sx={{ my: "1rem", padding: "6px 18px" }}>
					<H5 m={0.75} textAlign="left">
						{item.order_id}
					</H5>
					<Box m={0.75}>
						<Chip
							size="small"
							label={item.status}
							sx={{
								p: "0.25rem 0.5rem",
								fontSize: 12,
								color: getColor(item.status)
									? `${getColor(item.status)}.900`
									: "inherit",
								backgroundColor: getColor(item.status)
									? `${getColor(item.status)}.100`
									: "none",
							}}
						/>
					</Box>
					<Typography className="pre" m={0.75} textAlign="left">
						{format(new Date(item.creation_date), "MMM dd, yyyy")}
					</Typography>
					<Typography className="pre" m={0.75} textAlign="left">
						{format(new Date(item.creation_date), "MMM dd, yyyy")}
					</Typography>
					<Typography m={0.75} textAlign="left">
            ${item.payment_amount.toFixed(2)}
					</Typography>
					<Typography m={0.75} textAlign="left">
						{item.retail.nickname}
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
