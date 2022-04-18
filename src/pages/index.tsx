import Section1 from "../client/components/superstore-shop/Section1";
import Section12 from "../client/components/superstore-shop/Section12";
import Section14 from "../client/components/superstore-shop/Section14";
import Section15 from "../client/components/superstore-shop/Section15";
import AppLayout from "../client/components/layout/AppLayout";
import { NextPage } from "next";
import {
	getFlashDeals,
	getMainCarousel,
} from "../client/utils/api/superstore-shop/carousels";
import {
	getServiceList,
	getUserReviews
} from "../client/utils/api/superstore-shop/sections";
import Section16 from "../client/components/superstore-shop/Section16";

export interface Props {
  mainCarouselData: any[];
  flashDealsData: any[];
  serviceList: any[];
  reviewList: any[];
}
const IndexPage: NextPage<Props> = (props) => {
	const {
		mainCarouselData,
		flashDealsData,
		serviceList,
		reviewList
	} = props;

	return (
		<AppLayout>
			<Section1 carouselData={mainCarouselData} />
			<Section12 serviceList={serviceList} />
			<Section14 flashDeals={flashDealsData} />
			<Section15 usersReview={reviewList} />
			<Section16 />
		</AppLayout>
	);
};

export async function getStaticProps() {
	const mainCarouselData = await getMainCarousel();
	const flashDealsData = await getFlashDeals();
	const serviceList = await getServiceList();
	const reviewList = await getUserReviews();
	return {
		props: {
			mainCarouselData,
			flashDealsData,
			serviceList,
			reviewList
		},
	};
}

export default IndexPage;
