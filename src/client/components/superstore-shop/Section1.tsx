import CarouselCard1 from "@client/components/carousel-cards/CarouselCard1";
import Navbar from "@client/components/navbar/Navbar";
import { Box, Container, styled } from "@mui/material";
import { Fragment } from "react";
import { NextPage } from "next";

interface Props {
  carouselData?: any[];
}


const StyledBox = styled(Box)(({ theme }) => {
	console.log('theme: ', theme)
	return{
		marginBottom: "7.5rem",
		background: theme.palette.background?.lightBlue
	}
})


const Section1: React.FC<Props> = ({ carouselData }) => {
	return (
		<Fragment>
			{/* <Navbar /> */}
			<StyledBox bgcolor="primary" mb={11.5}>
				<Container sx={{ py: "2rem" }}>
					{carouselData &&
						carouselData.map((data, ind) => (
							<CarouselCard1 carousel={data} key={ind} />
						))}
				</Container>
			</StyledBox>
		</Fragment>
	);
};

export default Section1;
