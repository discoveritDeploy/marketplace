import React, { useState } from "react";
import FlexBox from "@client/components/FlexBox";
import { H4, H5, H6 } from "@client/components/Typography";
import {
	Button,
	Card,
	styled,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { Order } from '@client/types/commonTypes';
import ProductDetailHeader from "@client/components/orders/ProductDetailHeader";
import FormattedNumber from "@client/components/formattedNumber/formattedNumber";
import RetailsInfoInOrder from "@client/components/orders/RetailsInfoInOrder";
import UploadFileInput from "@client/components/uploadFileInput/uploadFileInput";
import VendorDashboardOrders from '@client/components/layout/VendorDashboardOrders';

interface ConfirmedProps {
    order: Order;
}

const StyledBox = styled(Box)(({theme}) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "start",
	gap: "1rem",
	padding: "16px",
	[theme.breakpoints.down("xs")]: {
		display: "contents"
	}
}))

const StyledInfo = styled(Box)(({theme}) => ({
	fontSize: "16px",
	color: theme.palette.text.secondary,
	border: '1px solid',
	borderColor: theme.palette.grey[400],
	borderRadius: "8px",
	padding: "8px",
	marginTop: "8px"
}))

const InvoiceOrderDetails: React.FC<ConfirmedProps> = ({order}) => {
	const { 
		id,
		createdAt,
		orderProduct,
		totalAmount,
		orderRetail,
	} = order
	const totalItems = orderProduct.reduce((acum, item) => acum + item.quantity, 0)

	return (
		<VendorDashboardOrders>
			<Card sx={{ p: "0px", mb: "30px", }}>
				<ProductDetailHeader id={id} createdAt={createdAt} retail={orderRetail.nickname} />
				<StyledBox >
					<Box flexGrow="1">
						<H4>
                            Facturar Orden
						</H4>
						{orderProduct.map((item) => (
							<FlexBox
								px={2}
								py={1}
								flexWrap="wrap"
								alignItems="center"
								key={item.id}
							>
								<FlexBox  m={0.75} alignItems="center" width="100%" justifyContent="space-between">
									<Box ml={2.5} width="100%">
										<FlexBox alignItems="center" justifyContent="space-between">
											<Typography fontSize="14px" color="grey.600" fontWeight="500">
												{item.quantity} unidades.
											</Typography>
									    <H6 my="0px">{item.title}</H6>
											<Typography fontSize="14px" color="grey.600">
												ID:{' '}{item.id}
											</Typography>
										</FlexBox>
									</Box>
								</FlexBox>
							</FlexBox>
						))}
					</Box>
                	<Card sx={{ p: "20px 30px", mb: "1.5rem", display: "inline", minHeight: "300px", minWidth: "300px" }}>
						<Box mb={13}>
							<H5 mt={0} mb={1}>
              Cantidad de items
							</H5>
							<StyledInfo>
								{totalItems}
							</StyledInfo>
						</Box>
						<Box>
							<H5 mt={0} mb={1}>
              Monto Total
							</H5>
							<StyledInfo>
								<FormattedNumber value={totalAmount} type="currency" />
							</StyledInfo>
						</Box>
					</Card>
				</StyledBox>
				<StyledBox>
					<RetailsInfoInOrder {...orderRetail} />
				</StyledBox>
				<Box p="16px">
					<UploadFileInput />
				</Box>
				
				<Box p="16px">
					<Button
						sx={{ml: "auto", display: "block", textTransform: "none"}}
						variant="contained"
						color="primary"
					>
            Confirmar la carga
					</Button>
				</Box>
			</Card>
		</VendorDashboardOrders>
	);
};

export default InvoiceOrderDetails;
