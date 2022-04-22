import BazarImage from "@client/components/BazarImage";
import BazarRating from "@client/components/BazarRating";
import FlexBox from "@client/components/FlexBox";
import HoverBox from "@client/components/HoverBox";
import { H4 } from "@client/components/Typography";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Box } from "@mui/material";
import Link from "next/link";
import React, { CSSProperties } from "react";

export interface ProductCard3Props {
  className?: string;
  style?: CSSProperties;
  id: number;
  imgUrl: string;
  rating: number;
  title: string;
  price: number;
  off?: number;
  hideReview?: boolean;
  hideFavoriteIcon?: boolean;
}

const ProductCard12: React.FC<ProductCard3Props> = ({
	id,
	imgUrl,
	rating,
	title,
	price,
	off = 20,
	hideReview,
	hideFavoriteIcon,
}) => {
	return (
		<Box>
			<Link href={`/product/${id}`}>
				<a>
					<HoverBox>
						<BazarImage
							src={imgUrl}
							width="100%"
							height="auto"
							alt={title}
							mx="auto"
						/>
					</HoverBox>
				</a>
			</Link>

			<FlexBox justifyContent="space-between">
				<Box mt="1rem">
					<H4 fontWeight="600" fontSize="14px" mb={0.5} title={title} ellipsis>
						{title}
					</H4>
					{!hideReview && <BazarRating value={rating} color="warn" readOnly />}

					<FlexBox alignItems="center">
						<Box pr={1} fontWeight="600" color="primary.main">
              ${(price - (price * off) / 100).toFixed(2)}
						</Box>
						{!!off && (
							<Box color="grey.600" fontWeight="600">
								<del>{price?.toFixed(2)}</del>
							</Box>
						)}
					</FlexBox>
				</Box>

				{!hideFavoriteIcon && (
					<FavoriteBorder
						fontSize="small"
						color="secondary"
						sx={{ opacity: 0.5, m: "1rem" }}
					/>
				)}
			</FlexBox>
		</Box>
	);
};

export default ProductCard12;
