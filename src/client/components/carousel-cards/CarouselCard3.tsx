import BazarCard from "client/components/BazarCard";
import BazarImage from "client/components/BazarImage";
import FlexBox from "client/components/FlexBox";
import { H2, Paragraph, Small } from "client/components/Typography";
import { styled } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";

// styled components
const ContentWrapper = styled(BazarCard)(({ theme }) => ({
	boxShadow: theme.shadows[4],
	borderRadius: "2px",
	height: "100%",
}));

const StyledFlexBox = styled(FlexBox)(() => ({
	flexDirection: "column",
	alignItems: "center",
	padding: "1rem",
	paddingTop: "3rem",
}));

const StyledShopButton = styled(Small)(({ theme }) => ({
	fontWeight: 900,
	borderBottom: `2px solid ${theme.palette.primary.main}`,
	lineHeight: 1.6,
}));

// component props interface
interface Props {
  carouselData?: any;
}
const CarouselCard3: FC<Props> = ({ carouselData }) => {
	return (
		<ContentWrapper>
			<StyledFlexBox>
				<H2 mb="0.5rem" textAlign="center" lineHeight={1.2}>
					{carouselData.title}
				</H2>
				<Paragraph color="grey.600" textAlign="center" mb="1.5rem">
          Starting at ${carouselData.price} & save upto {carouselData.off}%
				</Paragraph>

				<Link href={`/product/${carouselData.id}`}>
					<a>
						<StyledShopButton>{carouselData.buttonText}</StyledShopButton>
					</a>
				</Link>
			</StyledFlexBox>

			<BazarImage width="100%" src={carouselData.imgUrl} alt="shoes" />
		</ContentWrapper>
	);
};

export default CarouselCard3;
