import React, { useState, FC } from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import { TABS_STATUS_ORDER, Status } from 'client/utils/constants'

interface WizardProps {
    current: number
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

const StatusWizardForOrders: FC <WizardProps>= ({current}) => {
	console.log('TABS_STATUS_ORDER: ', TABS_STATUS_ORDER)
	return (
		<Stepper alternativeLabel activeStep={current} >
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