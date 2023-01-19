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
      <Link href='/dashboard/insight' className='text-lg font-medium'>{'<<Back'}</Link>
      <p className='mt-[5rem] mb-4 text-xl font-semibold'>Budgeted and Actual Spending</p>
      <div className="bg-white p-4 mb-8 rounded-md w-full">
          <BudgetChart leftBar={true} height={470}/>
      </div>
    </Layout>
  )
}

export default Budgetedchart