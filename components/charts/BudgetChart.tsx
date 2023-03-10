import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import {
  SelectChartDate,
  SelectTimes,
} from "../../redux/features/insightSlice";
import dateFormat from "dateformat";
import { ApexOptions } from "apexcharts";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function BudgetChart({
  leftBar,
  height,
  align = "center",
}: {
  leftBar?: boolean;
  height?: number;
  align?: "right" | "left" | "center";
}) {
  const chartDate = useSelector(SelectChartDate);
  const times = useSelector(SelectTimes);
  let selectedTimes;
  if (chartDate === "week") {
    selectedTimes = times.forWeek.budgetData;
  } else if (chartDate === "month") {
    selectedTimes = times.forMonth.budgetData;
  } else if (chartDate === "quart") {
    selectedTimes = times.forQuart.budgetData;
  } else {
    selectedTimes = times.forYear.budgetData;
  }
  const actualData = selectedTimes.actual;
  const budgetedData = selectedTimes.budgeted;
  const keys: number[] = Object.keys(actualData).map((s) =>
    new Date(s).getTime()
  );
  const symbol: string = "$";

  const options: ApexOptions = {
    chart: {
      type: "line",
      height: 350,
      toolbar: {
        show: false,
      },
    },

    legend: {
      position: "top",
      fontWeight: 700,
      horizontalAlign: `${align}`,
      labels: {
        colors: ["#333333"],
      },
      itemMargin: {
        horizontal: 20,
        vertical: 0,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#434348", "#F7A35C"],
    stroke: {
      show: true,
      width: 2,
      colors: ["smooth"],
    },
    grid: {
      position: "back",
      padding: {
        right: 40,
        left: 40,
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      type: "datetime",
      tickPlacement: "on",
      labels: {
        formatter: (val) => {
          if (chartDate === "week") {
            return dateFormat(val, "ddd");
          }
          if (chartDate === "year" || chartDate === "quart") {
            return dateFormat(val, "mmm");
          }
          return dateFormat(val, "dd mmm");
        },
      },
      categories: [
        ...Object.entries(budgetedData).map(([key, value]) => ({
          x: new Date(key).getTime(),
          y: value,
        })),
      ],
      axisBorder: {
        color: "#CCD6EB",
        offsetY: 7,
      },
    },
    yaxis: {
      show: false,
    },

    fill: {
      opacity: 1,
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
        formatter: (value, { series, seriesIndex, dataPointIndex, w }) => {
          if (chartDate === "week") {
            return dateFormat(value, "ddd");
          }
          if (chartDate === "month" || chartDate === "quart") {
            return dateFormat(value, "dd mmm");
          }
          return dateFormat(value, "mmm");
        },
      },
    },
  };
  let series = [
    {
      name: "Budgeted",
      type: "column",
      data: [
        ...Object.entries(budgetedData).map(([key, value]) => ({
          x: new Date(key).getTime(),
          y: value,
        })),
      ],
    },
    {
      name: "Actual",
      type: "column",
      data: [
        ...Object.entries(actualData).map(([key, value]) => ({
          x: new Date(key).getTime(),
          y: value,
        })),
      ],
    },
  ];
  return (
    <Chart
      options={options}
      series={series}
      type="line"
      height={height}
      width={"100%"}
    />
  );
}
