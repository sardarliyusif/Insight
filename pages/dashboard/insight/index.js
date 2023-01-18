import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import BudgetChart from "../../../components/charts/BudgetChart";
import DonutChart from "../../../components/charts/DonutChart";
import TokenFlow from "../../../components/charts/TokenFlowChart";
import Layout from "../../../components/layout";
import MyButton from "../../../components/shared/Button";
import TotalDropdown from "../../../components/shared/Dropdown";

const Insight = () => {
  const [chartDate, setChartDate] = useState("week");
  return (
    <Layout>
      <Head>
        <title>Insight page</title>
      </Head>

      <div className="flex justify-between mb-9">
        <div className="text-2xl font-semibold tracking-wide">Insights</div>
        <div className="flex">
          <div className="flex gap-7 max-w-max py-2 px-4 rounded-md  bg-white border border-[#d6d6d6]">
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

      <div className="flex bg-white rounded-md py-4 px-5">
        <div className="w-1/5">
          <p className="text-sm text text-greylish">Total spendin</p>
          <p className="font-bold xl:text-3xl lg:text-2xl my-5">$5,000,000</p>
        </div>
        <div className="w-1/5">
          <p className="text-sm text text-greylish">Total token netflow</p>
          <p className="font-bold xl:text-3xl lg:text-2xl my-5">$1,000,000</p>
        </div>
        <div className="w-1/5">
          <p className="text-sm text text-greylish">Total token inflow</p>
          <p className="font-bold xl:text-3xl lg:text-2xl my-5">$1,500,000</p>
        </div>
        <div className="w-1/5">
          <p className="text-sm text text-greylish">Total token outflow</p>
          <p className="font-bold xl:text-3xl lg:text-2xl my-5">$500,000</p>
        </div>
        <div className="w-1/5">
          <p className="text-sm text text-greylish">Total network fee</p>
          <p className="font-bold xl:text-3xl lg:text-2xl my-5">$500,500</p>
        </div>
      </div>

      <BudgetChart />
      <TokenFlow />
      <DonutChart />

      {/* <div className="bg-white max-w-[740px] p-4 mb-8 rounded-md">
        <TokenFlow />
      </div>

      <div className="bg-white max-w-[740px] p-4 rounded-md">
        <BudgetChart />
      </div> */}
    </Layout>
  );
};

export default Insight;
