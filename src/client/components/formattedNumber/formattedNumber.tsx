// vendors
import React, { FC } from 'react';

export type typeFormat = 'decimal' | 'currency' | 'percent'

interface PropsFormattedNumber {
    className?: string
    maximumFractionDigits?: number
    minimumFractionDigits?: number
    type?: typeFormat,
    value: number,
} 

const defaultProps = {
	className: '',
	maximumFractionDigits: 2,
	minimumFractionDigits: 2,
	type: 'decimal' as typeFormat
}; 


const FormattedNumber: FC<PropsFormattedNumber> = ({
	className,
	value,
	minimumFractionDigits,
	maximumFractionDigits,
	type
}) => {

	const miniumDigits =type === 'currency' ? minimumFractionDigits : 0
	const maxDigits = type === 'currency'? maximumFractionDigits : 0

	const formatValue = (value).toLocaleString(
		undefined, // leave undefined to use the visitor's browser 
				   // locale or a string like 'en-US' to override it.
		{ minimumFractionDigits: miniumDigits,
			maximumFractionDigits: maxDigits
		 }
	  );

	return (
		<span
			className={`${className}`}
		>
			{type === 'currency' && "$"}
			{formatValue}
			{type === 'percent' && "%"}
		</span>
	);
};



FormattedNumber.defaultProps = defaultProps;

export default FormattedNumber;
