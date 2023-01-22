import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { SelectChartDate, SelectTimes } from "../../redux/features/insightSlice";
import dateFormat from 'dateformat';
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function TokenFlow({ leftBar , height , align ='center' }) {
  const chartDate = useSelector(SelectChartDate)
  const times = useSelector(SelectTimes)
  let selectedTimes;
  if(chartDate === 'week'){
    selectedTimes = times.forWeek.tokenflowData
  }else if (chartDate === 'month'){
    selectedTimes = times.forMonth.tokenflowData
  }else if (chartDate === 'quart'){
    selectedTimes = times.forQuart.tokenflowData
  }else{
    selectedTimes = times.forYear.tokenflowData
  }
  const inflowData = selectedTimes.inflow
  const outflowData = selectedTimes.outflow
  const netflowData = selectedTimes.netflow

  const keys = Object.keys(inflowData).map(s => new Date(s).getTime())
  const symbol = '$'

  const options = {
    chart: {
      type: "line",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    annotations: {
      position: 'front' ,
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

        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#7CB5EC", "#434348", "#F7A35C"],
    stroke: {
      width: [0, 2, 2],
      curve: "smooth",
    },
    grid: {
      position:'back',
      padding:{
        right: 40,
        left: 40
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    markers: {
      size: [0],
      colors: "#FFFFFF",
      strokeColors: "#F7A35C",
      strokeWidth: 4,
    },
    xaxis: {
      type: "datetime",
      tickPlacement: "on",
      labels: {
        formatter: (val) => {
          if (chartDate === "week") {
            return dateFormat(val, "ddd")
          }
          if (chartDate === "month" || chartDate === "quart") {
            return dateFormat(val, "dd mmm")
          }
          return dateFormat(val, "mmm");
        }
      },
      categories: [
        ...Object.entries(inflowData).map(([key, value]) => ({ x: new Date(key).getTime(), y: value }))
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
            return dateFormat(value, "ddd")
          }
          if (chartDate === "month" || chartDate === "quart") {
            return dateFormat(value, "dd mmm")
          }
          return dateFormat(value, "mmm");
        }

      },
      
    },
  };
  const series = [
    {
      name: "Inflow",
      type: "column",
      data: [
        ...Object.entries(inflowData).map(([key, value]) => ({ x: new Date(key).getTime(), y: value }))
      ],
    },
    {
      name: "Outflow",
      type: "column",
      data: [
        ...Object.entries(outflowData).map(([key, value]) => ({ x: new Date(key).getTime(), y: value }))
      ],
    },
    {
      name: "Netflow",
      type: "line",
      data: [
        ...Object.entries(netflowData).map(([key, value]) => ({ x: new Date(key).getTime(), y: value }))
      ],
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      height={height}
      width={'100%'}
    />
  );
}
