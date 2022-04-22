import React from "react";
import FlexBox from "@client/components/FlexBox";
import { H4, H5, Span } from "@client/components/Typography";
import {
	Button,
	Card,
	styled,
	Box,
	TextField,
	TextFieldProps,
} from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
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




const ShippingOrderDetails: React.FC<ConfirmedProps> = ({order}) => {
	const [selectedDates, setSelectedDates] = React.useState<Array<Date | null>>([new Date()])
	const [time, setTime] = React.useState<Array<Date | null>>([new Date()])
	console.log('time1: ', time)
	const { 
		id,
		createdAt,
		orderRetail,
	} = order

      
	const handleSetTime = (value: any) =>{
		console.log('time: ', time)
		const cloneHours = [...time, value]
		setTime(cloneHours) }
	const handleSetDate = (value: Date | null) => setSelectedDates(prev => [...prev, value]) 
	const renderInput = (props: TextFieldProps): any => {
		console.log('props: ', props)
		return(
			<TextField  
				{...props} value={selectedDates}/> 
		);}
	return (
		<VendorDashboardOrders>
			<Card sx={{ p: "0px", mb: "30px", }}>
				<ProductDetailHeader id={id} createdAt={createdAt} retail={orderRetail.nickname} />
				<Box p="16px">
					<H4>
                        Confirmar Pago
					</H4>
					<Card sx={{ p: "20px 30px", mb: "1.5rem"}}>
						<FlexBox gap="2rem">
							<Span flexGrow="1">
								<H5 mt={0} mb={3}>
                        Dirección de envío
								</H5>
								<TextField
									defaultValue="Kelly Williams 777 Brockton Avenue, Abington MA 2351"
									multiline
									rows={3}
									fullWidth
									sx={{ borderRadius: "10px" }}
								/>
							</Span>
							<Span flexGrow="1">
                                	<H5 mt={0} mb={3}>
                        Retiro en el local
								</H5>
								<TextField
									defaultValue="Kelly Williams 777 Brockton Avenue, Abington MA 2351"
									multiline
									rows={3}
									fullWidth
									sx={{ borderRadius: "10px" }}
								/>
							</Span>
						
						</FlexBox>
					</Card>
				</Box>
				<StyledBox alignItems="center" height="100px">
					<StyledInfo flexGrow="1">
						<FlexBox justifyContent="space-between">
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<DatePicker 
									disableCloseOnSelect
									value={selectedDates[0]}
                                    
									onChange={(newValue) => {
										handleSetDate(newValue)
									}}
									minDate={new Date()}
									renderInput={renderInput}
								/>
							</LocalizationProvider>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<TimePicker 
									disableCloseOnSelect
									views={['hours']}
									value={time[0]}
									onChange={(newValue) => {
										handleSetTime(newValue)
									}}
									renderInput={(params) => <TextField {...params} />}
								/>
							</LocalizationProvider>
						</FlexBox>
					</StyledInfo>
				</StyledBox>
				<Box  p="16px">
					<Button
						sx={{display: "block", ml: "auto"}}
						variant="contained"
						color="primary"
					>
                        Siguiente
					</Button>
				</Box>
			</Card>
		</VendorDashboardOrders>
	);
};

export default ShippingOrderDetails;
