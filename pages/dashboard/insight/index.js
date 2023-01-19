import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import BudgetChart from "../../../components/charts/BudgetChart";
import DonutChart from "../../../components/charts/DonutChart";
import TokenFlow from "../../../components/charts/TokenFlowChart";
import Layout from "../../../components/layout";
import MyButton from "../../../components/shared/Button";
import TotalDropdown from "../../../components/shared/Dropdown";
import TotalTokens from "../../../components/TotalTokens";

const Insight = () => {
  const [chartDate, setChartDate] = useState("week");
  return (
    <Layout>
      <Head>
        <title>Insight page</title>
      </Head>

      <div className="xl:flex justify-between mb-9">
        <div className="text-2xl font-semibold tracking-wide xl:mb-0 lg:mb-4">
          Insights
        </div>
        <div className="flex lg:justify-between">
          <div className="flex xl:gap-7 lg:gap-4 max-w-max py-2 px-4 rounded-md  bg-white border border-[#d6d6d6]">
            <span
              className={`${
                chartDate === "week" && "!text-primary text-opacity-100"
              } text-opacity-100'} hover:!text-primary cursor-pointer text-greylish dark:text-greylish text-xs font-semibold tracking-wide`}
              onClick={() => setChartDate("week")}
            >
              1W
            </span>
            <span
              className={`${
                chartDate === "month" && "!text-primary text-opacity-100"
              }  hover:!text-primary cursor-pointer text-greylish dark:text-greylish  text-xs font-semibold tracking-wide`}
              onClick={() => setChartDate("month")}
            >
              1M
            </span>
            <span
              className={`${
                chartDate === "quart" && "!text-primary text-opacity-100"
              } text-greylish hover:!text-primary cursor-pointer dark:text-greylish text-xs font-semibold tracking-wide`}
              onClick={() => setChartDate("quart")}
            >
              3M
            </span>
            <span
              className={`${
                chartDate === "year" && "!text-primary text-opacity-100"
              }   text-opacity-100'} hover:!text-primary cursor-pointer text-greylish dark:text-greylish text-xs font-semibold tracking-wide`}
              onClick={() => setChartDate("year")}
            >
              1Y
            </span>
          </div>
          <TotalDropdown dropdownFor="TOKEN_PRICES" />
          <TotalDropdown />
          <TotalDropdown dropdownFor="ALL_WALLETS" />
          <MyButton type="refresh" />
          <MyButton />
        </div>
      </div>

      <TotalTokens />

      <div className="yoxlama flex flex-wrap justify-between">
        <Link href="/dashboard/insight/budgetedchart" className="1 w-[70%] bg-white p-4 mb-8 rounded-md">
          <BudgetChart height={350} />
        </Link>
        <div className="2 w-[27%] bg-white p-4 mb-8 rounded-md">
          <DonutChart />
        </div>
        <Link href="/dashboard/insight/tokenflowchart" className="3 w-[70%] bg-white p-4 mb-8 rounded-md">
          <TokenFlow height={350} />
        </Link>
        <div className="4 w-[27%] bg-white p-4 mb-8 rounded-md">
          <DonutChart />
        </div>
      </div>

      {/* <div className="flex gap-12 justify-between">
        <Link
          href="/dashboard/insight/budgetedchart"
          className="bg-white bg-salam p-4 mb-8 relative"
        >
          <BudgetChart height={350} />
        </Link>
        <div className="bg-white p-4 mb-8  rounded-md">
          <DonutChart />
        </div>
      </div>
      <div className="flex gap-12 justify-between">
        <Link
          href="/dashboard/insight/tokenflowchart"
          className="bg-white p-4 mb-8 rounded-md "
        >
          <TokenFlow height={350} />
        </Link>
        <div className="bg-white p-4 mb-8  rounded-md">
          <DonutChart />
        </div>
        
      </div> */}
    </Layout>
  );
};

export default Insight;
