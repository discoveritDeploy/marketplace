import {
	bgcolor,
	borderRadius,
	BordersProps,
	compose,
	spacing,
	SpacingProps,
	styled,
} from "@mui/system";
import Image, { ImageProps } from "next/image";
import React from "react";

const LazyImage = styled<React.FC<ImageProps & BordersProps & SpacingProps>>(
	({ borderRadius, ...rest }) => <Image {...rest} />
)(compose(spacing, borderRadius, bgcolor));

export default LazyImage;
