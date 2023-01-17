import Head from "next/head";
import Link from "next/link";
import React from "react";
import BudgetChart from "../../../components/charts/BudgetChart";
import DonutChart from "../../../components/charts/DonutChart";
import TokenFlow from "../../../components/charts/TokenFlowChart";
import Layout from "../../../components/layout";

const Insight = () => {
  return (
    <Layout>
      <Head>
        <title>Insight page</title>
      </Head>

      <div className="bg-white max-w-[740px] p-4 mb-8 rounded-md">
        <TokenFlow />
      </div>

      <div className="bg-white max-w-[740px] p-4 rounded-md">
        <BudgetChart />
      </div>
    </Layout>
  );
};

export default Insight;
