import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import TokenFlow from '../../../components/charts/TokenFlowChart'
import Layout from '../../../components/layout'


const Tokenflowchart = () => {
  return (
    <Layout>
      <Head>
        <title>Token Flow chart page</title>
      </Head>
      <Link href='/dashboard/insight' className='text-lg font-medium'>{'<<Back'}</Link>
      <div className="bg-white p-4 mb-8 rounded-md mt-[5rem] w-full">
          <TokenFlow leftBar={true} height={470}/>
      </div>
    </Layout>
  )
}

export default Tokenflowchart