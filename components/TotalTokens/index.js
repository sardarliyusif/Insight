import React from 'react'
import { useSelector } from 'react-redux'
import { SelectChartDate, SelectTimes } from '../../redux/features/Insight/insightSlice'

const TotalTokens = () => {
  const chartDate = useSelector(SelectChartDate)
  const times = useSelector(SelectTimes)
  let selectedTimes;
  if(chartDate === 'week'){
    selectedTimes = times.forWeek.totals
  }else if (chartDate === 'month'){
    selectedTimes = times.forMonth.totals
  }else if (chartDate === 'quart'){
    selectedTimes = times.forQuart.totals
  }else{
    selectedTimes = times.forYear.totals
  }
  return (
    <div className="flex bg-white rounded-md py-4 px-5 mb-8">
        <div className="w-1/5 xl:pr-9 lg:pr:4 border-r border-[#D6D6D6]">
          <p className="xl:text-sm lg:text-xxs text text-greylish font-semibold">
            Total spending
          </p>
          <p className="font-bold xl:text-3xl lg:text-xl xl:my-5 lg:my-3">
            ${selectedTimes.totalSpending.toLocaleString("en-US")}
          </p>
        </div>
        <div className="w-1/5 xl:pl-9 lg:pl-4 border-r border-[#D6D6D6] xl:pr-9 lg:pr:4">
          <p className="xl:text-sm lg:text-xxs text text-greylish font-semibold">
            Total token netflow
          </p>
          <p className="font-bold xl:text-3xl lg:text-xl xl:my-5 lg:my-3">
          ${selectedTimes.totalTokenNetflow.toLocaleString("en-US")}
          </p>
        </div>
        <div className="w-1/5 xl:pl-9 lg:pl-4 border-r border-[#D6D6D6] xl:pr-9 lg:pr:4">
          <p className="xl:text-sm lg:text-xxs text text-greylish font-semibold">
            Total token inflow
          </p>
          <p className="font-bold xl:text-3xl lg:text-xl xl:my-5 lg:my-3">
          ${selectedTimes.totalTokenInflow.toLocaleString("en-US")}
          </p>
        </div>
        <div className="w-1/5 xl:pl-9 lg:pl-4 border-r border-[#D6D6D6] xl:pr-9 lg:pr:4">
          <p className="xl:text-sm lg:text-xxs text text-greylish font-semibold">
            Total token outflow
          </p>
          <p className="font-bold xl:text-3xl lg:text-xl xl:my-5 lg:my-3">
          ${selectedTimes.totalTokenOutflow.toLocaleString("en-US")}
          </p>
        </div>
        <div className="w-1/5 xl:pl-9 lg:pl-4">
          <p className="xl:text-sm lg:text-xxs text text-greylish font-semibold">
            Total network fee
          </p>
          <p className="font-bold xl:text-3xl lg:text-xl xl:my-5 lg:my-3">
            ${selectedTimes.totalNetworkFee.toLocaleString("en-US")}
          </p>
        </div>
      </div>
  )
}

export default TotalTokens