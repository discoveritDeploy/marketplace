import Light from "@client/components/icons/Light";
import useWindowSize from "@client/hooks/useWindowSize";
import { Box } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import Carousel from "../carousel/Carousel";
import CategorySectionCreator from "@client/components/CategorySectionCreator";
import ProductCard1 from "@client/components/product-cards/ProductCard1";

interface Props {
  flashDeals: any[];
}
const Section2: FC<Props> = ({ flashDeals }) => {
	const [visibleSlides, setVisibleSlides] = useState(4);
	const width = useWindowSize();

	useEffect(() => {
		if (width < 500) setVisibleSlides(1);
		else if (width < 650) setVisibleSlides(2);
		else if (width < 950) setVisibleSlides(3);
		else setVisibleSlides(4);
	}, [width]);

	return (
		<CategorySectionCreator
			icon={<Light color="primary" />}
			title="Flash Deals"
			seeMoreLink="#"
		>
			<Box mt={-0.5} mb={-0.5}>
				<Carousel
					totalSlides={flashDeals.length}
					visibleSlides={visibleSlides}
					infinite={true}
				>
					{flashDeals?.map((item, ind) => (
						<Box py={0.5} key={ind}>
							<ProductCard1
								id={item.id}
								imgUrl={item.imgUrl}
								title={item.title}
								rating={item.rating}
								price={item.price}
								off={item.discount}
							/>
						</Box>
					))}
				</Carousel>
			</Box>
		</CategorySectionCreator>
	);
};

Section2.defaultProps = {
	flashDeals: []
}

export default Section2;
