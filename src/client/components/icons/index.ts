import FeedbackThumbsUp from "@client/components/icons/FeedbackThumbsUp";
import Shield from "@client/components/icons/Shield";
import Truck from "@client/components/icons/Truck";
import Apple from "@client/components/icons/Apple";
import Beer from "@client/components/icons/Beer";
import Bottle from "@client/components/icons/Bottle";
import Breakfast from "@client/components/icons/Breakfast";
import Carrot from "@client/components/icons/Carrot";
import Honey from "@client/components/icons/Honey";
import Milk from "@client/components/icons/Milk";
import Snack from "@client/components/icons/Snack";
import Yogurt from "@client/components/icons/Yogurt";
import CreditCardVerified from "@client/components/icons/CreditCardVerified";
import CustomerService from "@client/components/icons/CustomerService";
import AlarmClock from "@client/components/icons/AlarmClock";
import MoneyGuarantee from "@client/components/icons/MoneyGurantee";
import OnlineSupport from "@client/components/icons/OnlineSupport";
import Payment from "@client/components/icons/Payment";
import PickUpBox from "@client/components/icons/PickUpBox";
import OnlineService from "@client/components/icons/OnlineService";
// furniture shop page icons
import Home from "./Home";
import Popular from "./furniture-shop/Popular";
import Trending from "./furniture-shop/Trending";
import Products from "./furniture-shop/Products";
import Chair from "./furniture-shop/Chair";
import Decoration from "./furniture-shop/Decoration";
import Interior from "./furniture-shop/Interior";
import Furniture from "./furniture-shop/Furniture";
import Stool from "./furniture-shop/Stool";
import Wardrobe from "./furniture-shop/Wardrobe";
import Sofa from "./furniture-shop/Sofa";
import Dining from "./furniture-shop/Dining";
import Living from "./furniture-shop/Living";
import RoundTable from "./furniture-shop/RoundTable";
import RoomSet from "./furniture-shop/RoomSet";
// gift shop page icon
import BirthdayCake from "./gift-shop/BirthdayCake";
import Children from "./gift-shop/Children";
import Chirstmas from "./gift-shop/Christmas";
import Flower from "./gift-shop/Flower";
import TeddyBear from "./gift-shop/TeddyBear";
import ValentineGift from "./gift-shop/ValentineGift";
import WeddingGift from "./gift-shop/WeddingGift";
import NewYearGift from "./gift-shop/NewYearGift";
import Toys from "./gift-shop/Toys";
import Football from "./gift-shop/Football";
import BabyToys from "./gift-shop/BabyToys";
import Robot from "./gift-shop/Robot";
// health and beauty homepage icons
import HealthBeauty from "./health-and-beauty/HealthBeauty";
import Mascara from "./health-and-beauty/Mascara";
import Powder from "./health-and-beauty/Powder";
import Lotion from "./health-and-beauty/Lotion";
import Lipstick from "./health-and-beauty/Lipstick";
import FaceMask from "./health-and-beauty/FaceMask";
import Thermometer from "./health-and-beauty/Thermometer";
import OxygenPump from "./health-and-beauty/OxygenPump";
import LenseCase from "./health-and-beauty/LenseCase";
import AutoMotive from "./health-and-beauty/Automotive";
import { SvgIconProps } from '@mui/material';

export type service = {
	[key: string]: ((props: SvgIconProps<"svg", {}>) => JSX.Element);
  }
  

const appIcons: service = {
	Beer,
	Milk,
	Snack,
	Truck,
	Honey,
	Apple,
	Shield,
	Bottle,
	Carrot,
	Yogurt,
	Payment,
	PickUpBox,
	Breakfast,
	AlarmClock,
	OnlineSupport,
	OnlineService,
	MoneyGuarantee,
	CustomerService,
	FeedbackThumbsUp,
	CreditCardVerified,

	// furniture-shop-icons
	Home,
	Sofa,
	Chair,
	Stool,
	Dining,
	Living,
	Popular,
	RoomSet,
	Trending,
	Products,
	Interior,
	Wardrobe,
	Furniture,
	Decoration,
	RoundTable,

	// gift-shop-page-icons
	Toys,
	Robot,
	Flower,
	BabyToys,
	Children,
	Football,
	Chirstmas,
	TeddyBear,
	WeddingGift,
	NewYearGift,
	BirthdayCake,
	ValentineGift,

	// health-and-beauty-page-icons
	Powder,
	Lotion,
	Mascara,
	Lipstick,
	FaceMask,
	LenseCase,
	OxygenPump,
	AutoMotive,
	Thermometer,
	HealthBeauty,
};

export default appIcons;
