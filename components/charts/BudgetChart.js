import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function BudgetChart({ leftBar}) {
  const options = {
    chart: {
      type: "line",
      height: 350,
      toolbar:{
        show: false
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
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#434348", "#F7A35C"],
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
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
      name: "Budgeted",
      type: "column",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Actual",
      type: "column",
      data: [50, 55, 57, 56, 61, 58, 63, 60, 66],
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
