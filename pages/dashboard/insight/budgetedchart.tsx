import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BudgetChart from "../../../Components/charts/BudgetChart";
import Layout from "../../../Components/layout";
import {
  changeChartDate,
  SelectChartDate,
} from "../../../redux/features/insightSlice";

const Budgetedchart = () => {
  const chartDate = useSelector(SelectChartDate);
  const dispatch = useDispatch();
  return (
    <Layout>
      <Head>
        <title>Budget chart page</title>
      </Head>
      <Link
        href="/dashboard/insight"
        className="text-lg font-medium hover:text-primary"
      >
        {"<<Back"}
      </Link>
      <p className="mt-[5rem] mb-4 text-xl font-semibold">
        Budgeted and Actual Spending
      </p>
      <div className="bg-white p-4 mb-8 rounded-md w-full relative">
        <div className="flex xl:gap-7 lg:gap-4 max-w-max py-2 px-4 rounded-md absolute right-14 z-10 bg-white">
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
        <BudgetChart leftBar={true} height={470} align="left" />
      </div>
    </Layout>
  );
};

export default Budgetedchart;
