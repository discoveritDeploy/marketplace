import FlexBox from "@client/components/FlexBox";
import Sidenav from "@client/components/sidenav/Sidenav";
import { H2 } from "@client/components/Typography";
import useWindowSize from "@client/hooks/useWindowSize";
import Menu from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import StatusWizardForOrders from "@client/components/layout/statusWizardForOrders";
import React from "react";
import { useRouter } from "next/router";
import { STATUS_ORDERS } from '@client/types/commonTypes'

const StyledBox = styled(Box)(({ theme }) => ({
	display: "column",

	marginTop: theme.spacing(-2),
	marginBottom: theme.spacing(3),
	"& .headerHold": {
		justifyContent: "space-between",
		alignItems: "center",
		flexGrow: 1,
	},
	[theme.breakpoints.up("md")]: {
		"& .sidenav": {
			display: "none",
		},
	},
	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
		"& .headerHold": {},
	},
}));

export interface DashboardPageHeaderProps {
  icon?: any;
  title?: string;
  button?: any;
  navigation?: any;
}



const DashboardPageHeader: React.FC<DashboardPageHeaderProps> = ({
	title,
	button,
	navigation,
	...props
}) => {
	const width = useWindowSize();
	const isTablet = width < 1025;
	const { query } = useRouter();
	const current: STATUS_ORDERS = query?.status as STATUS_ORDERS;
	return (
		<StyledBox>
			<FlexBox mt={2} className="headerHold">
				<FlexBox alignItems="center">
					{props.icon && <props.icon color="primary" />}
					<H2 ml={1.5} my="0px" lineHeight="1" whiteSpace="pre">
						{title}
					</H2>
				</FlexBox>
				<Box className="sidenav">
					<Sidenav position="left" handle={<Menu fontSize="small" />}>
						{navigation}
					</Sidenav>
				</Box>
				{/* )} */}

				{!isTablet && button}
			</FlexBox>
			{current &&	
			<Box mt="32px">
				<StatusWizardForOrders />
			</Box>}
			{isTablet && !!button && <Box mt={2}>{button}</Box>}
		</StyledBox>
	);
};

export default DashboardPageHeader;
