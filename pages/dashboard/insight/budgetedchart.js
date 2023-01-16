import Link from 'next/link'
import React from 'react'
import BudgetChart from '../../../components/charts/BudgetChart'

const Budgetedchart = () => {
  return (
    <div>
      <Link href='/dashboard/insight'>Go back</Link>
      <BudgetChart leftBar={true}/>
    </div>
  )
}

export default Budgetedchart