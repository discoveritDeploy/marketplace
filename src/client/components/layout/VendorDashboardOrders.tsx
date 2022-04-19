import { Container, Grid, Button } from "@mui/material";
import React from "react";
import Navbar from "../navbar/Navbar";
import AppLayout from "./AppLayout";
import VendorDashboardNavigation from "./VendorDashboardNavigation";
import DashboardPageHeader from "./DashboardPageHeader";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import { useRouter } from "next/router";
import Link from "next/link";




const VendorDashboardOrders: React.FC = ({ children }) =>{ 
	const {  query } = useRouter();
	return(
		<AppLayout navbar={<Navbar />}>
			<Container sx={{ my: "2rem", maxWidth: "1500px !important"}}>
				<Grid container spacing={3}>
					<Grid
						item
						lg={3}
						xs={12}
						sx={{ display: { xs: "none", sm: "none", md: "block" } }}
					>
						<VendorDashboardNavigation />
					</Grid>
					<Grid item lg={9} xs={12}>
						<DashboardPageHeader
							title="Order Details"
							icon={ShoppingBag}
							button={
								<Link href={{pathname: "/[brand]/orders", query: query.brand as string}} passHref>
									<Button
										color="secondary"
										sx={{ bgcolor: "primary.main", px: "2rem" }}
									>
              Back to Order List
									</Button>
								</Link>
							}
						/>
						{children}
					</Grid>
				</Grid>
			</Container>
		</AppLayout>
	);
}
export default VendorDashboardOrders;
