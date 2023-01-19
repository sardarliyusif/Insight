import React from 'react'

const TotalTokens = () => {
  return (
    <div className="flex bg-white rounded-md py-4 px-5 mb-8">
        <div className="w-1/5 xl:pr-9 lg:pr:4 border-r border-[#D6D6D6]">
          <p className="xl:text-sm lg:text-xxs text text-greylish font-semibold">
            Total spending
          </p>
          <p className="font-bold xl:text-3xl lg:text-xl xl:my-5 lg:my-3">
            $5,000,000
          </p>
        </div>
        <div className="w-1/5 xl:pl-9 lg:pl-4 border-r border-[#D6D6D6] xl:pr-9 lg:pr:4">
          <p className="xl:text-sm lg:text-xxs text text-greylish font-semibold">
            Total token netflow
          </p>
          <p className="font-bold xl:text-3xl lg:text-xl xl:my-5 lg:my-3">
            $1,000,000
          </p>
        </div>
        <div className="w-1/5 xl:pl-9 lg:pl-4 border-r border-[#D6D6D6] xl:pr-9 lg:pr:4">
          <p className="xl:text-sm lg:text-xxs text text-greylish font-semibold">
            Total token inflow
          </p>
          <p className="font-bold xl:text-3xl lg:text-xl xl:my-5 lg:my-3">
            $1,500,000
          </p>
        </div>
        <div className="w-1/5 xl:pl-9 lg:pl-4 border-r border-[#D6D6D6] xl:pr-9 lg:pr:4">
          <p className="xl:text-sm lg:text-xxs text text-greylish font-semibold">
            Total token outflow
          </p>
          <p className="font-bold xl:text-3xl lg:text-xl xl:my-5 lg:my-3">
            $500,000
          </p>
        </div>
        <div className="w-1/5 xl:pl-9 lg:pl-4">
          <p className="xl:text-sm lg:text-xxs text text-greylish font-semibold">
            Total network fee
          </p>
          <p className="font-bold xl:text-3xl lg:text-xl xl:my-5 lg:my-3">
            $1,340
          </p>
        </div>
      </div>
  )
}

export default TotalTokens