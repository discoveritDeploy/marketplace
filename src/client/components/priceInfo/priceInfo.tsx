import React from 'react';
import FlexBox from '../FlexBox';
import FormattedNumber from '../formattedNumber/formattedNumber';
import InformationTooltip from '../tooltip/tooltip';
import { Box } from '@mui/system';
import {Paragraph} from 'client/components/Typography';

interface PropsPriceInfo {
    value: number,
    typeValue: 'currency' | 'percent' | 'decimal',
    label: string,
    tooltipText: string
}

const PriceInfo: React.FC<PropsPriceInfo> = ({value, typeValue, label, tooltipText}) => {

	return (
		<FlexBox pr={1} fontWeight="300" color="primary.main" pt="84x" pb="4px">
			<Box minWidth="85px" fontWeight="500">
				<FormattedNumber type={typeValue} value={value}/>
			</Box>
			<InformationTooltip ml="8px" color="grey.600" infoText={tooltipText}>
				<Paragraph color="grey.600" display="inline" fontSize="12px">{label}</Paragraph>
			</InformationTooltip>
		</FlexBox>
	)
}

export default PriceInfo;