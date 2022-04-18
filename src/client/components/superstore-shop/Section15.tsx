import Category from "client/components/icons/Category";
import { Box } from "@mui/material";
import React, { FC } from "react";
import Carousel from "../carousel/Carousel";
import CategorySectionCreator from "client/components/CategorySectionCreator";
import ReviewCard1 from "client/components/reviewCard/reviewCard1";

interface Props {
  usersReview: any[];
}
const Section15: FC<Props> = ({ usersReview }) => {

	return (
		<CategorySectionCreator
			icon={<Category color="primary" />}
			title="Testimonios"
			seeMoreLink="#"
		>
			<Box mt={-0.5} mb={-0.5}>
				<Carousel
					totalSlides={usersReview.length}
					visibleSlides={1}
					infinite={true}
					arrowButtonColor="primary"
				>
					{usersReview?.map((item, ind) => (
						<Box py={0.5} key={ind}>
							<ReviewCard1
								id={item.id}
								review={item.review}
								imgUrl={item.imgUrl}
								alt={item.alt}
								userName={item.userName}
								category={item.category}
								hoverEffect
							/>
						</Box>
					))}
				</Carousel>
			</Box>
		</CategorySectionCreator>
	);
};

Section15.defaultProps = {
	usersReview: []
}

export default Section15;
