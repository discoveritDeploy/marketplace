import NavbarLayout from "client/components/layout/NavbarLayout";
import ProductCardList from "client/components/products/ProductCard1List";
import ProductFilterCard from "client/components/products/ProductFilterCard";
import ShopIntroCard from "client/components/shop/ShopIntroCard";
import Sidenav from "client/components/sidenav/Sidenav";
import useWindowSize from "client/hooks/useWindowSize";
import FilterList from "@mui/icons-material/FilterList";
import { Grid, IconButton } from "@mui/material";
import React from "react";

const Brand = () => {
	const width = useWindowSize();
	const isTablet = width < 1025;

	return (
		<NavbarLayout>
			<ShopIntroCard />
			<Grid container spacing={3}>
				<Grid
					item
					md={3}
					xs={12}
					sx={{
						"@media only screen and (max-width: 1024px)": {
							display: "none",
						},
					}}
				>
					<ProductFilterCard />
				</Grid>

				<Grid item md={9} xs={12}>
					{isTablet && (
						<Sidenav
							position="left"
							handle={
								<IconButton
									sx={{
										marginLeft: "auto",
										display: "block",
									}}
								>
									<FilterList fontSize="small" />
								</IconButton>
							}
						>
							<ProductFilterCard />
						</Sidenav>
					)}
					<ProductCardList />
				</Grid>
			</Grid>
		</NavbarLayout>
	);
};

export default Brand;
