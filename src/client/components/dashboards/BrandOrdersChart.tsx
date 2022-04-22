import { FC, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Tooltip,
	Legend,
	PointElement, 
	LineElement,
	LineController,
} from 'chart.js';
import { H3 } from "@client/components/Typography";
import { Box, Card } from '@mui/material';


const defaultProps = {
	datasets: [],
	labels: []
};

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Tooltip,
	Legend,
	PointElement,
	LineElement,
	LineController
);


const dataOrders = [11, 9, 15, 22, 11, 6, 12, 11]

const BrandOrdersChart: FC = () => {
	const chartReference = useRef(null);
	const labels = ['A confirmar', 'Para facturar', 'Pend. de cobro', 'En Preparación', 'Lista Despacho', 'En Tránsito', 'Entregada', 'Cerrada'];

	
	
	return (
		<Card sx={{padding: '16px', mt: '32px', width: "100%" }}>
			<Box>
				<H3 color="palette.text.primary">Estado de las ordenes</H3>
			</Box>
			<Box >
				<Bar 
					ref={chartReference}
					data={{
						datasets:[{
							backgroundColor: "#FFCD1D",
							borderSkipped: false,
							data: dataOrders,
							hoverBorderColor: " #b8b8b8",
							label: "Ordenes",
						}],
						labels: labels
					}}
					options={{
						responsive: true,
						maintainAspectRatio: true,
						scales: {
							y: {
								grid: { display: false },
							},
							x: {
								grid: { display: false },
							}
						},
						plugins: {
							legend: {
								position: "top",
								align: "end"
							}
						}
					}}
				/>
			</Box>
		</Card>
	);
};

BrandOrdersChart.defaultProps = defaultProps;

export default BrandOrdersChart;
