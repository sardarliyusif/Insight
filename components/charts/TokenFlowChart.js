import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function TokenFlow({ leftBar }) {
  const options = {
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
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      tooltip: {
        enabled: false,
      },
      axisBorder: {
        color: "#CCD6EB",
        offsetY: 8,
      },
    },

    yaxis: {
      show: leftBar,
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val + "k";
        },
      },
    },
  };
  const series = [
    {
      name: "Inflow",
      type: "column",
      data: [230, 200, 100, 235, 270, 270, 270],
    },
    {
      name: "Outflow",
      type: "column",
      data: [170, 505, 414, 671, 227, 413, 201],
    },
    {
      name: "Netflow",
      type: "line",
      data: [230, 180, 240, 600, 240, 340, 240],
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      height={350}
      width={700}
    />
  );
}
