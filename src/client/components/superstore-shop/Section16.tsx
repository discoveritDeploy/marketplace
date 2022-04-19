import { Box } from "@mui/material";
import React, { FC } from "react";
import RegisterButtons from "../registerButtons/registerButtons";
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
			<H3 fontSize="30px" mb="36px"  textAlign="center">Solicita unirte a nuestra comunidad de minoristas y marcas independientes</H3>
			<RegisterButtons />
		</Box>
	);
};


export default Section16;
