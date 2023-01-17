import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DonutChart() {
  const series = [2, 2, 2, 2];
  const options = {
    chart: {
      type: "donut",
    },
    labels: ['Payroll', 'Event', 'Advertisements', 'Reimbursement'],
    // labels: ['CELO', 'Polygon', 'Ethereum', 'Avalanche'],
    legend: {
      position: "bottom",
      fontSize: '15px',
      fontFamily: 'Inter',
      horizontalAlign: 'left', 
      fontWeight: 500,
      width: 140,
      labels:{
        colors: ['#707070']
      }
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#FF7348", "#7D88ED", "#FFC700", "#FE3131"],
    
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
      width={350}
    />
  );
}
