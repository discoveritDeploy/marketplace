import { Box, BoxProps, Select, SelectProps } from "@mui/material";
import { Small } from "client/components/Typography";


const BazarSelectField: React.FC<SelectProps & BoxProps> = ({
	label,
	InputProps,
	children,
	...props
}: any) => {
	const boxProps: any = {};
	const textFieldProps: any = {};

	for (const key in props) {
		if (spacePropList.includes(key)) {
			boxProps[key] = props[key];
		} else textFieldProps[key] = props[key];
	}

	return (
		<Box {...boxProps}>
			{label && (
				<Small
					display="block"
					mb={1}
					textAlign="left"
					fontWeight="600"
					color="grey.700"
				>
					{label}
				</Small>
			)}
			<Select
				{...textFieldProps}
			>
				{children}
			</Select>
		</Box>
	);
};

const spacePropList = [
	"m",
	"mt",
	"mr",
	"mb",
	"ml",
	"mx",
	"my",
	"p",
	"pt",
	"pr",
	"pb",
	"pl",
	"px",
	"py",
	"margin",
	"marginTop",
	"marginRight",
	"marginBottom",
	"marginLeft",
	"marginX",
	"marginY",
	"padding",
	"paddingTop",
	"paddingRight",
	"paddingBottom",
	"paddingLeft",
	"paddingX",
	"paddingY",
];

export default BazarSelectField;
