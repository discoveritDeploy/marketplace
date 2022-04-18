import Category from "client/components/icons/Category";
import useWindowSize from "client/hooks/useWindowSize";
import { Box } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import Carousel from "../carousel/Carousel";
import CategorySectionCreator from "client/components/CategorySectionCreator";
import ProductCard18 from "client/components/product-cards/ProductCard18";

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
			icon={<Category color="primary" />}
			title="Comprar por categorías"
			seeMoreLink="#"
			mt={20}
		>
			<Box mb={20}>
				<Carousel
					totalSlides={flashDeals.length}
					visibleSlides={visibleSlides}
					infinite={true}
					arrowButtonColor="primary"
				>
					{flashDeals?.map((item, ind) => (
						<Box py={0.5} key={ind}>
							<ProductCard18
								id={item.id}
								imgUrl={item.imgUrl}
								title={item.title}
								hoverEffect
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
