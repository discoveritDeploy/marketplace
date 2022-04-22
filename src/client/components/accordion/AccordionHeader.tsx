import FlexBox from "@client/components/FlexBox";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import React, { FC } from "react";

// Component Props interface
interface AccordionHeaderProps {
  sx?: SxProps;
  open?: boolean;
  showIcon?: boolean;
}
// styled components
const StyledFlexBox = styled<React.FC<AccordionHeaderProps>>(
	({ children, open, ...rest }) => <FlexBox {...rest}>{children}</FlexBox>
)<AccordionHeaderProps>(({ open }) => ({
	alignItems: "center",
	justifyContent: "space-between",
	".caretIcon": {
		transform: open ? "rotate(90deg)" : "rotate(0deg)",
		transition: "transform 250ms ease-in-out",
	},
}));

const AccordionHeader: FC<AccordionHeaderProps & BoxProps> = ({
	sx,
	open,
	children,
	showIcon,
	...props
}) => {
	return (
		<StyledFlexBox open={open} sx={sx} {...props}>
			{children}
			{showIcon && <ChevronRight className="caretIcon" fontSize="small" />}
		</StyledFlexBox>
	);
};

AccordionHeader.defaultProps = {
	px: "1rem",
	py: "0.5rem",
	showIcon: true,
};

export default AccordionHeader;
