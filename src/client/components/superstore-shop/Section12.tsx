import BazarCard from "@client/components/BazarCard";
import BazarIconButton from "@client/components/BazarIconButton";
import { Container, Grid, SvgIconProps } from "@mui/material";
import React, { FC } from "react";
import { H4, Span } from "../Typography";
import appIcons from "@client/components/icons";
import FlexBox from "../FlexBox";

type service = {
  [key: string]:  any | (SvgIconProps);
}

interface Props {
  serviceList: service[];
}
const Section12: FC<Props> = ({ serviceList }) => {
	return (
		<Container sx={{ mb: "70px", mt: "70px" }}>
			<Grid container spacing={3} justifyContent="center">
				{serviceList.map((item, ind) => {
					const Icon = appIcons[item.icon];
					return (
						<Grid item lg={3} md={6} xs={12} key={ind}>
							<BazarCard
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									p: "1rem",
									height: "100%",
									borderRadius: "8px",
									border: 1,
									borderColor: "secondary.main"
								}}
								hoverEffect
							>
								<BazarIconButton
									fontSize="1.75rem"
									height="64px"
									width="64px"
									mr="16px"
								>
									<Icon fontSize="inherit" color="primary" />
								</BazarIconButton>
								<FlexBox flexDirection="column" alignItems="flex-start">
									<H4 mt={1.5} mb={0.5} textAlign="left">
										{item.title}
									</H4>
									<Span textAlign="left" color="grey.600">
										{item.description}
									</Span>
								</FlexBox>
							</BazarCard>
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
};

// const serviceList = [
//   {
//     icon: Truck,
//     title: 'Worldwide Delivery',
//   },
//   {
//     icon: CreditCardVerified,
//     title: 'Safe Payment',
//   },
//   {
//     icon: Shield,
//     title: 'Shop With Confidence',
//   },
//   {
//     icon: CustomerService,
//     title: '24/7 Support',
//   },
// ]

export default Section12;
