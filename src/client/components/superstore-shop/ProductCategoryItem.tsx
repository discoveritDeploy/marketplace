import BazarCard from "@client/components/BazarCard";
import LazyImage from "@client/components/LazyImage";
import { H4 } from "@client/components/Typography";
import { styled } from "@mui/material";
import { SxProps } from "@mui/system";
import React, { FC, HtmlHTMLAttributes } from "react";

// component props interface
export interface ProductCategoryItemProps
  extends HtmlHTMLAttributes<HTMLElement> {
  isSelected?: boolean;
  imgUrl?: string;
  title: string;
  sx: SxProps;
}
// styled component
const StyledBazarCard = styled(BazarCard)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: "0.75rem 1rem",
	borderRadius: 5,
	cursor: "pointer",
	"&:hover": {
		boxShadow: theme.shadows[2],
	},
}));

const ProductCategoryItem: FC<ProductCategoryItemProps> = ({
	title,
	isSelected,
	imgUrl,
	sx = {},
}) => {
	return (
		<StyledBazarCard
			sx={{ bgcolor: isSelected ? "white" : "grey.100", ...sx }}
			elevation={isSelected ? 2 : 0}
		>
			{imgUrl && (
				<LazyImage
					width={20}
					height={20}
					layout="fixed"
					objectFit="cover"
					src={imgUrl}
					alt=""
				/>
			)}
			<H4 ml={2} lineHeight="1" textTransform="capitalize">
				{title}
			</H4>
		</StyledBazarCard>
	);
};

export default ProductCategoryItem;
