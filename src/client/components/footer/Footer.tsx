// import AppStore from "@client/components/AppStore";
import BazarIconButton from "@client/components/BazarIconButton";
import Image from "@client/components/BazarImage";
// import Facebook from "@client/components/icons/Facebook";
// import Google from "@client/components/icons/Google";
// import Instagram from "@client/components/icons/Instagram";
// import Twitter from "@client/components/icons/Twitter";
// import Youtube from "@client/components/icons/Youtube";
// import { Paragraph } from "@client/components/Typography";
import { Box, Container, Grid, styled } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";
import FlexBox from "../FlexBox";

// styled component
const StyledLink = styled("a")(({ theme }) => ({
	position: "relative",
	display: "block",
	padding: "0.3rem 0rem",
	color: theme.palette.grey[300],
	cursor: "pointer",
	borderRadius: 4,

	"&:hover": {
		color: theme.palette.grey[300],
	},
}));

const Footer: FC = () => {
	return (
		<footer>
			<Box bgcolor="#CFEBF6">
				<Container sx={{ p: "1rem", color: "white" }}>
					<Box py={10} overflow="hidden">
						<Grid container spacing={3}>
							<Grid item lg={4} md={6} sm={6} xs={12}>
								<Link href="/">
									<a>
										<Image mb={2.5} src="/assets/images/logo.png" alt="logo" />
									</a>
								</Link>

								{/* <AppStore /> */}
							</Grid>

							<Grid item lg={2} md={6} sm={6} xs={12}>
								<Box
									fontSize="25px"
									fontWeight="600"
									mb={2.5}
									lineHeight="1"
									color="grey.300"
								>
                 Sobre nosotros
								</Box>

								<div>
									{aboutLinks.map((item, ind) => (
										<Link href="/" key={ind} passHref>
											<StyledLink>{item}</StyledLink>
										</Link>
									))}
								</div>
							</Grid>

							<Grid item lg={3} md={6} sm={6} xs={12}>
								<Box
									fontSize="25px"
									fontWeight="600"
									mb={2.5}
									lineHeight="1"
									color="grey.300"
								>
                  Unirse
								</Box>

								<div>
									{customerCareLinks.map((item, ind) => (
										<Link href="/" key={ind} passHref>
											<StyledLink>{item}</StyledLink>
										</Link>
									))}
								</div>
							</Grid>

							<Grid item lg={3} md={6} sm={6} xs={12}>
								<Box
									fontSize="25px"
									fontWeight="600"
									mb={2.5}
									lineHeight="1"
									color="grey.300"
								>
                  Conectar
								</Box>
								<Box py={0.6} color="grey.300">
                 Buenos Aires, Argentina
								</Box>
								<Box py={0.6} color="grey.300">
                  Email: soporte@discoverit.com
								</Box>
								<Box py={0.6} mb={2} color="grey.300">
                  Phone: +11 5 566 7233
								</Box>

								{/* <FlexBox className="flex" mx={-0.625}>
									{iconList.map((item, ind) => (
										<a
											href={item.url}
											target="_blank"
											rel="noreferrer noopenner"
											key={ind}
										>
											<BazarIconButton
												m={0.5}
												bgcolor="rgba(0,0,0,0.2)"
												fontSize="12px"
												padding="10px"
											>
												<item.icon fontSize="inherit" />
											</BazarIconButton>
										</a>
									))}
								</FlexBox> */}
							</Grid>
						</Grid>
					</Box>
				</Container>
			</Box>
		</footer>
	);
};

const aboutLinks = [
	"Sobre Discoverit",
	"Blog"
];

const customerCareLinks = [
	"Quiero vender",
	"Quiero Comprar",
];

const iconList = [
	// { icon: Facebook, url: "https://www.facebook.com/UILibOfficial" },
	// { icon: Twitter, url: "https://twitter.com/uilibofficial" },
	// {
	// 	icon: Youtube,
	// 	url: "https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg",
	// },
	// { icon: Google, url: "/" },
	// { icon: Instagram, url: "https://www.instagram.com/uilibofficial/" },
];

export default Footer;
