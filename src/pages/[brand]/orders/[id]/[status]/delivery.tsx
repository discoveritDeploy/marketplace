import React, { useState } from "react";
import FlexBox from "@client/components/FlexBox";
import { H4, Paragraph } from "@client/components/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import {
	Button,
	Card,
	Box,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import GiftBox from "@client/components/icons/GiftBox";
import { Order } from '@client/types/commonTypes';
import ProductDetailHeader from "@client/components/orders/ProductDetailHeader";
import VendorDashboardOrders from '@client/components/layout/VendorDashboardOrders';

interface ConfirmedProps {
    order: Order;
}


  
const DleiveryOrderDetails: React.FC<ConfirmedProps> = ({order}) => {
	const theme = useTheme()
	const {query} = useRouter()
	const styles = {
		largeIcon: {
			width: 60,
			height: 60,
			display: "block",
			margin: "16px auto",
			'& path': {
				fill: theme?.palette.primary.main,
			}
		},
	};
	const { 
		id,
		createdAt,
		orderRetail,
	} = order
	const msg = "¡Felicitaciones! \n El pedido fue entregado con exito."
      
	return (
		<VendorDashboardOrders>
			<Card sx={{ p: "0px", mb: "30px", }}>
				<ProductDetailHeader id={id} createdAt={createdAt} retail={orderRetail.nickname} />
				<Box p="16px">
					<H4>
                        Entrega
					</H4>
					<Card sx={{ p: "20px 30px", mb: "1.5rem", height: "300px"}}>
						<FlexBox 
							flexDirection="column" 
							justifyContent="center" 
							height="100%" 
							alignItems="center">
							<Box >
								<GiftBox sx={styles.largeIcon} />
							</Box>
							
							<Paragraph fontSize="24px" textAlign="center">
								{msg}
							</Paragraph>
						</FlexBox>
					</Card>
				</Box>
				<FlexBox justifyContent="flex-end"  p="16px">
					<Link href={{pathname: "/[brand]/orders", query: query.brand as string}} passHref>
						<Button
							sx={{ bgcolor: "primary.main", px: "2rem" }}
							variant="contained"
							color="primary"
						>
                        Finalizar
						</Button>
					</Link>
				</FlexBox>
			</Card>
		</VendorDashboardOrders>
	);
};

export default DleiveryOrderDetails;
