import React, { useState, FC } from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import { TABS_STATUS_ORDER, Status } from '@client/utils/constants'
import { STATUS_ORDERS } from '@client/types/commonTypes'
import { useRouter } from "next/router";
import ParsedUrlQuery from "next/router";
interface WizardProps {
}

const styles = (theme: any) => ({
	'& .css-1bkb6ba-MuiStepLabel-labelContainer': {
		color: theme.palette.text.primary, // circle color (COMPLETED)
	},
	'& .css-12yatmv-MuiStepLabel-label.Mui-active':{
		color: theme.palette.text.primary ,
		fontWeight: 'bold'
	},
	'& .css-rafxhc-MuiStepLabel-root .css-12yatmv-MuiStepLabel-label.Mui-active':{
		color: theme.palette.text.primary ,
		fontWeight: '300'
	},
});

export const orderIndex = {
	NEW: 0,
	CONFIRMED: 1,
	INVOICED: 2,
	PAID: 3,
	SHIPPED: 4,
	DELIVERED: 5,
}


const StatusWizardForOrders: FC <WizardProps>= () => {
	const { query } = useRouter();
	
	const status: string = query?.status as string;
	const current: STATUS_ORDERS = status.toUpperCase() as STATUS_ORDERS || 'NEW';

	return (
		<Stepper alternativeLabel activeStep={Object.keys(orderIndex).indexOf(current)} >
			{TABS_STATUS_ORDER.map((tab: Status) => (
				<Step key={tab.value} >
					<StepLabel 
					  sx={styles} >
						{tab.label}
					</StepLabel>
				</Step>
			))}
		</Stepper>
	)
}

export default StatusWizardForOrders;