import { Box, Button } from "@mui/material";
import React, { FC } from "react";
import FlexBox from "../FlexBox";
import { H3 } from "../Typography";


const Section16: FC = () => {

	return (
		<Box 
			sx={{
				width: "100%"
			}}
			
			ml="auto"
			mr="auto"
			mt={20} 
			mb={20}>
			<H3 fontSize="30px"  textAlign="center">Solicita unirte a nuestra comunidad de minoristas y marcas independientes</H3>
			<FlexBox mt={3}gap="1rem" justifyContent="center">
				<a href={"/"}>
					<Button
						className="button-link"
						variant="outlined"
						color="secondary"
						disableElevation
						sx={{
							px: "1.75rem",
							height: "44px",
							borderRadius: "8px",
						}}
					>
						Unite como marca
					</Button>
				</a>
				<a href={"/"}>
					<Button
						className="button-link"
						variant="contained"
						color="secondary"
						disableElevation
						sx={{
							px: "1.75rem",
							height: "44px",
							borderRadius: "8px",
						}}
					>
						Unite como Mayorista
					</Button>
				</a>
			</FlexBox>
		</Box>
	);
};


export default Section16;
