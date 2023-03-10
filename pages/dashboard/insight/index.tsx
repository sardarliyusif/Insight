import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import Link from "next/link";
import {
  changeChartDate,
  SelectChartDate,
  SelectTimes,
} from "../../../redux/features/insightSlice";
import BudgetChart from "../../../components/charts/BudgetChart";
import DonutChart from "../../../components/charts/DonutChart";
import TokenFlow from "../../../components/charts/TokenFlowChart";
import Layout from "../../../components/layout";
import MyButton from "../../../components/shared/Button";
import LabelModal from "../../../components/modals/LabelModal";
import { forEach } from "lodash";
import BlockChainModal from "../../../components/modals/BlockChainModal";
import Dropdown from "../../../components/shared/Dropdown";
import TotalTokens from "../../../components/TotalTokens";

const Insight = () => {
  const [showLabelModal, setShowLabelModal] = useState(false);
  const [showBlockChainModal, setShowBlockChainModal] = useState(false);
  if (typeof window !== "undefined") {
    if (showLabelModal || showBlockChainModal) {
      document.body.style.height = "100vh";
    } else {
      document.body.style.height = "unset";
    }
  }

  const chartDate = useSelector(SelectChartDate);
  const times = useSelector(SelectTimes);
  let donutData: {
    firstExample: number;
    secondExample: number;
    thirdExample: number;
    fourthExample: number;
  };
  if (chartDate === "week") {
    donutData = times.forWeek.donutData;
  } else if (chartDate === "month") {
    donutData = times.forMonth.donutData;
  } else if (chartDate === "quart") {
    donutData = times.forQuart.donutData;
  } else {
    donutData = times.forYear.donutData;
  }

  let totalDonutData = 0;
  forEach(donutData, (x) => (totalDonutData += x));

  const dispatch = useDispatch();

  return (
    <Layout>
      <Head>
        <title>Insight page</title>
      </Head>

      <div className={`xl:flex justify-between mb-9`}>
        <div className="text-2xl font-semibold tracking-wide xl:mb-0 lg:mb-4">
          Insights
        </div>
        <div className="flex lg:justify-between items-center">
          <div className="flex xl:gap-7 lg:gap-4 max-w-max py-[7px] px-4 rounded-md  bg-white border border-[#d6d6d6]">
            <span
              className={`${
                chartDate === "week" && "!text-primary text-opacity-100"
              } text-opacity-100'} hover:!text-primary cursor-pointer text-greylish dark:text-greylish text-xs font-semibold tracking-wide`}
              onClick={() => dispatch(changeChartDate("week"))}
            >
              1W
            </span>
            <span
              className={`${
                chartDate === "month" && "!text-primary text-opacity-100"
              }  hover:!text-primary cursor-pointer text-greylish dark:text-greylish  text-xs font-semibold tracking-wide`}
              onClick={() => dispatch(changeChartDate("month"))}
            >
              1M
            </span>
            <span
              className={`${
                chartDate === "quart" && "!text-primary text-opacity-100"
              } text-greylish hover:!text-primary cursor-pointer dark:text-greylish text-xs font-semibold tracking-wide`}
              onClick={() => dispatch(changeChartDate("quart"))}
            >
              3M
            </span>
            <span
              className={`${
                chartDate === "year" && "!text-primary text-opacity-100"
              }   text-opacity-100'} hover:!text-primary cursor-pointer text-greylish dark:text-greylish text-xs font-semibold tracking-wide`}
              onClick={() => dispatch(changeChartDate("year"))}
            >
              1Y
            </span>
          </div>
          <Dropdown dropdownFor="TOKEN_PRICES" />
          <Dropdown dropdownFor="ALL_NETWORKS" />
          <Dropdown />
          <Dropdown dropdownFor="EXPORT"/>
          <MyButton />
        </div>
      </div>

      <TotalTokens />

      <div className="flex flex-wrap justify-between ">
        <Link
          href="/dashboard/insight/budgetedchart"
          className="1 w-[67%] xl:max-h-min bg-white p-4 mb-8 rounded-md relative mt-16 shadow-chartShadow"
        >
          <p className="absolute -top-10 text-sm text-greylish font-semibold">
            Budgeted and Actual Spending
          </p>
          <BudgetChart height={350} />
        </Link>
        <div className="2 w-[30%] bg-white p-4 mb-8 rounded-md mt-16 relative shadow-chartShadow">
          <DonutChart donutFor="LABELS" />
          <div className="absolute -left-3 -top-12">
            <Dropdown dropdownFor="LABELS" />
          </div>
          <div className="hidden xl:flex text-base font-medium absolute xl:right-6 2xl:right-9 justify-between xl:w-32 xxl:w-36 2xl:w-44 bottom-16">
            <ul>
              <li>
                $
                {donutData.firstExample > 999999
                  ? `${donutData.firstExample / 1000000}M`
                  : donutData.firstExample.toLocaleString("en-US")}
              </li>
              <li>
                $
                {donutData.secondExample > 999999
                  ? `${donutData.secondExample / 1000000}M`
                  : donutData.secondExample.toLocaleString("en-US")}
              </li>
              <li>
                $
                {donutData.thirdExample > 999999
                  ? `${donutData.thirdExample / 1000000}M`
                  : donutData.thirdExample.toLocaleString("en-US")}
              </li>
              <li>
                $
                {donutData.fourthExample > 999999
                  ? `${donutData.fourthExample / 1000000}M`
                  : donutData.fourthExample.toLocaleString("en-US")}
              </li>
            </ul>
            <ul>
              <li>
                {Math.round((donutData.firstExample / totalDonutData) * 100)}%
              </li>
              <li>
                {Math.round((donutData.secondExample / totalDonutData) * 100)}%
              </li>
              <li>
                {Math.round((donutData.thirdExample / totalDonutData) * 100)}%
              </li>
              <li>
                {Math.round((donutData.fourthExample / totalDonutData) * 100)}%
              </li>
            </ul>
          </div>
          <div
            className="mt-4 text-center text-primary hover:text-[#FF4513] text-sm font-medium cursor-pointer"
            onClick={() => setShowLabelModal(true)}
          >
            Show More
          </div>
        </div>
        <Link
          href="/dashboard/insight/tokenflowchart"
          className="3 w-[67%] bg-white p-4 mb-8 rounded-md relative mt-16 shadow-chartShadow"
        >
          <p className="absolute -top-10 text-sm text-greylish font-semibold">
            Token flow
          </p>
          <TokenFlow height={350} />
        </Link>
        <div className="4 w-[30%] bg-white p-4 mb-8 rounded-md mt-16 relative shadow-chartShadow">
          <DonutChart donutFor="TOKEN" />
          <div className="absolute -left-3 -top-12">
            <Dropdown dropdownFor="TOKENS" />
          </div>
          <div className="hidden xl:flex text-base font-medium absolute xl:right-6 2xl:right-9 justify-between xl:w-36 2xl:w-52 bottom-16">
            <ul>
              <li>
                $
                {donutData.firstExample > 999999
                  ? `${donutData.firstExample / 1000000}M`
                  : donutData.firstExample.toLocaleString("en-US")}
              </li>
              <li>
                $
                {donutData.secondExample > 999999
                  ? `${donutData.secondExample / 1000000}M`
                  : donutData.secondExample.toLocaleString("en-US")}
              </li>
              <li>
                $
                {donutData.thirdExample > 999999
                  ? `${donutData.thirdExample / 1000000}M`
                  : donutData.thirdExample.toLocaleString("en-US")}
              </li>
              <li>
                $
                {donutData.fourthExample > 999999
                  ? `${donutData.fourthExample / 1000000}M`
                  : donutData.fourthExample.toLocaleString("en-US")}
              </li>
            </ul>
            <ul>
              <li>
                {Math.round((donutData.firstExample / totalDonutData) * 100)}%
              </li>
              <li>
                {Math.round((donutData.secondExample / totalDonutData) * 100)}%
              </li>
              <li>
                {Math.round((donutData.thirdExample / totalDonutData) * 100)}%
              </li>
              <li>
                {Math.round((donutData.fourthExample / totalDonutData) * 100)}%
              </li>
            </ul>
          </div>
          <div
            className="mt-4 text-center text-primary hover:text-[#FF4513] text-sm font-medium cursor-pointer"
            onClick={() => setShowBlockChainModal(true)}
          >
            Show More
          </div>
        </div>
        <LabelModal {...{ setShowLabelModal, showLabelModal }} />
        <BlockChainModal {...{ setShowBlockChainModal, showBlockChainModal }} />
      </div>
    </Layout>
  );
};

export default Insight;
