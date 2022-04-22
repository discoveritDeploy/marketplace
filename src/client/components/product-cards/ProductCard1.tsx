import BazarCard from "@client/components/BazarCard";
import LazyImage from "@client/components/LazyImage";
import { H3, Paragraph } from "@client/components/Typography";
import { useAppContext } from "@client/contexts/app/AppContext";
import PriceInfo from "@client/components/priceInfo/priceInfo";
import Close from "@mui/icons-material/Close";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import {ProductInterface} from '@client/types/productTypes';
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";
import {
	Box,
	Chip,
	Dialog,
	DialogContent,
	IconButton,
	styled,
} from "@mui/material";
import Link from "next/link";
import React, { useCallback, useState, CSSProperties } from "react";
import FlexBox from "../FlexBox";

const StyledBazarCard = styled(BazarCard)(() => ({
	position: "relative",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	height: "100%",
	margin: "auto",
	transition: "all 250ms ease-in-out",
	borderRadius: "8px",
	backgroundColor: "white",
	"&:hover": {
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

const StyledChip = styled(Chip)(({theme}) => ({
	position: "absolute",
	fontSize: "10px",
	fontWeight: 600,
	paddingLeft: 3,
	paddingRight: 3,
	top: "10px",
	left: "10px",
	zIndex: 11,
	color: theme.palette.text.primary
}));

const HoverIconWrapper = styled(Box)(({ theme }) => ({
	display: "none",
	flexDirection: "column",
	position: "absolute",
	top: "7px",
	right: "15px",
	cursor: "pointer",
	zIndex: 2,
	[theme.breakpoints.down("md")]: {
		display: "flex",
	},
}));

const ContentWrapper = styled(Box)(() => ({
	padding: "1rem",
	backgroundColor: "white",
	"& .title, & .categories": {
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
	},
}));

export interface ProductCard1Props extends ProductInterface {
  className?: string;
  style?: CSSProperties;
  hoverEffect?: boolean;
  id?: string;
}

const ProductCard1: React.FC<ProductCard1Props> = (
	{...props}
) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [open, setOpen] = useState(false);
	const { state, dispatch } = useAppContext();

	const toggleDialog = useCallback(() => {
		setOpen((open) => !open);
	}, []);

	const toggleIsFavorite = async () => {
		setIsFavorite((fav) => !fav);
	};
	const {
		title,
		title_description,
		image,
		product_id,
		prices: {
			original_price,
			discount_price,
			reference_prices: {
				average_selling_price,
				mark_up
			}
		},
		min_q_sale
	} = props

	return (
		<StyledBazarCard hoverEffect={props.hoverEffect}>
			<ImageWrapper>
				{discount_price !== 0 && (
					<StyledChip color="primary" size="small" label="Liquidación" />
				)}

				<HoverIconWrapper>
					<IconButton sx={{ p: "6px" }} onClick={toggleDialog}>
						<RemoveRedEye color="secondary" fontSize="small" />
					</IconButton>
					<IconButton sx={{ p: "6px" }} onClick={toggleIsFavorite}>
						{isFavorite ? (
							<Favorite color="primary" fontSize="small" />
						) : (
							<FavoriteBorder fontSize="small" />
						)}
					</IconButton>
				</HoverIconWrapper>

				<Link href={`/product/${product_id}`}>
					<a>
						<LazyImage
							src={image}
							width={0}
							height={0}
							layout="responsive"
							alt={title}
						/>
					</a>
				</Link>
			</ImageWrapper>

			<ContentWrapper>
				<FlexBox>
					<Box flex="1 1 0" minWidth="0px" mr={1}>
						<Link href={`/product/${product_id}`}>
							<a>
								<H3
									className="title"
									fontSize="16px"
									textAlign="left"
									fontWeight="600"
									color="grey.600"
									mb={1}
									title={title}
								>
									{title}
								</H3>
							</a>
						</Link>
						<Paragraph mb="8px" lineHeight="20px" color="grey.600" fontSize="14px">{title_description}</Paragraph>
						<Box mt={0.5}>
							<Paragraph mb="8px" color="grey.600" fontWeight="bold" fontSize="14px">Venta mínima: {min_q_sale}</Paragraph>
							<PriceInfo value={original_price} typeValue="currency" label="Costo Unitario" tooltipText="loremipsum asignus totualitus"/>
							{!!discount_price && (
								<Box color="grey.600" fontWeight="600">
									<del>{discount_price?.toFixed(2)}</del>
								</Box>
							)}
							<PriceInfo value={average_selling_price} typeValue="currency" label="Precio minorista de referencia" tooltipText="loremipsum asignus totualitus Precio minorista de referencia"/>
							<PriceInfo value={mark_up} typeValue="percent" label="Margen" tooltipText="loremipsum asignus totualitus"/>
						</Box>
					</Box>

				</FlexBox>
			</ContentWrapper>

			<Dialog open={open} maxWidth={false} onClose={toggleDialog}>
				<DialogContent sx={{ paddingBottom: "1.25rem" }}>
					<IconButton
						sx={{ position: "absolute", top: "0", right: "0" }}
						onClick={toggleDialog}
					>
						<Close className="close" fontSize="small" color="primary" />
					</IconButton>
				</DialogContent>
			</Dialog>
		</StyledBazarCard>
	);
};

ProductCard1.defaultProps = {
}

export default ProductCard1;
