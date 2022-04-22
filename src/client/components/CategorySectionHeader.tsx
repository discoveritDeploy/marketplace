import ArrowRight from "@mui/icons-material/ArrowRight";
import Link from "next/link";
import React, { ReactNode } from "react";
import FlexBox from "@client/components/FlexBox";
import { H2 } from "@client/components//Typography";

export interface CategorySectionHeaderProps {
  title?: string;
  seeMoreLink?: string;
  icon?: ReactNode;
}

const CategorySectionHeader: React.FC<CategorySectionHeaderProps> = ({
	title,
	seeMoreLink,
	icon,
}) => {
	return (
		<FlexBox justifyContent="space-between" alignItems="center" mb={3}>
			<FlexBox alignItems="center">
				{icon && (
					<FlexBox mr={1} alignItems="center">
						{icon}
					</FlexBox>
				)}
				<H2 fontWeight="bold" lineHeight="1">
					{title}
				</H2>
			</FlexBox>

			{seeMoreLink && (
				<Link href={seeMoreLink}>
					<a>
						<FlexBox alignItems="center" ml={1} color="grey.600">
              View all
							<ArrowRight fontSize="small" color="inherit" />
						</FlexBox>
					</a>
				</Link>
			)}
		</FlexBox>
	);
};

export default CategorySectionHeader;
