import BrandIncomeCharts from "client/components/dashboards/BrandIncomeCharts";
import BrandOrdersChart from "client/components/dashboards/BrandOrdersChart"
import FlexBox from "client/components/FlexBox";
import DashboardPageHeader from "client/components/layout/DashboardPageHeader";
import VendorDashboardLayout from "client/components/layout/VendorDashboardLayout";
import BrandSellsAndOrders from 'client/components/dashboards/BrandSellsAndOrders'
import { H2, H5, Paragraph } from "client/components/Typography";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import { styled } from "@mui/system";
import { Box, Button, Card, Grid } from "@mui/material";
import { typeFormat } from "client/components/formattedNumber/formattedNumber";
import React from "react";
import FormattedNumber from "client/components/formattedNumber/formattedNumber";
import TopProducts from "client/components/tables/topProducts";
import SalesLastsMonths from "client/components/tables/salesLastMonths";

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

const VendorDashboard = () => {
  
	return (
		<VendorDashboardLayout>
			<DashboardPageHeader title="Resúmen" icon={ShoppingBag} />

			<Grid  container spacing={2}>
				{cardList.map((item, ind) => (
					<Grid item lg={2.4} md={4} sm={6} xs={12} key={ind}>
						<Card sx={{ textAlign: "center", py: "1.5rem", height: "100%" }}>
							<H5 color="grey.600" fontWeight="300" fontSize="16px" mb={1}>
								{item.title}
							</H5>
							<H2 color="primary.main" mb={0.8} mt={0.8} lineHeight="1.3">
								{item.amount}
							</H2>
							<StyledButton>Ir a {item.subtitle}</StyledButton>
						</Card>
					</Grid>
				))}
			</Grid>

			<Box mt="32px">
				<Card sx={{ p: "20px 30px" }}>
					<FlexBox justifyContent="space-between">
						<H5 mb={3}>Métricas</H5>
					</FlexBox>
						
					<Grid container justifyContent="center" spacing={2}>
						{kpis.map((item) => (
							<Grid item lg={3} md={4} sm={6} xs={12} key={item.label}>
								<Box sx={{textAlign: "center", p: "8px"}}>
									<H5 color="grey.600" fontWeight="300" fontSize="16px" mb={1}>
										{item.label}
									</H5>
									<H2 color="primary.main" mb={0.8} mt={0.8} lineHeight="1.3">
										<FormattedNumber value={item.value} type={item.type as typeFormat} />
									</H2>
								</Box>
							</Grid>
						))}
					</Grid>
				</Card>
			</Box>
			<BrandIncomeCharts/>
			<BrandOrdersChart />
			<BrandSellsAndOrders />
			<TopProducts />
			<SalesLastsMonths />
		</VendorDashboardLayout>
	);
};

const cardList = [
	{
		title: "Ordenes por confirmar",
		amount: "20",
		subtitle: "ordenes",
	},
	{
		title: "Pendientes por facturar",
		amount: "15",
		subtitle: "ordenes",
	},
	{
		title: "Pagos por confirmar",
		amount: "8",
		subtitle: "ordenes",
	},
	{
		title: "Pedidos listos para envío",
		amount: "16",
		subtitle: "ordenes",
	},
	{
		title: "Reclamos por responder",
		amount: "12",
		subtitle: "reclamos",
	},
];

const kpis = [
	{
		label: 'Ingresos Totales',
		value: 150000,
		type: 'currency'
	},
	{
		label: 'Ventas',
		value: 1500,
		type: 'decimal'
	},
	{
		label: 'Ticket Promedio',
		value: 1500,
		type: 'currency'
	},
	{
		label: 'Publicaciones Activas',
		value: 900,
		type: 'decimal'
	},
	{
		label: 'Publicaciones Pausadas',
		value: 15,
		type: 'decimal'
	},
	{
		label: 'Reclamos',
		value: 23,
		type: 'decimal'
	},
	{
		label: 'Ordenes Canceladas',
		value: 14,
		type: 'decimal'
	},
]


export default VendorDashboard;
