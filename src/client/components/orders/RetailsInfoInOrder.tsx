import React from 'react';
import { Box, Card, styled, Typography } from '@mui/material';
import { OrderRetailClass } from '@client/types/commonTypes'
import { H4 } from '../Typography';
import FlexBox from '../FlexBox';

const StyledLabel = styled(Typography)(({theme}) => ({
	fontSize: "16px",
	color: theme.palette.text.primary
}))
const StyledBox = styled(Box)(({theme}) => ({
	fontSize: "16px",
	color: theme.palette.text.secondary,
	border: '1px solid',
	borderColor: theme.palette.grey[400],
	borderRadius: "8px",
	padding: "8px",
	marginTop: "8px"
}))

const RetailsInfoInOrder: React.FC<Partial<OrderRetailClass>> = ({
	cuit,
	address,
	tax_status,
	fullname
}) => {
	return (
		<Box flexGrow="1">
			<Box>
				<H4>Datos del Cliente</H4>
			</Box>
			<Card >
				<FlexBox p="16px" justifyContent="space-between" alignItems="center">

					<Box>
						<StyledLabel>
                        Razón Social
						</StyledLabel>
						<StyledBox>
							{fullname}
						</StyledBox>
					</Box>
					<Box>
						<StyledLabel>
                        Cuit
						</StyledLabel>
						<StyledBox>
							{cuit}
						</StyledBox>
					</Box>
					<Box>
						<StyledLabel>
                       Dirección
						</StyledLabel>
						<StyledBox>
							{address}
						</StyledBox>
					</Box>
					<Box>
						<StyledLabel>
                        Condición Fiscal
						</StyledLabel>
						<StyledBox>
							{tax_status}
						</StyledBox>
					</Box>
				</FlexBox>
			</Card>
		</Box>
	)
}

export default RetailsInfoInOrder;