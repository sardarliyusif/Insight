import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import BudgetChart from '../../../components/charts/BudgetChart'
import Layout from '../../../components/layout'

const Budgetedchart = () => {
  return (
    <Layout>
      <Head>
        <title>Budget chart page</title>
      </Head>
      <Link href='/dashboard/insight'>Go back</Link>
      <BudgetChart leftBar={true}/>
    </Layout>
  )
}

export default Budgetedchart