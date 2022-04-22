import BazarRating from "@client/components/BazarRating";
import HoverBox from "@client/components/HoverBox";
import LazyImage from "@client/components/LazyImage";
import { H4, Small } from "@client/components/Typography";
import { Box } from "@mui/material";
import React, { CSSProperties } from "react";
import FlexBox from "../FlexBox";

export interface ProductCard4Props {
  className?: string;
  style?: CSSProperties;
  imgUrl: string;
  rating: number;
  title: string;
  price: number;
  reviewCount: number;
}

const ProductCard4: React.FC<ProductCard4Props> = ({
	imgUrl,
	rating,
	title,
	price,
	reviewCount = 0,
}) => {
	return (
		<Box>
			<HoverBox mb={2} mx="auto" borderRadius="8px">
				<LazyImage
					src={imgUrl}
					width={0}
					height={0}
					layout="responsive"
					alt={title}
					mx="auto"
				/>
			</HoverBox>

			<FlexBox justifyContent="center" alignItems="center" mb={0.5}>
				<BazarRating value={rating} color="warn" readOnly />
				<Small fontWeight="600" pl={0.5}>
          ({reviewCount})
				</Small>
			</FlexBox>

			<H4
				fontWeight="600"
				fontSize="14px"
				textAlign="center"
				mb={0.5}
				title={title}
				ellipsis
			>
				{title}
			</H4>
			<H4
				fontWeight="600"
				fontSize="14px"
				textAlign="center"
				color="primary.main"
			>
        ${Math.ceil(price).toLocaleString()}
			</H4>
		</Box>
	);
};

export default ProductCard4;
