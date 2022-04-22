import React from 'react';
import FlexBox from '@client/components/FlexBox';
import { Box, BoxProps, styled } from "@mui/material";
import { H4 } from '../Typography';

interface PropsInfoHover extends BoxProps {
    icon: JSX.Element | null,
    label: string | JSX.Element
}

const StyledBox = styled(Box)(({theme}) => ({
	display: "none",
	position: "absolute",
	left: "50%",
	top: "100%",
	zIndex: 15,
	background: "white",
	boxShadow: theme.shadows[2],
	padding: '8px',
	transform: 'translate(-50%, 0)'
}))

const InfoHover: React.FC<PropsInfoHover> = ({icon, label, children, ...props}) => {
	return (
		<Box
			display="flex"
			position="relative"
			flexDirection="column"
			alignItems="center"
			flexWrap="wrap"
			sx={{
				"&:hover": {
					"& > .child-nav-item": {
						display: "block",
					},
				},
			}}
			{...props}
		>
			<FlexBox
				sx={{
					"&:hover": {
						color: 'primary.main',
						cursor: 'pointer'
					},
				}}
				color="secondary" gap="0.54rem" justifyContent="flex-start">
				{icon}
				<H4 fontWeight="500" color="secondary">{label}</H4>
			</FlexBox>
			<StyledBox
				className="child-nav-item"
			>
				{children}
			</StyledBox>
		</Box>
	)
}

export default InfoHover;