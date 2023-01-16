import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DonutChart() {
  const series = [2, 2, 2, 2];
  const options = {
    chart: {
      type: "donut",
    },
    legend: {
        position: "bottom",
      },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          
        },
      },
    ],
  };

  return (
    <Chart
      options={options}
      series={series}
      type="donut"
        height={350}
        width={740}
    />
  );
}
