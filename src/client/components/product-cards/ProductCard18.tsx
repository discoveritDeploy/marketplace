import BazarCard from "client/components/BazarCard";
import LazyImage from "client/components/LazyImage";
import { H3 } from "client/components/Typography";
import {
	Box,
	styled,
} from "@mui/material";
import Link from "next/link";
import React, { CSSProperties } from "react";

const StyledBazarCard = styled(BazarCard)(({theme}) => ({
	position: "relative",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	height: "100%",
	margin: "auto",
	overflow: "hidden",
	transition: "all 250ms ease-in-out",
	borderRadius: "8px",
	color: theme.palette.text.primary,
	"&:hover": {
		background: theme.palette.grey[300],
		"& h3": {
			color: "white",
		},
		"& .css-1i2n18j": {
			display: "flex",
		},
	},
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
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

export interface ProductCard1Props {
  className?: string;
  style?: CSSProperties;
  rating?: number;
  hoverEffect?: boolean;
  imgUrl: string;
  title: string;
  off?: number;
  discount?: number;
  id: string | number;
  hideRating?: boolean;
  showProductSize?: boolean;
}
const ProductCard1: React.FC<ProductCard1Props> = ({
	id,
	title,
	imgUrl,
	hoverEffect,
}) => {

	return (
		<StyledBazarCard hoverEffect={hoverEffect}>
			<ImageWrapper>

			
				<Link href={`/category/${id}`}>
					<a>
						<LazyImage
							src={imgUrl}
							width={0}
							height={0}
							layout="responsive"
							alt={title}
						/>
					</a>
				</Link>
			</ImageWrapper>

			<ContentWrapper>
				<Box flex="1 1 0" minWidth="0px" mr={1}>
					<Link href={`/product/${id}`}>
						<a>
							<H3
								className="title"
								fontSize="16px"
								textAlign="left"
								fontWeight="600"
								color="text.primary"
								mb={4}
								title={title}
							>
								{title}
							</H3>
						</a>
					</Link>
				</Box>
			</ContentWrapper>
		</StyledBazarCard>
	);
};

export default ProductCard1;
