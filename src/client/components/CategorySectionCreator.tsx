import { Box, Container } from "@mui/material";
import React, { ReactNode } from "react";
import CategorySectionHeader from "./CategorySectionHeader";

export interface CategorySectionCreatorProps {
  icon?: ReactNode;
  title?: string;
  seeMoreLink?: string;
  mt?: number | string;
}

const CategorySectionCreator: React.FC<CategorySectionCreatorProps> = ({
	icon,
	seeMoreLink,
	title,
	children,
	mt
}) => {
	return (
		<Box mb={7.5} mt={mt && mt}>
			<Container sx={{ pb: "1rem" }}>
				{title && (
					<CategorySectionHeader
						title={title}
						seeMoreLink={seeMoreLink}
						icon={icon}
					/>
				)}

				{children}
			</Container>
		</Box>
	);
};

export default CategorySectionCreator;
