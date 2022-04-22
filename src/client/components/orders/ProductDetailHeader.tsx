import React from 'react';
import TableRow from "@client/components/TableRow";
import { format } from "date-fns";
import { Typography, Box } from '@mui/material';
import FlexBox from '../FlexBox';

interface ProductHeaderProps {
    id: string,
    createdAt: Date,
    retail: string
}
const ProductDetailHeader: React.FC<ProductHeaderProps> =  ({
	id,
	createdAt,
	retail
}) => {

	return (
		<TableRow
			elevation={0}
			sx={{
				bgcolor: "grey.200",
				p: "12px",
				borderRadius: "0px !important",
			}}
		>
			<FlexBox
				flex="0 0 0 0 0 !important"
				m={0.75}
				justifyContent="space-around"
				alignItems="center"
				whiteSpace="pre"
			>
				<Typography fontSize="14px" color="grey.600" mr={0.5}>
              Detalles de la orden
				</Typography>
				<Box display="flex">
					<Typography fontSize="14px" color="grey.600" mr={0.5}>
              Orden ID:
					</Typography>
					<Typography fontSize="14px">{id}</Typography>
				</Box>
				<Box display="flex">
					<Typography fontSize="14px" color="grey.600" mr={0.5}>
              Fecha:
					</Typography>
					<Typography fontSize="14px">
						{format(new Date(createdAt), "dd MMMM, yyyy")}
					</Typography>
				</Box>
				<Box display="flex">
					<Typography fontSize="14px" color="grey.600" mr={0.5}>
                        Cliente:
					</Typography>
					<Typography fontSize="14px">
						{retail}
					</Typography>
				</Box>
			</FlexBox>
		</TableRow>
	)
}

export default ProductDetailHeader;