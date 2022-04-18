import Footer from "client/components/footer/Footer";
import Header from "client/components/header/Header";
import MobileNavigationBar from "client/components/mobile-navigation/MobileNavigationBar";
import Sticky from "client/components/sticky/Sticky";
import {
	styled,
} from "@mui/material";

import Head from "next/head";
import React, { FC, useCallback, useState } from "react";

type AppLayoutProps = {
  title?: string;
  navbar?: React.ReactChild;
};

const ThemedContainer = styled('main')(({theme}) => ({
	background: theme.palette.background.default,
}))

const AppLayout: FC<AppLayoutProps> = ({
	children,
	navbar,
	title = "Discoverit - Compra en grande",
}) => {
	const [isFixed, setIsFixed] = useState(false);

	const toggleIsFixed = useCallback((fixed) => {
		setIsFixed(fixed);
	}, []);

	return (
		<ThemedContainer>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			{/* <Topbar /> */}

			<Sticky fixedOn={0} onSticky={toggleIsFixed}>
				<Header isFixed={isFixed} />
			</Sticky>

			{navbar && <div className="section-after-sticky">{navbar}</div>}
			{!navbar ? (
				<div className="section-after-sticky">{children}</div>
			) : (
				children
			)}

			<MobileNavigationBar />
			<Footer />
		</ThemedContainer>
	);
};

export default AppLayout;
