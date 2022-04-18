import FlexBox from "client/components/FlexBox";
import FacebookFilled from "client/components/icons/FacebookFilled";
import InstagramFilled from "client/components/icons/InstagramFilled";
import TwitterFilled from "client/components/icons/TwitterFilled";
import YoutubeFilled from "client/components/icons/YoutubeFilled";
import { H3, Small, Span } from "client/components/Typography";
import Call from "@mui/icons-material/Call";
import Place from "@mui/icons-material/Place";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FormattedNumber from 'client/components/formattedNumber/formattedNumber'
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import { Avatar, Button, Card, Rating } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import InfoHover from "../infoHover/infoHover";

export interface ShopIntroCardProps {
}

interface IDictionary {
	[id: string]: number | boolean,
    minSale: number,
	discount: boolean, 
	shipping: boolean,
	withdrawal: boolean,
	location: boolean
}


const ShopIntroCard: React.FC<ShopIntroCardProps> = () => {
	const imgUrl = '/assets/images/brandBanner.png';
	const avatar = "/assets/images/faces/propic.png";
	const brandName = "Scarlett Beauty";
	const features: IDictionary = {
		minSale: 30000,
		discount: true,
		shipping: true,
		withdrawal: true,
		location: true,
		delivery: true
	}
	 
	
	const featuresArray = [
		{
			feature: 'minSale',
			title: <>Venta Mínima {<FormattedNumber value={features.minSale} type="currency"/>}</>,
			icon: null,
			info: `${brandName} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut augue augue. Praesent posuere ut neque non placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae`
		},
		{
			feature: "withdrawal",
			title: `Retiro por el Local`,
			icon: <HomeOutlinedIcon />,
			info: `${brandName} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut augue augue. Praesent posuere ut neque non placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae`
		},
		{
			feature: 'shipping',
			title: `Envíos`,
			icon: <BusinessCenterOutlinedIcon />,
			info: `${brandName} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut augue augue. Praesent posuere ut neque non placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae`
		},
		{
			feature: 'discount',
			title: `Descuento`,
			icon: <PercentOutlinedIcon />,
			info: `${brandName} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut augue augue. Praesent posuere ut neque non placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae`
		},
		{
			feature: 'location',
			title: `Ubicación`,
			icon: <Place />,
			info: `${brandName} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut augue augue. Praesent posuere ut neque non placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae`
		},
		{
			feature: 'delivery',
			title: `Entrega`,
			icon: <Place />,
			info: `${brandName} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut augue augue. Praesent posuere ut neque non placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae`
		}
	]
	return (
		<Card sx={{ mb: "32px", pb: "20px", overflow: "unset" }}>
			<Box
				height="202px"
				sx={{
					height: "202px",
					background: `url(${imgUrl}) center/cover`,
				}}
			/>

			<FlexBox mt={-8} px={3.75} flexWrap="wrap">
				<Avatar
					src={avatar}
					sx={{
						height: "120px",
						width: "120px",
						mr: "37px",
						border: "4px solid",
						borderColor: "grey.100",
					}}
				/>

				<Box
					sx={{
						flex: "1 1 0",
						minWidth: "250px",
						"@media only screen and (max-width: 500px)": {
							marginLeft: 0,
						},
					}}
				>
					<FlexBox
						flexWrap="wrap"
						justifyContent="space-between"
						alignItems="center"
						mt={0.375}
						mb={3}
					>
						<Box
							bgcolor="secondary.main"
							borderRadius="4px"
							p="4px 16px"
							display="inline-block"
							my="8px"
						>
							<H3 fontWeight="600" color="grey.100">
                			{brandName}
							</H3>
						</Box>

						<FlexBox my="8px">
							{socialLinks.map((item, ind) => (
								<a
									href={item.url}
									target="_blank"
									rel="noreferrer noopener"
									key={ind}
								>
									<item.icon
										sx={{
											fontSize: "1.875rem",
											mr: ind < socialLinks.length - 1 ? "10px" : "",
										}}
									/>
								</a>
							))}
						</FlexBox>
					</FlexBox>

					<FlexBox
						flexWrap="wrap"
						justifyContent="flex-start"
						alignItems="flex-start"
						width="80%"
					>
						{
							featuresArray.map((item) => {
								const {
									title,
									icon,
									info,
									feature
								} = item
								if(features[feature]){
									return (
										<InfoHover 
											padding="4px 8px"
											flexBasis="33%" 
											justifyContent="flex-start"
											alignItems="baseline"
											key={feature} 
											label={title} 
											icon={icon}>
											<Box width="200px" textAlign="left">
												{info}
											</Box>
										</InfoHover>
									)
								}
							})
						}
					</FlexBox>
				</Box>
			</FlexBox>
		</Card>
	);
};

const socialLinks = [
	{
		icon: FacebookFilled,
		url: "https://facebook.com",
	},
	{
		icon: TwitterFilled,
		url: "https://twitter.com",
	},
	{
		icon: YoutubeFilled,
		url: "https://youtube.com",
	},
	{
		icon: InstagramFilled,
		url: "https://instagram.com",
	},
];

export default ShopIntroCard;
