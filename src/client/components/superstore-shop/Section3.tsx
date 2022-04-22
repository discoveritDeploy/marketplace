import BazarCard from "@client/components/BazarCard";
import Carousel from "@client/components/carousel/Carousel";
import Category from "@client/components/icons/Category";
import useWindowSize from "@client/hooks/useWindowSize";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import CategorySectionCreator from "../CategorySectionCreator";
import ProductCard6 from "../product-cards/ProductCard6";

interface Props {
  categoryList: any[];
}
const Section3: FC<Props> = ({ categoryList }) => {
	const [visibleSlides, setVisibleSlides] = useState(3);
	const width = useWindowSize();

	useEffect(() => {
		if (width < 650) setVisibleSlides(1);
		else if (width < 950) setVisibleSlides(2);
		else setVisibleSlides(3);
	}, [width]);

	return (
		<CategorySectionCreator
			icon={<Category color="primary" />}
			title="Comprar por categorías"
			seeMoreLink="#"
		>
			<Carousel totalSlides={5} visibleSlides={visibleSlides}>
				{categoryList.map((item, ind) => (
					<Link href={item.categoryUrl} key={ind}>
						<a>
							<BazarCard sx={{ p: "1rem" }} elevation={0}>
								<ProductCard6
									title={item.title}
									subtitle={item.subtitle}
									imgUrl={item.imgUrl}
								/>
							</BazarCard>
						</a>
					</Link>
				))}
			</Carousel>
		</CategorySectionCreator>
	);
};

export default Section3;
