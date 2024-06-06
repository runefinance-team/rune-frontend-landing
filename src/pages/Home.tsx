import CountUp from "react-countup";
import Logo3D from "../components/Logo3D";
import { Line } from "react-chartjs-2";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "chart.js/auto";
import { useEffect, useState } from "react";
import { getBtcPrice, getDailyTVLApi, getDailyVolumeApi } from "../config";

interface ResponseDataType {
  _id: string;
  date: string;
  value: number;
  __v: number;
}

interface DatasetType {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    borderWidth: number;
    backgroundColor: string;
    tension: number;
  }[];
}

const defaultTvlData: DatasetType = {
  labels: [],
  datasets: [
    {
      label: "",
      data: [].map((volume) => volume * 1.5 + 300 * (Math.random() - 0.4)),
      borderColor: "#EAC544a0",
      borderWidth: 1,
      backgroundColor: "#EAC54460",
      tension: 0.4
    },
  ],
};

const defaultVolumeData: DatasetType = {
  labels: [],
  datasets: [
    {
      label: "",
      data: [],
      borderColor: "rgba(255, 255, 255, 0.4)",
      borderWidth: 1,
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      tension: 0.4
    },
  ],
};

export default function Home() {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.05)",
        },
        ticks: {
          color: "#c3c3c390",
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.05)",
        },
        ticks: {
          color: "#c3c3c390",
        },
      },
    },
  };

  const [volumeData, setVolumeData] = useState(defaultVolumeData);
  const [tvlData, setTvlData] = useState(defaultTvlData);

  const getGraphData = async (_btcPrice: number) => {
    try {
      const resTvl = await fetch(getDailyTVLApi);
      const resVolume = await fetch(getDailyVolumeApi);

      const jsonTvl = await resTvl.json();
      const jsonVolume = await resVolume.json();

      const dataTvl: ResponseDataType[] = jsonTvl.data;
      const dataVolume: ResponseDataType[] = jsonVolume.data;

      dataTvl.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).slice(0, 20);
      dataVolume.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).slice(0, 20);

      setTvlData({
        ...defaultTvlData,
        labels: dataTvl.map((item) => item.date),
        datasets: [
          {
            ...defaultTvlData.datasets[0],
            data: dataTvl.map((item) => (item.value * _btcPrice) / 1e8),
          },
        ],
      });

      setVolumeData({
        ...defaultVolumeData,
        labels: dataVolume.map((item) => item.date),
        datasets: [
          {
            ...defaultVolumeData.datasets[0],
            data: dataVolume.map((item) => (item.value * _btcPrice) / 1e8),
          },
        ],
      });
    } catch (error) {
      console.error("Failed to fetch graph data:", error);
    }
  };

  useEffect(() => {
    fetch(getBtcPrice)
      .then((response: any) => {
        return response.json();
      })
      .then((data: any) => {
        getGraphData(data.data);
      })
      .catch((_) => {
        console.error("Fetch bitcoin price failed");
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Logo3D className="my-[60px] md:my-[200px]" />
      <div className="flex items-center justify-between w-full max-w-[770px] mb-20 max-md:flex-col max-md:gap-10">
        <div className="text-center">
          <div className="text-lg font-medium md:mb-3 text-shadow-md">Trade Volume</div>
          <div className="text-[30px] text-shadow-md min-w-[200px]">
            $<CountUp end={20688143} duration={250} start={18000000} preserveValue={true} />
          </div>
        </div>
        <div className="text-center">
          <div className="text-lg font-medium md:mb-3 text-shadow-md min-w-[170px]">Total Liquidity</div>
          <div className="text-[30px] text-shadow-md">$10,453,197</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-medium md:mb-3 text-shadow-md min-w-[170px]">Transactions</div>
          <div className="text-[30px] text-shadow-md">
            $<CountUp end={1243} duration={250} start={1100} preserveValue={true} />
          </div>
        </div>
      </div>

      <div className="w-full mt-20 md:mt-48">
        <div className="text-[50px] max-md:text-[40px] font-bold text-center text-[#EAC544] text-shadow-md">
          Analytic Ecosystem
        </div>
        <div className="mt-16 md:mt-32 grid grid-cols-12 max-md:grid-cols-1 gap-y-24 max-md:gap-y-5 max-w-[1000px] m-auto">
          <div className="col-span-3 text-[28px] max-md:text-[20px] text-white text-shadow-md">Trade Volume</div>
          <div className="col-span-9 w-full max-w-[1000px] m-auto overflow-x-auto">
            <Line data={volumeData} options={options} />
          </div>
          <div className="col-span-3 text-[28px] max-md:text-[20px] text-white text-shadow-md">Total Liquidity</div>
          <div className="col-span-9 w-full max-w-[1000px] m-auto overflow-x-auto">
            <Line data={tvlData} options={options} />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1000px] mt-16 md:mt-36 mb-[100px] md:mb-[200px]">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "transparent", color: "#fff", boxShadow: "none" }}
            contentArrowStyle={{ display: "none" }}
            iconStyle={{
              background: "#343432",
              color: "#fff",
              border: "1px solid white",
              boxShadow: "none",
            }}
            icon={
              <div className="flex items-center justify-center w-full h-full">
                <img className="object-contain w-5 h-5 xl:w-8 xl:h-8" src="/assets/images/bitcoin.png" alt="icon" />
              </div>
            }
          >
            <div className="-mt-5 xl:text-right">
              <div className="text-[20px] text-[#EAC544]">2008 August 18</div>
              <div className="uppercase text-[20px] font-bold">Satoshi Nakamoto</div>
              <div className="text-[16px] opacity-60 text-[#c3c3c3] leading-snug">
                Registration of Bitcoin.org Domain Name. The Bitcoin whitepaper is released by an unknown individual or
                group of individuals going by the pseudonym Satoshi Nakamoto
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "transparent", color: "#fff", boxShadow: "none" }}
            contentArrowStyle={{ display: "none" }}
            iconStyle={{
              background: "#343432",
              color: "#fff",
              border: "1px solid white",
              boxShadow: "none",
            }}
            icon={
              <div className="flex items-center justify-center w-full h-full">
                <img className="object-contain w-5 h-5 xl:w-8 xl:h-8" src="/assets/images/pizza.png" alt="icon" />
              </div>
            }
          >
            <div className="-mt-5 xl:text-left">
              <div className="text-[20px] text-[#EAC544]">2010 May 22</div>
              <div className="uppercase text-[20px] font-bold">Bitcoin Pizza Day</div>
              <div className="text-[16px] opacity-60 text-[#c3c3c3] leading-snug">
                Bitcoin Pizza Day Transaction takes place. Laszlo Hanyecz paid 10,000 bitcoins for two large Papa John's
                pizzas, which were delivered to him in Jacksonville, Florida. In November, new Bitcoin Logo released.
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "transparent", color: "#fff", boxShadow: "none" }}
            contentArrowStyle={{ display: "none" }}
            iconStyle={{
              background: "#343432",
              color: "#fff",
              border: "1px solid white",
              boxShadow: "none",
            }}
            icon={
              <div className="flex items-center justify-center w-full h-full">
                <img className="object-contain w-5 h-5 xl:w-8 xl:h-8" src="/assets/images/rocket.png" alt="icon" />
              </div>
            }
          >
            <div className="-mt-5 xl:text-right">
              <div className="text-[20px] text-[#EAC544]">2021 Februray 19</div>
              <div className="uppercase text-[20px] font-bold">$1T Market Cap</div>
              <div className="text-[16px] opacity-60 text-[#c3c3c3] leading-snug">
                The price of Bitcoin hits $54,000, Bitcoin hits $1 Trillion Market Capitalization.
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "transparent", color: "#fff", boxShadow: "none" }}
            contentArrowStyle={{ display: "none" }}
            iconStyle={{
              background: "#343432",
              color: "#fff",
              border: "1px solid white",
              boxShadow: "none",
            }}
            icon={
              <div className="flex items-center justify-center w-full h-full">
                <img className="object-contain w-5 h-5 xl:w-8 xl:h-8" src="/assets/images/ord.png" alt="icon" />
              </div>
            }
          >
            <div className="-mt-5 xl:text-left">
              <div className="text-[20px] text-[#EAC544]">2023 January 20</div>
              <div className="uppercase text-[20px] font-bold">Bitcoin Ordinals</div>
              <div className="text-[16px] opacity-60 text-[#c3c3c3] leading-snug">
                Launched on Bitcoin mainnet by developer Casey Rodarmor on January 20, 2023, ordinal NFTs are simply the
                latest way to create NFTs on Bitcoin.
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "transparent", color: "#fff", boxShadow: "none" }}
            contentArrowStyle={{ display: "none" }}
            iconStyle={{
              background: "#343432",
              color: "#fff",
              border: "1px solid white",
              boxShadow: "none",
            }}
            icon={
              <div className="flex items-center justify-center w-full h-full">
                <img className="object-contain w-5 h-5 xl:w-8 xl:h-8" src="/assets/images/rune.png" alt="icon" />
              </div>
            }
          >
            <div className="-mt-5 xl:text-right">
              <div className="text-[20px] text-[#EAC544]">2024 April 20</div>
              <div className="uppercase text-[20px] font-bold">RUNE protocol</div>
              <div className="text-[16px] opacity-60 text-[#c3c3c3] leading-snug">
                Runes was released following the fourth Bitcoin halving, which took place on 20 April 2024. Following
                its launch, the Rune with the largest marketcap at time of writing is RSIC (RSIC•GENESIS•RUNE) at over
                $325 million based on OKX data.
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "transparent", color: "#fff", boxShadow: "none" }}
            contentArrowStyle={{ display: "none" }}
            iconStyle={{
              background: "#343432",
              color: "#fff",
              border: "1px solid white",
              boxShadow: "none",
            }}
            icon={
              <div className="flex items-center justify-center w-full h-full">
                <img className="object-contain w-5 h-5 xl:w-8 xl:h-8" src="/logo_white.svg" alt="icon" />
              </div>
            }
          >
            <div className="-mt-5 xl:text-left">
              <div className="text-[20px] text-[#EAC544]">Today</div>
              <div className="uppercase text-[20px] font-bold">RunicSwap</div>
              <div className="text-[16px] opacity-60 text-[#c3c3c3] leading-snug">
                runicswap heralds a new chapter in the world of decentralized finance (DeFi) by ingeniously blending
                the capabilities of the Runestone standard with the power of Ordinals.
              </div>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}
