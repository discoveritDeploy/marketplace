import BazarCard from "client/components/BazarCard";
import Category from "client/components/icons/Category";
import LazyImage from "client/components/LazyImage";
import { Box, Container, Grid, styled } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";
import CategorySectionHeader from "../CategorySectionHeader";

const StyledBazarCard = styled(BazarCard)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: "0.75rem",
	borderRadius: 8,
	transition: "all 250ms ease-in-out",
	"&:hover": {
		boxShadow: theme.shadows[3],
	},
}));

interface Props {
  categories: any[];
}
const Section10: FC<Props> = ({ categories }) => {
	return (
		<Container sx={{ mb: "70px" }}>
			<CategorySectionHeader
				title="Categories"
				icon={<Category color="primary" />}
				seeMoreLink="#"
			/>

			<Grid container spacing={3}>
				{categories.map((item, ind) => (
					<Grid item lg={2} md={3} sm={4} xs={12} key={ind}>
						<Link href="/">
							<a>
								<StyledBazarCard elevation={1}>
									<LazyImage
										src={item.imgUrl}
										alt="fashion"
										height={52}
										width={52}
										objectFit="contain"
										borderRadius="8px"
									/>
									<Box fontWeight="600" ml={1.25}>
										{item.name}
									</Box>
								</StyledBazarCard>
							</a>
						</Link>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Section10;
