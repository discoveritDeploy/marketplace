import React, { useState} from "react";
import FlexBox from "@client/components/FlexBox";
import { H5, H6, H4 } from "@client/components/Typography";
import Delete from "@mui/icons-material/Delete";
import CloseIcon from '@mui/icons-material/Close';
import {
	Avatar,
	Button,
	Card,
	Divider,
	IconButton,
	styled,
	TextField,
	Typography,
	Dialog, 
	DialogContent
} from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import VendorDashboardOrders from "@client/components/layout/VendorDashboardOrders";
import { Order } from '@client/types/commonTypes'
import ProductDetailHeader from "@client/components/orders/ProductDetailHeader";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import FormattedNumber from "@client/components/formattedNumber/formattedNumber";

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

const ConfirmedOrderDetails: React.FC<ConfirmedProps> = ({order}) => {
	const router = useRouter();
	const [toggleDialog, setToggleDialog] = useState(false)
	const { 
		id,
		createdAt,
		updatedAt,
		orderStatus,
		orderProduct,
		totalAmount,
		orderRetail,
		orderBrand,
		payment,
		shippingId,
	} = order

	const handleToggle = () => setToggleDialog(prev => !prev)
	return (
		<VendorDashboardOrders>
			<Card sx={{ p: "0px", mb: "30px", }}>
				<ProductDetailHeader id={id} createdAt={createdAt} retail={orderRetail.nickname} />
				<StyledBox>
					{orderProduct.map((item) => (
						<FlexBox
							px={2}
							py={1}
							flexWrap="wrap"
							alignItems="center"
							key={item.id}
							flexGrow="1"
						>
							<FlexBox  m={0.75} alignItems="center" width="100%" justifyContent="space-between">
								<Avatar
									src="/assets/images/products/imagetree.png"
									sx={{ height: 64, width: 64 }}
								/>
								<Box ml={2.5} width="100%">
									<H6 my="0px">{item.title}</H6>
									<FlexBox alignItems="center" justifyContent="space-between">
										<Typography fontSize="14px" color="grey.600">
											<FormattedNumber value={item.unitPrice} type="currency" /> precio por unidad.
										</Typography>
										<Typography fontSize="14px" color="grey.600">
												ID:{' '}{id}
										</Typography>
										<Box display="flex"  alignItems="center" maxWidth="100px">
											<EditOutlinedIcon /><TextField defaultValue={3} sx={{ml: "8px"}}  type="number" fullWidth />
										</Box>
										<IconButton>
											<Delete fontSize="small" />
										</IconButton>
									</FlexBox>
								</Box>
							</FlexBox>
						</FlexBox>
					))}
                	<Card sx={{ p: "20px 30px", mb: "1.5rem", display: "inline", minHeight: "300px", minWidth: "300px" }}>
						<H5 mt={0} mb={3}>
              Resumen Total
						</H5>
						<FlexBox justifyContent="space-between" alignItems="center" mb={3}>
							<Typography fontSize="14px" color="grey.600">
                Envío:
							</Typography>
							<FlexBox alignItems="center" maxWidth="100px" ml={1} mt={0.5}>
								<Typography mr={1}>$</Typography>
								<TextField defaultValue={10} type="number" fullWidth />
							</FlexBox>
						</FlexBox>
						<FlexBox justifyContent="space-between" alignItems="center" mb={3}>
							<Typography fontSize="14px" color="grey.600">
                IVA:
							</Typography>
							<FlexBox alignItems="center" maxWidth="100px" ml={1} mt={0.5}>
								<Typography mr={1}>total* 0.21</Typography>
							</FlexBox>
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
				<StyledBox>
					<Card sx={{ p: "20px 30px", mb: "1.5rem", flexGrow: "1" }}>
						<H5 mt={0} mb={3}>
              Dirección de envío
						</H5>
						<TextField
							defaultValue="Kelly Williams 777 Brockton Avenue, Abington MA 2351"
							multiline
							rows={5}
							fullWidth
							sx={{ borderRadius: "10px" }}
						/>
					</Card>
					<Card sx={{ p: "20px 30px", mb: "1.5rem",  flexGrow: "1" }}>
						<H5 mt={0} mb={3}>
                        Retiro en el local
						</H5>
						<TextField
							defaultValue="Kelly Williams 777 Brockton Avenue, Abington MA 2351"
							multiline
							rows={5}
							fullWidth
							sx={{ borderRadius: "10px" }}
						/>
					</Card>
				</StyledBox>
				<Box p="16px">
					<Card sx={{ p: "20px 30px" }}>
						<H5 mt={0} mb={2}>
              Metodos de pago seleccionados
						</H5>
						<Box p="16px 0">
                            Mercadopago
						</Box>
					</Card>
				</Box>
				
				<FlexBox justifyContent="space-between" alignItems="center" p="16px">

					<Button
						variant="outlined"
						color="secondary"
						onClick={handleToggle}
					>
            Cancelar Orden
					</Button>
					<Button
						sx={{borderRadius:"8px"}}
						variant="contained"
						color="primary"
					>
            Confirmar Orden
					</Button>
				</FlexBox>
			</Card>
			<Dialog open={toggleDialog} maxWidth={false} onClose={handleToggle}>
				<DialogContent sx={{ padding: "1.25rem", width: " 350px", height: "225px", cursor: "pointer" }}>
					<Box><CloseIcon onClick={handleToggle} sx={{display: "block", marginLeft: "auto", mb: "8px"}} /></Box>
					<H4 mb={8}>¿Estas seguro que deseas cancelar la orden?</H4>
					<Button sx={{display: "block", margin: "0 auto"}} color="primary" variant="contained">Confirmar</Button>
				</DialogContent>
			</Dialog>
		</VendorDashboardOrders>
	);
};

export default ConfirmedOrderDetails;
