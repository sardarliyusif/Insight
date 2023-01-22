import { map } from "lodash";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SelectChartDate, SelectTimes } from "../../redux/features/insightSlice";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DonutChart({ donutFor = "LABELS" }) {
  const chartDate = useSelector(SelectChartDate);
  const times = useSelector(SelectTimes);
  let donutData;
  if (chartDate === "week") {
    donutData = times.forWeek.donutData;
  } else if (chartDate === "month") {
    donutData = times.forMonth.donutData;
  } else if (chartDate === "quart") {
    donutData = times.forQuart.donutData;
  } else {
    donutData = times.forYear.donutData;
  }
  const donutTypes = [
    {
      type: "LABELS",
      labels: ['Payroll', 'Event', 'Advertisements', 'Reimbursement']
    },
    {
      type: "TOKEN",
      labels: ['CELO', 'Polygon', 'Ethereum', 'Avalanche']
    },
    {
      type: "BLOCKCHAIN",
      labels: ['Payroll', 'Event', 'Advertisements', 'Reimbursement']
    },
    {
      type: "WALLET",
      labels: ['CELO', 'Polygon', 'Ethereum', 'Avalanche']
    },
    {
      type: "BUDGET",
      labels: ['Payroll', 'Event', 'Advertisements', 'Reimbursement']
    },
  ];
  const [donutType, setDonutType] = useState(
    donutTypes.find((e) => e.type == donutFor)
  );
  const series = [donutData.firstExample,donutData.secondExample,donutData.thirdExample,donutData.fourthExample];
  const options = {
    chart: {
      type: "donut",
    },
    labels: [...donutType.labels.map(x => x)],
    legend: {
      position: "bottom",
      fontSize: "15px",
      fontFamily: "Inter",
      horizontalAlign: "left",
      fontWeight: 500,
      width: 140,
      labels: {
        colors: ["#707070"],
      },
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
      width={"100%"}
    />
  );
}
