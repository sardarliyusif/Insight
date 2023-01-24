import { forEach } from "lodash";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  SelectChartDate,
  SelectTimes,
} from "../../redux/features/insightSlice";

export default function BlockChainModal({
  setShowBlockChainModal,
  showBlockChainModal,
}) {
  const chartDate = useSelector(SelectChartDate);
  const times = useSelector(SelectTimes);
  let donutData;
  if (chartDate === "week") {
    donutData = times.forWeek.donutData;
  } else if (chartDate === "month") {
    donutData = times.forMonth.donutData;
  } else if (chartDate === "quart") {
    donutData = times.forQuart.donutData;
  } else {
    donutData = times.forYear.donutData;
  }
  let totalDonutData = 0;
  forEach(donutData, (x) => (totalDonutData += x));
  return (
    <>
      {showBlockChainModal ? (
        <div className="w-full h-screen backdrop-blur-sm bg-white/30 fixed top-0 left-0 z-50">
          <div
            className="fixed bg-white w-[650px] min-h-[300px] border border-[#ddd] rounded-md pb-4 top-2/4 left-2/4 z-20 transform -translate-y-1/2 -translate-x-1/2"
            id="defaultModal"
          >
            <div className="flex justify-between py-5 px-7">
              <p className="font-semibold text-xl">Blockchain</p>
              <img
                src="/icons/close.svg"
                className="cursor-pointer"
                onClick={() => setShowBlockChainModal(false)}
              ></img>
            </div>
            <ul>
              <li className="border-b flex items-center border-[#D6D6D6] px-9 py-7">
                <img src="/icons/celo.svg" className="mr-3" />
                <div className="flex justify-between flex-1 font-medium text-base relative">
                  <p>Celo</p>
                  <p className="absolute left-1/2">
                    $
                    {donutData.firstExample > 999999
                      ? `${donutData.firstExample / 1000000}M`
                      : donutData.firstExample.toLocaleString("en-US")}
                  </p>
                  <p>
                    {Math.round(
                      (donutData.firstExample / totalDonutData) * 100
                    )}
                    %
                  </p>
                </div>
              </li>
              <li className="border-b flex items-center border-[#D6D6D6] px-9 py-7">
                <img src="/icons/solana.svg" className="mr-3" />
                <div className="flex justify-between flex-1 font-medium text-base relative">
                  <p>Solana</p>
                  <p className="absolute left-1/2">
                    $
                    {donutData.secondExample > 999999
                      ? `${donutData.secondExample / 1000000}M`
                      : donutData.secondExample.toLocaleString("en-US")}
                  </p>
                  <p>
                    {Math.round(
                      (donutData.secondExample / totalDonutData) * 100
                    )}
                    %
                  </p>
                </div>
              </li>
              <li className="border-b flex items-center border-[#D6D6D6] px-9 py-7">
                <img src="/icons/ethereum.svg" className="mr-3" />
                <div className="flex justify-between flex-1 font-medium text-base relative">
                  <p>Ethereum</p>
                  <p className="absolute left-1/2">
                    $
                    {donutData.thirdExample > 999999
                      ? `${donutData.thirdExample / 1000000}M`
                      : donutData.thirdExample.toLocaleString("en-US")}
                  </p>
                  <p>
                    {Math.round(
                      (donutData.thirdExample / totalDonutData) * 100
                    )}
                    %
                  </p>
                </div>
              </li>
              <li className="border-b flex items-center border-[#D6D6D6] px-9 py-7">
                <img src="/icons/celo.svg" className="mr-3" />
                <div className="flex justify-between flex-1 font-medium text-base relative">
                  <p>Avalanche</p>
                  <p className="absolute left-1/2">
                    $
                    {donutData.fourthExample > 999999
                      ? `${donutData.fourthExample / 1000000}M`
                      : donutData.fourthExample.toLocaleString("en-US")}
                  </p>
                  <p>
                    {Math.round(
                      (donutData.fourthExample / totalDonutData) * 100
                    )}
                    %
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}
