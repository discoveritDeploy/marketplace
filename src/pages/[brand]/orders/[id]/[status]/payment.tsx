import React, { useState } from "react";
import FlexBox from "@client/components/FlexBox";
import { H4, H5, H6 } from "@client/components/Typography";
import {
	Button,
	Card,
	styled,
	Box,
	Divider,
	Typography
} from "@mui/material";
import {Paragraph} from '@client/components/Typography'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { Order } from '@client/types/commonTypes';
import ProductDetailHeader from "@client/components/orders/ProductDetailHeader";
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
		orderRetail,
	} = order
	const files = Array(4).fill(null)

	return (
		<VendorDashboardOrders>
			<Card sx={{ p: "0px", mb: "30px", }}>
				<ProductDetailHeader id={id} createdAt={createdAt} retail={orderRetail.nickname} />
				<StyledBox >
					<Box flexGrow="1">
						<H4>
                            Confirmar Pago
						</H4>
						<StyledInfo height="300px">
							<FlexBox height="85%" alignItems="center" justifyContent="space-evenly">
								{ files.map((file, i: number) => (
									<Box key={i} p="16px" sx={{cursor: "pointer"}}>
										<InsertDriveFileOutlinedIcon
											sx={{
												display: "block", 
												color: "primary.main", 
												marginLeft: "auto", 
												marginRight: "auto", 
												mb: "8px"
											}} />
										<Paragraph>
                                            Archivo {i + 1}
										</Paragraph>
									</Box>
								))
								}
							</FlexBox>
							<Button
                            	sx={{ml: "auto", mr:"auto", display: "block", textTransform: "none"}}
								variant="contained"
								color="primary"
							>Descargar archivos</Button>
						</StyledInfo>
						<Paragraph p="8px">
                            El cliente informo el pago el dia 06/04/2022. La acreditación del mismo estará sujeta a la entidad bancaria.
						</Paragraph>
					</Box>
                	<Card sx={{ p: "20px 30px", mb: "1.5rem", display: "inline", minHeight: "300px", minWidth: "300px" }}>
						<H5 mt={0} mb={3}>
              Resumen Total
						</H5>
						<FlexBox justifyContent="space-between" alignItems="center" mb={3}>
							<Typography fontSize="14px" color="grey.600">
                Envío:
							</Typography>
							<FlexBox alignItems="center" maxWidth="100px" ml={1} mt={0.5}>
								<Typography mr={1}>$10</Typography>
							</FlexBox>
						</FlexBox>
						<FlexBox justifyContent="space-between" alignItems="center" mb={3}>
							<Typography fontSize="14px" color="grey.600">
                Ingresos Brutos:
							</Typography>
							<FlexBox alignItems="center" maxWidth="100px" ml={1} mt={0.5}>
								<Typography mr={1}>total* 0.21</Typography>
							</FlexBox>
						</FlexBox>
						<FlexBox justifyContent="space-between" alignItems="center" mb={5}>
							<Typography fontSize="14px" color="grey.600">
                Ganancias:
							</Typography>
							<H6 my="0px">$335</H6>
						</FlexBox>
						<FlexBox justifyContent="space-between" alignItems="center" mb={5}>
							<Typography fontSize="14px" color="grey.600">
                Subtotal:
							</Typography>
							<H6 my="0px">$335</H6>
						</FlexBox>
						<Divider sx={{ mb: "0.5rem" }} />

						<FlexBox justifyContent="space-between" alignItems="center">
							<H6 my="0px">Total</H6>
							<H6 my="0px">$315</H6>
						</FlexBox>
					</Card>
				</StyledBox>
				<StyledBox alignItems="center" height="100px">
					<StyledInfo flexGrow="1">
						<FlexBox justifyContent="space-between">
							<Paragraph>
                                Informar problemas personalescon tu pago
							</Paragraph>
							<Button
								variant="contained"
								color="primary"
							>Soporte</Button>
						</FlexBox>
					</StyledInfo>
					<FlexBox minWidth="300px" height="100%" alignItems="center">
						<Button
							sx={{display: "block", ml: "auto"}}
							variant="contained"
							color="primary"
						>
                        Siguiente
						</Button>
					</FlexBox>
				</StyledBox>
			</Card>
		</VendorDashboardOrders>
	);
};

export default InvoiceOrderDetails;
