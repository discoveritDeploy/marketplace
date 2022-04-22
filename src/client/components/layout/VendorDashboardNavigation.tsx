import FlexBox from "@client/components/FlexBox";
import Assignment from "@mui/icons-material/Assignment";
import Dashboard from "@mui/icons-material/Dashboard";
import NoteAdd from "@mui/icons-material/NoteAdd";
import Settings from "@mui/icons-material/Settings";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/router";
import React from "react";
import {
	DashboardNavigationWrapper,
	StyledDashboardNav,
} from "./DashboardStyle";

const VendorDashboardNavigation = () => {
	const { pathname, query } = useRouter();

	return (
		<DashboardNavigationWrapper
			sx={{ px: "0px", py: "1.5rem", color: "grey.900" }}
		>
			{linkList.map((item) => (
				<StyledDashboardNav
					isCurrentPath={pathname.includes(item.href)}
					href={{
						pathname: '/[brand]'+ item.href,
						query: { brand: query?.brand as string},
					  }}
					key={item.title}
				>
					<>
						<FlexBox alignItems="center">
							<item.icon
								className="nav-icon"
								fontSize="small"
								color="inherit"
								sx={{ mr: "10px" }}
							/>

							<span>{item.title}</span>
						</FlexBox>
						<span>{item.count}</span>
					</>
				</StyledDashboardNav>
			))}
		</DashboardNavigationWrapper>
	);
};

const linkList = [
	{
		href: "/dashboard",
		title: "Resúmen",
		icon: Dashboard,
	},
	{
		href: "/products",
		title: "Productos",  
		icon: Assignment,
		count: 300,
	},
	{
		href: "/orders",
		title: "Ordenes",
		icon: ShoppingCart,
		count: 40,
	},
	{
		href: "/claims",
		title: "Reclamos",
		icon: ShoppingCart,
		count: 40,
	},
	{
		href: "/account-settings",
		title: "Configurar CUenta",
		icon: Settings,
	},
];

export default VendorDashboardNavigation;
