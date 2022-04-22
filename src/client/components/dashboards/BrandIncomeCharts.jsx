import { FC, useRef } from "react";
import { Bar } from "react-chartjs-2";
import { LastXDays } from "@client/utils/utils";
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
  CategoryScaleOptions,
  ChartOptions,
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
  ticks: [{ fontColor: axisLabelColor }],
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

const randomMonthIncomes = () => {
  const range = () => (Math.random() * (50000 - 20000) + 20000).toFixed(0);
  const incomes = [];
  for (let i = 0; i < 30; i++) {
    incomes.push(range());
  }

  return incomes;
};

const dataIncomes = randomMonthIncomes();
const dataOrders = [
  "11",
  "9",
  "15",
  "22",
  "11",
  "6",
  "12",
  "11",
  "9",
  "15",
  "22",
  "11",
  "6",
  "12",
  "11",
  "9",
  "15",
  "22",
  "11",
  "6",
  "12",
  "11",
  "9",
  "15",
  "22",
  "11",
  "6",
  "12",
  "6",
  "9",
];

const SummaryPerDayView = () => {
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
  const labels = LastXDays(undefined, 30);

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      // "1": yPrimaryAxis,
      // x: xAxis,
      // "2": ySecondaryAxis
    },
    plugins: {
      legend: {
        position: "top",
        align: "end",
      },
    },
  };

  return (
    <Card sx={{ padding: "16px", mt: "32px", width: "100%" }}>
      <Box>
        <H3 color="palette.text.primary">
          Ventas por día y cantidad de ordenes
        </H3>
      </Box>
      <Box>
        <Bar
          ref={chartReference}
          data={{
            datasets: [
              {
                backgroundColor: "#C4C4C4",
                borderSkipped: false,
                data: dataIncomes,
                hoverBorderColor: " #b8b8b8",
                label: "Ingresos",
                order: 1,
                yAxisID: "1",
              },
              {
                borderColor: "#FFCD1D",
                backgroundColor: "#FFCD1D",
                data: dataOrders,
                label: "Ordenes",
                order: 0,
                type: "line",
                yAxisID: "2",
              },
            ],
            labels,
          }}
          options={options}
        />
      </Box>
    </Card>
  );
};

SummaryPerDayView.defaultProps = defaultProps;

export default SummaryPerDayView;
