export const grey = {
	900: "#2B3445", // Main Text
	800: "#7D879C", // Muted
	700: "#4B566B", // otros
	600: "#4F4F4F", // Title/Text
	500: "#373F50", // paragraph
	400: "#DAE1E7", // Border
	300: "#55565A",	//	secondary background/title 
	200: "#F3F5F9", // Line Stroke
	100: "#F8F8F8", //default background
};

export const primary = {
	100: "#FFCD1D",
	200: "#FFCD1D",
	300: "#FFCD1D",
	400: "#FFCD1D",
	500: "#FFCD1D",
	600: "#FFCD1D",
	700: "#FFCD1D",
	800: "#FFCD1D",
	hover: "#EBBE20", // primary hover
};

export const secondary = {
	100: "#e8e8ee",
	200: "#b9bacb",
	300: "#8a8ca8",
	400: "#5b5d85",
	500: "#141850",
	600: "#0F3460",
	700: "#101340",
	800: "#0e1138",
	900: "#0c0e30",
	main: "#0F3460",
	dark: "#0c0e30",
};

export const error = {
	100: "#FFEAEA",
	200: "#FFCBCB",
	300: "#FFA9A9",
	400: "#FF6D6D",
	500: "#FF5353",
	600: "#FF4C4C",
	700: "#FF4242",
	800: "#FF3939",
	900: "#FF2929",
	main: "#E94560",
};

export const success = {
	100: "#E7F9ED",
	200: "#C2F1D1",
	300: "#99E8B3",
	400: "#52D77E",
	500: "#33D067",
	600: "#2ECB5F",
	700: "#27C454",
	800: "#20BE4A",
	900: "#0b7724",
	main: "rgb(51, 208, 103)",
};

export const blue = {
	50: "#f3f5f9", 
	100: "#CFEBF6",// light blue background
	200: "#B8DEFE",
	300: "#94C9FE",
	400: "#7AB6FD",
	main: "#2B355F",
	600: "#3975D9",
	700: "#2756B6",
	800: "#7D879C",
	900: "#0E2979",
	contrastText: "#FFFFFF",
};

export const marron = {
	50: "#f3f5f9",
	100: "#F6F2ED",
	200: "#F8DBD1",
	300: "#EBBCB3",
	400: "#D89C98",
	main: "#BE7374",
	600: "#A3545C",
	700: "#883948",
	800: "#6E2438",
	900: "#5B162F",
};

export const paste = {
	50: "#F5F5F5",
	// 50: "#fff",
	100: "#DDFBF1",
	200: "#BDF7E8",
	300: "#97E8DA",
	400: "#76D2CA",
	main: "#4BB4B4",
	600: "#36929A",
	700: "#257181",
	800: "#175368",
	900: "#0E3D56",
	contrastText: "#FFFFFF",
};

const backgrounds = {
	light: '#FFF',
	dark: "#2F2519",
	lightBlue: "#CFEBF6"
}

export const warning = {
	main: "#FFCD4E",
	contrastText: "#FFFFFF",
};

export const themeColors = {
	secondary,
	error,
	warning,
	success,
	text: {
		primary: grey[900],
		secondary: grey[200],
		disabled: grey[400],
		paragraph: grey[500],
		muted: grey[800]
	},
	divider: grey[200],
	grey: { ...grey },
	paste: { ...paste },
	info: { ...blue },
	marron: { ...marron },
	background: {
		default: grey[100],
		...backgrounds
	},
};
