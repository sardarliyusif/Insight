import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import TokenFlow from "../../../components/charts/TokenFlowChart";
import Layout from "../../../components/layout";

const Tokenflowchart = () => {
  const [chartDate, setChartDate] = useState("week");
  return (
    <Layout>
      <Head>
        <title>Token Flow chart page</title>
      </Head>
      <Link href="/dashboard/insight" className="text-lg font-medium">
        {"<<Back"}
      </Link>
      <div className="bg-white p-4 mb-8 rounded-md mt-[5rem] w-full relative">
        <div className="flex xl:gap-7 lg:gap-4 max-w-max py-2 px-4 rounded-md  bg-white border border-[#d6d6d6] absolute right-16 z-10">
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
        <TokenFlow leftBar={true} height={470} align="left" />
      </div>
    </Layout>
  );
};

export default Tokenflowchart;
