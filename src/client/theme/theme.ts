import merge from "merge";
import getConfig from "next/config";
import { useRouter } from "next/router";
import { components } from "./components";
import { typography } from "./typography";
import { createTheme, responsiveFontSizes, Theme, PaletteColor} from "@mui/material";
import { themeColors, primary, blue, marron, paste } from "./themeColors";

declare module '@mui/material/styles' {
	interface TypeBackground {
		light: string
		dark: string
		lightBlue: string
		default: string
		main: string
		paper: string
	}

	interface TypeText {
		paragraph?: string
		muted?: string
	}

	interface PaletteColor {
		[index: number | string]: string;
	}
}



const THEMES = {
	DEFAULT: "DEFAULT",
	GROCERY: "GROCERY",
	FURNITURE: "FURNITURE",
	HEALTH: "HEALTH",
	GIFT: "GIFT",
};

const breakpoints = {
	values: {
		xs: 0,
		sm: 600,
		md: 960,
		lg: 1280,
		xl: 1920,
	},
};



const themesOptions = {
	[THEMES.DEFAULT]: {
		breakpoints,
		components: {
			...components,
		},
		palette: {
			primary: {
				...primary,
				light: primary[100],
			},
			...themeColors,
			background: {
				...themeColors.background,
				main: themeColors.background.light
			},
		},
		typography,
	},
	[THEMES.GROCERY]: {
		breakpoints,
		components: {
			...components,
		},
		palette: {
			primary: {
				...primary,
				light: primary[100],
			},
			...themeColors,
			background: {
				...themeColors.background,
				main: themeColors.background.light
			},
		},
		typography,
	},
	[THEMES.FURNITURE]: {
		breakpoints,
		components: {
			...components,
		},
		palette: {
			primary: {
				...paste,
				light: paste[100],
			},
			...themeColors,
			background: {
				...themeColors.background,
				main: themeColors.background.light
			},
		},
		typography,
	},
	[THEMES.HEALTH]: {
		breakpoints,
		components: {
			...components,
		},
		palette: {
			primary: {
				...blue,
				light: blue[100],
			},
			...themeColors,
			background: {
				...themeColors.background,
				main: themeColors.background.light
			},
		},
		typography,
	},
	[THEMES.GIFT]: {
		breakpoints,
		components: {
			...components,
		},
		palette: {
			primary: {
				...marron,
				light: marron[100],
			},
			...themeColors,
			background: {
				...themeColors.background,
				main: themeColors.background.light
			},
		},
		typography,
	},
};

export type MuiThemeProps = Theme;

export const bazarTheme = (): MuiThemeProps => {
	const { pathname } = useRouter();
	const { publicRuntimeConfig } = getConfig();

	/*============ Remove following code ==============*/
	const updateTheme = (themeName: string) => {
		console.log("updateTheme", themeName);
		publicRuntimeConfig.theme = themeName;
		themeOptions = themesOptions[publicRuntimeConfig.theme];
		return themeOptions
	};

	let themeOptions;

	switch (pathname) {
	case "/":
	case "/superstore-shop":
	case "/grocery1":
	case "/grocery2":
	case "/grocery3":
	case "/fashion-shop":
	case "/gadget-shop":
		updateTheme(THEMES.DEFAULT);
		break;
	case "/furniture-shop":
		updateTheme(THEMES.DEFAULT);
		break;
	case "/healthbeauty-shop":
		updateTheme(THEMES.DEFAULT);
		break;
	case "/gift-shop":
		updateTheme(THEMES.DEFAULT);
		break;
	default:THEMES.DEFAULT;
		break;
	}
	/*============ Remove above code ==============*/

	/* Uncomment below line and set your theme, theme name reference: THEMES  */
	// var themeOptions = themeOptions[THEMES.DEFAULT]
	// console.log(publicRuntimeConfig.theme)
	let theme = createTheme(merge({}, themesOptions.DEFAULT));
	theme = responsiveFontSizes(theme);

	theme.shadows[1] = "0px 1px 3px rgba(3, 0, 71, 0.09)";
	theme.shadows[2] = "0px 4px 16px rgba(43, 52, 69, 0.1)";
	theme.shadows[3] = "0px 8px 45px rgba(3, 0, 71, 0.09)";
	theme.shadows[4] = "0px 0px 28px rgba(3, 0, 71, 0.01)";
	return theme;
};
