import React from 'react';
import { Grid, Card, Button} from '@mui/material';
import { styled } from "@mui/system";
import { H5, H2 } from 'client/components/Typography';
import FormattedNumber from '../formattedNumber/formattedNumber';

interface KpiList{
         title: string,
        amount: number,
        btnLabel?: string,
        href?: string
}

interface KpiProps<T> {
    cardList: T[],

}

const StyledButton = styled(Button)(({ theme }) => ({
	padding: "4px 12px",
	transition: "all 0.3s",
	background: theme.palette.primary.main,
	color: theme.palette.secondary,
	borderRadius: '8px',
	textTransform: 'none',
	"&:hover": {
		background: theme.palette.primary.hover,
	},
}));


const KpiCards = <T extends KpiList>({cardList}: KpiProps<T>) => {
    
	return (
		<Grid  container spacing={2} mb="16px">
			{cardList.map((item, ind) =>{ 
				const { title, amount, btnLabel, href} = item
				return(
					<Grid item lg={2.4} md={4} sm={6} xs={12} key={ind}>
						<Card sx={{ textAlign: "center", py: "1.5rem", height: "100%" }}>
							<H5 color="grey.600" fontWeight="300" fontSize="16px" mb={1}>
								{title}
							</H5>
							<H2 color="primary.main" mb={0.8} mt={0.8} lineHeight="1.3">
								<FormattedNumber value={amount} />
							</H2>
							{btnLabel && <StyledButton href={href}>Ir a {btnLabel}</StyledButton>}
						</Card>
					</Grid>
				)})}
		</Grid>
	)
}

export default KpiCards;