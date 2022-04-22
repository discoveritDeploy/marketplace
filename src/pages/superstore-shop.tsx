import Section1 from "@client/components/superstore-shop/Section1";
import Section10 from "@client/components/superstore-shop/Section10";
import Section11 from "@client/components/superstore-shop/Section11";
import Section12 from "@client/components/superstore-shop/Section12";
import Section13 from "@client/components/superstore-shop/Section13";
import Section2 from "@client/components/superstore-shop/Section2";
import Section3 from "@client/components/superstore-shop/Section3";
import Section4 from "@client/components/superstore-shop/Section4";
import Section5 from "@client/components/superstore-shop/Section5";
import Section6 from "@client/components/superstore-shop/Section6";
import Section7 from "@client/components/superstore-shop/Section7";
import Section8 from "@client/components/superstore-shop/Section8";
import Section9 from "@client/components/superstore-shop/Section9";
import AppLayout from "@client/components/layout/AppLayout";
import { NextPage } from "next";
import {
	getBigDiscountList,
	getFlashDeals,
	getMainCarousel,
	getTopCategories,
} from "@client/utils/api/superstore-shop/carousels";
import {
	getCarBrands,
	getCarList,
	getCategories,
	getMobileBrands,
	getMobileList,
	getMobileShops,
	getMoreItems,
	getNewArrivalList,
	getOpticsBrands,
	getOpticsList,
	getOpticsShops,
	getServiceList,
	getTopRatedBrand,
	getTopRatedProduct,
} from "@client/utils/api/superstore-shop/sections";

interface Props {
  mainCarouselData?: any[];
  flashDealsData?: any[];
  topCategories?: any[];
  topRatedBrands?: any[];
  topRatedProducts?: any[];
  newArrivalsList?: any[];
  bigDiscountList?: any[];
  carBrands?: any[];
  carList?: any[];
  mobileBrands?: any[];
  mobileShops?: any[];
  mobileList?: any[];
  opticsBrands?: any[];
  opticsShops?: any[];
  opticsList?: any[];
  bottomCategories?: any[];
  moreItems?: any[];
  serviceList?: any[];
}
const IndexPage: NextPage<Props> = (props) => {
	const {
		mainCarouselData,
		flashDealsData,
		topCategories,
		topRatedBrands,
		topRatedProducts,
		newArrivalsList,
		bigDiscountList,
		carBrands,
		carList,
		mobileBrands,
		mobileShops,
		mobileList,
		opticsBrands,
		opticsShops,
		opticsList,
		bottomCategories,
		moreItems,
		serviceList,
	} = props;

	return (
		<AppLayout>
			<Section1 carouselData={mainCarouselData} />
			<Section2 flashDeals={flashDealsData} />
			<Section3 categoryList={topCategories} />
			<Section4
				topRatedList={topRatedProducts}
				topRatedBrands={topRatedBrands}
			/>
			<Section5 newArrivalsList={newArrivalsList} />
			<Section13 bigDiscountList={bigDiscountList} />
			<Section6 carBrands={carBrands} carList={carList} />
			<Section7
				mobileBrands={mobileBrands}
				mobileShops={mobileShops}
				mobileList={mobileList}
			/>
			<Section8 />
			<Section9
				opticsList={opticsList}
				opticsShops={opticsShops}
				opticsBrands={opticsBrands}
			/>
			<Section10 categories={bottomCategories} />
			<Section11 moreItems={moreItems} />
			<Section12 serviceList={serviceList} />
		</AppLayout>
	);
};

export async function getStaticProps() {
	const mainCarouselData = await getMainCarousel();
	const flashDealsData = await getFlashDeals();
	const topCategories = await getTopCategories();
	const topRatedBrands = await getTopRatedBrand();
	const topRatedProducts = await getTopRatedProduct();
	const newArrivalsList = await getNewArrivalList();
	const bigDiscountList = await getBigDiscountList();
	const carBrands = await getCarBrands();
	const carList = await getCarList();
	const mobileBrands = await getMobileBrands();
	const mobileShops = await getMobileShops();
	const mobileList = await getMobileList();
	const opticsBrands = await getOpticsBrands();
	const opticsShops = await getOpticsShops();
	const opticsList = await getOpticsList();
	const bottomCategories = await getCategories();
	const moreItems = await getMoreItems();
	const serviceList = await getServiceList();
	return {
		props: {
			mainCarouselData,
			flashDealsData,
			topCategories,
			topRatedBrands,
			topRatedProducts,
			newArrivalsList,
			bigDiscountList,
			carBrands,
			carList,
			mobileBrands,
			mobileShops,
			mobileList,
			opticsBrands,
			opticsShops,
			opticsList,
			bottomCategories,
			moreItems,
			serviceList,
		},
	};
}

export default IndexPage;
