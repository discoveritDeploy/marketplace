import BazarCard from "@client/components/BazarCard";
import LazyImage from "@client/components/LazyImage";
import { H4, H5, Paragraph } from "@client/components/Typography";
import {
	Box,
	styled,
} from "@mui/material";
import React, { CSSProperties } from "react";
import FlexBox from "../FlexBox";


const StyledBazarCard = styled(BazarCard)(() => ({
	position: "relative",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	gap: "0.5rem",
	width: "100%",
	height: "100%",
	margin: "auto",
	overflow: "hidden",
	padding: "16px",
	transition: "all 250ms ease-in-out",
	borderRadius: "8px",

	"&:hover": {
		"& .css-1i2n18j": {
			display: "flex",
		},
	},
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
	width: "181px",
	height: "181px",
	position: "relative",
	display: "inline-block",
	textAlign: "center",
	[theme.breakpoints.down("sm")]: {
		display: "block",
	},
}));


const ContentWrapper = styled(Box)(() => ({
	padding: "1rem",
	"& .title, & .categories": {
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
	},
}));

export interface ReviewCard1Props {
  className?: string;
  style?: CSSProperties;
  rating?: number;
  hoverEffect?: boolean;
  review: string;
  userName: string;
  category: string;
  imgUrl: string;
  alt: string;
  off?: number;
  discount?: number;
  id: string | number;
  hideRating?: boolean;
  showProductSize?: boolean;
}
const ReviewCard1: React.FC<ReviewCard1Props> = ({
	review,
	userName,
	imgUrl,
	category,
	alt,
	hoverEffect,
}) => {

	return (
		<StyledBazarCard hoverEffect={hoverEffect}>
			<ImageWrapper>
				<LazyImage
					src={imgUrl}
					layout="fill"
					alt={alt}
				/>
			</ImageWrapper>
			<Box flex="1 1 0" minWidth="0px" pr={1} mr={1}>
				<Paragraph color="grey.600" fontSize="16px">{review}</Paragraph>
				<H4 mt="1rem" color="grey.300">{userName}</H4>
				<H5>{category}</H5>
			</Box>
		</StyledBazarCard>
	);
};

export default ReviewCard1;
