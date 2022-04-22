import "@client/fake-db";
import { client } from "@client/graphql/client";
import Head from "next/head";
import Router from "next/router";
import "nprogress/nprogress.css";
import nProgress from "nprogress";
import { AppProps } from "next/app";
import MuiTheme from "@client/theme/MuiTheme";
import "simplebar/dist/simplebar.min.css";
import OpenGraphTags from "@client/utils/OpenGraphTags";
import React, { Fragment, useEffect } from "react";
import GoogleAnalytics from "@client/utils/GoogleAnalytics";
import { AppProvider } from "@client/contexts/app/AppContext";
import createEmotionCache from "@client/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { Client, Provider } from "urql";
import { AuthProvider } from "@client/utils/AuthProvider";
import ProtectRoute from "@client/utils/ProtectRoute";
import ToasterElement from "@client/Toaster";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  Component: any;
  clientAndEmotionCache?: EmotionCache;
  clientUrlq: Client,
  pageProps: any;
}
// export const cache = createCache({ key: 'css', prepend: true })

//Binding events.
Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());
// small change
nProgress.configure({ showSpinner: false });

const App = ({
	Component,
	clientAndEmotionCache = clientSideEmotionCache,
	pageProps,
	clientUrlq
}: MyAppProps) => {
	const Layout = Component.layout || Fragment;

	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
		}
	}, []);
	console.log('cliewnt: ', clientUrlq)
	return (
		<AppProvider>
			<AuthProvider>
				<ProtectRoute>
					<CacheProvider value={clientAndEmotionCache}>
						<Head>
							<meta name="viewport" content="width=device-width, initial-scale=1" />
							<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
							<GoogleAnalytics />
							<OpenGraphTags />
						</Head>
						<Provider value={client}>
							<MuiTheme>
								<Layout>
									<ToasterElement />
									<Component {...pageProps} />
								</Layout>
							</MuiTheme>
						</Provider>
					</CacheProvider>
				</ProtectRoute>
			</AuthProvider>
		</AppProvider>
	);
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps };
// };

export default App;













// import { Toaster } from "react-hot-toast";
// import type { AppProps } from "next/app";
// import { Provider } from "urql";
// import { client } from "../client/graphql/client";
// import Layout from "../client/components/Layout";

// function CustomApp({ Component, pageProps }: AppProps) {
// 	return (
// 		<Provider value={client}>
// 			<Layout>
// 				<Component {...pageProps} />
// 				<Toaster position="top-center" />
// 			</Layout>
// 		</Provider>
// 	);
// }

// export default CustomApp;
