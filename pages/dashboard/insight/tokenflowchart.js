import Link from 'next/link'
import React from 'react'
import TokenFlow from '../../../components/charts/TokenFlowChart'

const Tokenflowchart = () => {
  return (
    <div>
        <Link href='/dashboard/insight'>Go back</Link>
      <TokenFlow leftBar={true}/>
    </div>
  )
}

export default Tokenflowchart