import Link from "next/link";
import { Box } from "@mui/material";
import FlexBox from "client/components/FlexBox";
import HoverBox from "client/components/HoverBox";
import { H4 } from "client/components/Typography";
import BazarCard from "client/components/BazarCard";
import LazyImage from "client/components/LazyImage";
import GiftBox from "client/components/icons/GiftBox";
import useWindowSize from "client/hooks/useWindowSize";
import Carousel from "client/components/carousel/Carousel";
import React, { FC, useEffect, useState } from "react";
import CategorySectionCreator from "../CategorySectionCreator";

interface Props {
  bigDiscountList: any[];
}
const Section13: FC<Props> = ({ bigDiscountList }) => {
	const [visibleSlides, setVisibleSlides] = useState(6);
	const width = useWindowSize();

	useEffect(() => {
		if (width < 370) setVisibleSlides(1);
		else if (width < 650) setVisibleSlides(2);
		else if (width < 950) setVisibleSlides(4);
		else setVisibleSlides(6);
	}, [width]);

	return (
		<CategorySectionCreator
			icon={<GiftBox />}
			title="Big Discounts"
			seeMoreLink="#"
		>
			<Box my="-0.25rem">
				<Carousel totalSlides={9} visibleSlides={visibleSlides}>
					{bigDiscountList.map((item) => (
						<Box py={0.5} key={item.id}>
							<BazarCard sx={{ p: "1rem" }}>
								<Link href={`/product/${item.id}`}>
									<a>
										<HoverBox borderRadius="8px" mb={1}>
											<LazyImage
												src={item.imgUrl}
												width={100}
												height={100}
												layout="responsive"
												alt={item.title}
											/>
										</HoverBox>
										<H4 fontWeight="600" fontSize="14px" mb={0.5}>
											{item.title}
										</H4>

										<FlexBox>
											<H4
												fontWeight="600"
												fontSize="14px"
												color="primary.main"
												mr={1}
											>
                        ${Math.ceil(item.price).toLocaleString()}
											</H4>

											<H4 fontWeight="600" fontSize="14px" color="grey.600">
												<del>${Math.ceil(item.price).toLocaleString()}</del>
											</H4>
										</FlexBox>
									</a>
								</Link>
							</BazarCard>
						</Box>
					))}
				</Carousel>
			</Box>
		</CategorySectionCreator>
	);
};

export default Section13;
