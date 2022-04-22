import { FC, useRef } from "react";
import { Bar } from "react-chartjs-2";
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
} from "chart.js";
import { H3 } from "@client/components/Typography";
import { Box, Card } from "@mui/material";

const defaultProps = {
  datasets: [],
  labels: [],
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

const buildXAxisData = (labelText, axisLabelColor) => ({
  grid: { display: false },
  scaleLabel: {
    display: false,
    labelString: labelText,
    fontColor: axisLabelColor,
  },
  stacked: true,
  ticks: { fontColor: axisLabelColor },
});

const buildYAxisData = (
  labelText,
  id,
  position,
  axisLabelColor,
  displayScaleLabel
) => ({
  grid: { display: true },
  id,
  position,
  scaleLabel: {
    display: true,
    labelString: labelText,
    fontColor: axisLabelColor,
  },
  stacked: false,
  ticks: {
    beginAtZero: true,
    display: true,
    fontColor: axisLabelColor,
    maxTicksLimit: 5,
  },
});

const randomDayIncomes = () => {
  const range = () => (Math.random() * (50000 - 20000) + 20000).toFixed(0);
  const incomes = [];
  for (let i = 0; i < 7; i++) {
    incomes.push(range());
  }

  return incomes;
};

const BrandSellsAndOrders = () => {
  const chartReference = useRef(null);
  const xAxis = buildXAxisData("Últimos siete días", "#C4C4C4");
  const yPrimaryAxis = buildYAxisData("Ventas", "1", "left", "#C4C4C4", true);
  const ySecondaryAxis = buildYAxisData(
    "Visitas a tu perfil",
    "2",
    "right",
    "#FFCD1D",
    true
  );
  const labels = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingos",
  ];
  const incomesData = randomDayIncomes();
  const dataOrders = [11, 9, 15, 22, 11, 6, 12, 11, 10, 12, 11];

  return (
    <Card sx={{ padding: "16px", mt: "32px", width: "100%" }}>
      <Box>
        <H3 color="palette.text.primary">Ventas y ordenes</H3>
      </Box>
      <Box>
        <Bar
          ref={chartReference}
          data={{
            datasets: [
              {
                backgroundColor: "#FFCD1D",
                borderSkipped: false,
                data: dataOrders,
                hoverBorderColor: "#b8b8b8",
                label: "Cantidad de ordenes",
                yAxisID: "1",
              },
              {
                backgroundColor: "#C4C4C4",
                borderSkipped: false,
                data: incomesData,
                hoverBorderColor: " #C4C4C4",
                label: "Ingresos por día",
                yAxisID: "2",
              },
            ],
            labels: labels,
          }}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            scales: {
              1: yPrimaryAxis,
              2: ySecondaryAxis,
              x: {
                grid: { display: false },
              },
            },
            plugins: {
              legend: {
                position: "top",
                align: "start",
              },
            },
          }}
        />
      </Box>
    </Card>
  );
};

BrandSellsAndOrders.defaultProps = defaultProps;

export default BrandSellsAndOrders;
