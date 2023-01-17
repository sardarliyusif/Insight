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
      <Link href='/dashboard/insight'>Go back</Link>
        <TokenFlow leftBar={true}/>
    </Layout>
  )
}

export default Tokenflowchart