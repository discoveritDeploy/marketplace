// vendors
import React, { FC, useState, CSSProperties } from 'react';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Box, BoxProps, styled } from "@mui/material";

interface PropsTooltip extends BoxProps {
    infoText: string,
    colorIcon?: string,
}

const InfoBoxText = styled(Box)(({ theme }) => ({
	display: "none",
	position: "absolute",
	left: "100%",
	top: "-50%",
	cursor: "pointer",
	zIndex: 10,
	width: "150px",
	padding: "8px",
	fontSize: "14px",
	fontWeight: "300",
	boxShadow: theme.shadows[1],
	borderRadius: "6px",
	background: theme.palette.background.default,
	[theme.breakpoints.down("md")]: {
		display: "flex",
	},
}));

const InformationTooltip: FC<PropsTooltip> = ({ children, infoText, ...props }) => {

	return (
		<Box
			display="flex"
			alignItems="start"
			justifyContent="flex-start"
			gap="0.5rem"
			position="relative"
			{...props}
		>
			{children}
			<Box sx={{
				position: "relative",
				"&:hover": {
					"& > .tooltipWrapper__tooltip": {
						display: "block",
						zIndex: "2",
					},
				},
			}}>
				<HelpOutlineOutlinedIcon color="inherit" fontSize='small' />
				<InfoBoxText className="tooltipWrapper__tooltip">
					{infoText}{' '}
				</InfoBoxText>
			</Box>
		</Box>
	);
}


InformationTooltip.defaultProps = {

};

export default InformationTooltip;
