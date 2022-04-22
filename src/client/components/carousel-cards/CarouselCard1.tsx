import BazarImage from "@client/components/BazarImage";
import { Paragraph } from "@client/components/Typography";
import { Box, Button, Grid, styled } from "@mui/material";
import React, { FC } from "react";
import FlexBox from "../FlexBox";
import RegisterButtons from "../registerButtons/registerButtons";

// component props interface
export interface CarouselCard1Props {
  heading?: string;
  body?: string;
  carousel?: any;
}
// styled component
const StyledBox = styled(Box)(({ theme }) => ({
	textAlign: "left",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	".title": {
		fontSize: 50,
		marginTop: 0,
		marginBottom: "1.35rem",
		lineHeight: 1.2,
	},
	[theme.breakpoints.up("sm")]: {
		".grid-item": {
			minHeight: 424,
			display: "flex",
			alignItems: "baseline",
			flexDirection: "column",
			justifyContent: "center",
		},
	},
	[theme.breakpoints.down("sm")]: {
		marginLeft: 0,
		paddingLeft: 0,

		".title": {
			fontSize: 32,
		},
	},
	[theme.breakpoints.down("xs")]: {
		".title": {
			fontSize: 16,
		},
		".title + *": {
			fontSize: 13,
		},
		".button-link": {
			height: 36,
			padding: "0 1.5rem",
			fontSize: 13,
		},
	},
}));

const CarouselCard1: FC<CarouselCard1Props> = ({ carousel }) => {
	return (
		<StyledBox>
			<Grid container spacing={3} alignItems="center" justifyContent="center">
				<Grid item className="grid-item" sm={5} xs={12}>
					<h1 className="title">{carousel.title}</h1>
					<Paragraph color="secondary.main" mb={2.7}>
						{carousel.description}
					</Paragraph>
					<RegisterButtons />
				</Grid>
				<Grid item sm={5} xs={12}>
					<BazarImage
						src={carousel.photoUrl}
						alt="person packing boxes"
						sx={{
							display: "block",
							mx: "auto",
							maxHeight: 400,
							maxWidth: "100%",
						}}
					/>
				</Grid>
			</Grid>
		</StyledBox>
	);
};

export default CarouselCard1;
