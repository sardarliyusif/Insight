import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function BudgetChart({ leftBar}) {
  const options = {
    chart: {
      type: "line",
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    
    legend: {
      position: "top",
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
      width={740}
    />
  );
}
