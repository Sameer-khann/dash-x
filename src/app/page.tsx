"use client";

import React, { useState } from "react";
import { IoSwapVertical } from "react-icons/io5";
import Image from "next/image";

const tokenOptions = [
  {
    value: "ethereum",
    label: "Ethereum",
    image: "/images/ethereum.png",
  },
  {
    value: "solana",
    label: "Solana",
    image: "/images/solana.png",
  },
  {
    value: "bitcoin",
    label: "Bitcoin",
    image: "/images/bitcoin.png",
  },
  {
    value: "arbitrum",
    label: "Arbitrum",
    image: "/images/arbitrum.png",
  },
];

const BlockchainSwapCard = () => {
  const [loading, setLoading] = useState(true); // Initially set to true to show skeleton

  // Simulate a delay to test the skeleton loader
  setTimeout(() => {
    setLoading(false);
  }, 3000); // 3 seconds delay to simulate loading

  const [selectedTab, setSelectedTab] = useState("swap");
  const [recipient, setRecipient] = useState("");
  // const [hover, setHover] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState<{
    value: string;
    label: string;
    image: string;
  } | null>(null);

  const [amount, setAmount] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelect = (token: (typeof tokenOptions)[0]) => {
    setSelectedToken(token);
    setIsOpen(false);
  };

  const [selectedCoin, setSelectedCoin] = useState<{
    value: string;
    label: string;
    image: string;
  } | null>(null);

  const handleCoinSelect = (coin: (typeof tokenOptions)[0]) => {
    setSelectedCoin(coin);
    setDropdownOpen(false);
  };

  const convertAmountToValue = (amount: string): string => {
    const conversionRate = 1; // Example conversion rate
    const value = parseFloat(amount) * conversionRate;
    return isNaN(value) ? "0.00" : value.toFixed(2);
  };

  // Second's Logic

  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [selectedTokenSecond, setSelectedTokenSecond] = useState<{
    value: string;
    label: string;
    image: string;
  } | null>(null);
  const [amountSecond, setAmountSecond] = useState<string>("");
  const [dropdownOpenSecond, setDropdownOpenSecond] = useState(false);

  const handleSelectSecond = (token: (typeof tokenOptions)[0]) => {
    setSelectedTokenSecond(token);
    setIsOpenSecond(false);
  };

  const [selectedCoinSecond, setSelectedCoinSecond] = useState<{
    value: string;
    label: string;
    image: string;
  } | null>(null);

  const handleCoinSelectSecond = (coin: (typeof tokenOptions)[0]) => {
    setSelectedCoinSecond(coin);
    setDropdownOpenSecond(false);
  };

  const convertAmountToValueSecond = (amountSecond: string): string => {
    const conversionRate = 1; // Example conversion rate
    const value = parseFloat(amountSecond) * conversionRate;
    return isNaN(value) ? "0.00" : value.toFixed(2);
  };

  const isSwapEnabled =
    selectedToken &&
    selectedCoin &&
    selectedTokenSecond &&
    selectedCoinSecond &&
    amountSecond &&
    amount;
  console.log(
    selectedToken,
    "&&",
    selectedCoin,
    "&&",
    selectedTokenSecond,
    "&&",
    selectedCoinSecond,
    "&&",
    amountSecond,
    "&&",
    amount
  );

  const handleSwap = () => {
    if (isSwapEnabled) {
      alert("Swap Successfully! Details submitted.");
    }
  };

  // Skeleton Loader
  const Skeleton = () => (
    // <div className="firstCoin bg-indigo-100 rounded-xl p-2 gap-8 animate-pulse w-1/3 h-auto">
    //   <div className="firstCoinOne text-black p-0 text-sm relative bg-white rounded-[10px]">
    //     <div className="border border-gray-300 rounded-lg h-8">11</div>
    //     <div className="z-10 bg-white border border-gray-300 rounded-lg mt-1 h-8 w-full">22</div>
    //   </div>

    //   <div className="firstCoinSecond flex justify-between items-center m-1 text-black">
    //     <div className="relative w-2/3 text-sm h-8">
    //       <div className="w-full rounded-lg h-8 text-black px-3">33</div>
    //       <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-700 mx-1 text-sm">44</div>
    //     </div>

    //     <div className="flex justify-center gap-1 my-1 text-sm relative">
    //       <div className="flex items-center justify-between border border-gray-300 rounded-lg px-3 py-2 cursor-pointer bg-white w-35 h-8">55</div>
    //       <div className="absolute top-full mt-1 border border-gray-300 rounded-lg bg-white shadow-lg h-16 w-60 z-10">66</div>
    //     </div>
    //   </div>

    //   <div className="firstCoinThree flex justify-between items-center px-2 text-gray-600">
    //     <div className="h-4 w-1/4 rounded-lg"></div>
    //     <div className="w-16 h-4 rounded-lg"></div>
    //   </div>
    // </div>
    <div className="flex justify-center items-center my-28 mx-auto animate-pulse h-full w-1/3">
      <div>
        <div className="flex justify-center items-center w-full h-7 p-2 bg-blue-50 rounded-xl my-3"></div>
        <div className="firstCoin bg-indigo-100 rounded-xl p-2 gap-8 w-full ">
          <div className="firstCoinOne text-black p-0 text-sm relative  rounded-[10px] my-4">
            {/* Token Dropdown Placeholder */}
            <div className="border border-gray-300 rounded-lg h-8 flex items-center bg-white justify-between px-2 cursor-pointer">
              <div className="flex justify-center">
                <div className="w-7 h-5 bg-gray-300 rounded-full mr-2" />{" "}
                {/* Placeholder for token Image */}
                <div className="w-24 h-5 bg-gray-300 rounded" />{" "}
                {/* Placeholder for token label */}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Dropdown Options Placeholder */}
            <div className=" z-10 bg-white border border-gray-300 rounded-lg mt-1 w-80">
              <div className="flex items-center px-2 py-2 cursor-pointer hover:bg-gray-100">
                <div className="w-5 h-5 bg-gray-300 rounded-full mr-2" />{" "}
                {/* Placeholder for token Image */}
                <div className="w-24 h-5 bg-gray-300 rounded" />{" "}
                {/* Placeholder for token label */}
              </div>
            </div>
          </div>

          <div className="firstCoinThree flex justify-between items-center px-2 text-gray-600">
            {/* Amount Placeholder */}
            <div className="w-24 h-5 bg-gray-300 rounded" />
            {/* Placeholder for amount */}
            {/* Balance Placeholder */}
            <div className="w-24 h-5 bg-gray-300 rounded" />
            {/* Placeholder for balance */}
          </div>

          <div className="firstCoinOne text-black p-0 text-sm relative  rounded-[10px] my-4">
            {/* Token Dropdown Placeholder */}
            <div className="border border-gray-300 rounded-lg h-8 flex items-center bg-white justify-between px-2 cursor-pointer">
              <div className="flex justify-center">
                <div className="w-5 h-5 bg-gray-300 rounded-full mr-2" />{" "}
                {/* Placeholder for token Image */}
                <div className="w-24 h-5 bg-gray-300 rounded" />{" "}
                {/* Placeholder for token label */}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Dropdown Options Placeholder */}
            <div className=" z-10 bg-white border border-gray-300 rounded-lg mt-1 w-80">
              <div className="flex items-center px-2 py-2 cursor-pointer hover:bg-gray-100">
                <div className="w-5 h-5 bg-gray-300 rounded-full mr-2" />{" "}
                {/* Placeholder for token Image */}
                <div className="w-24 h-5 bg-gray-300 rounded" />{" "}
                {/* Placeholder for token label */}
              </div>
            </div>
          </div>

          <div className="firstCoinThree flex justify-between items-center px-2 text-gray-600">
            {/* Amount Placeholder */}
            <div className="w-24 h-5 bg-gray-300 rounded" />
            {/* Placeholder for amount */}
            {/* Balance Placeholder */}
            <div className="w-24 h-5 bg-gray-300 rounded" />
            {/* Placeholder for balance */}
          </div>

          <div className="bg-gray-400 w-auto h-8 my-4 border rounded-lg"></div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <div
          className="page flex justify-center items-center min-h-screen"
          style={{
            backgroundImage: `url('/Images/bg-dashx.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            
          }}
        >
          <div className="main flex justify-center items-center w-full h-full lg:h-3/4">
            <div className="bigCard w-full sm:w-3/4 md:w-2/3 lg:w-2/5 p-4">
              {/* Tab Selection */}
              <div className="stateCard bg-gray-400 h-auto mb-4 border rounded-xl flex items-center justify-center gap-2 ">
                <div
                  className={`flex justify-center h-10 items-center w-1/3 rounded-xl text-black cursor-pointer ${
                    selectedTab === "swap"
                      ? "bg-white text-black"
                      : "text-gray-700"
                  }`}
                  onClick={() => setSelectedTab("swap")}
                >
                  Swap
                </div>
                <div
                  className={`flex justify-center h-10 items-center w-1/3 rounded-xl cursor-pointer ${
                    selectedTab === "buy"
                      ? "bg-white text-black"
                      : "text-gray-700"
                  }`}
                  onClick={() => setSelectedTab("buy")}
                >
                  Buy
                </div>
                <div
                  className={`flex justify-center h-10 items-center w-1/3 rounded-xl cursor-pointer ${
                    selectedTab === "sell"
                      ? "bg-white text-black"
                      : "text-gray-700"
                  }`}
                  onClick={() => setSelectedTab("sell")}
                >
                  Sell
                </div>
              </div>

              {/* Card Content */}
              <div className="card bg-white h-auto rounded-xl mb-4 p-4 shadow-md border">
                <div className="innerCard  rounded-xl p-4 shadow-sm">
                  {selectedTab === "swap" && (
                    <div>
                      {/* Swap Card */}
                      {/* <div className="firstCoin bg-indigo-100 rounded-xl p-2 gap-8 ">
                        <div className="firstCoinOne text-black p-0 text-sm relative bg-white rounded-[10px]">
                          <div
                            className="border border-gray-300 rounded-lg h-8 flex items-center justify-between px-2 cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                          >
                            {selectedToken ? (
                              <div className="flex items-center">
                                <Image
                                  src={selectedToken.image}
                                  alt={selectedToken.label}
                                  className="w-5 h-5 mr-2"
                                />
                                <span>{selectedToken.label}</span>
                              </div>
                            ) : (
                              <span>Select Coin</span>
                            )}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={`w-4 h-4 transition-transform ${
                                isOpen ? "rotate-180" : ""
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                          {isOpen && (
                            <div className="absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 w-full">
                              {tokenOptions.map((option) => (
                                <div
                                  key={option.value}
                                  className="flex items-center px-2 py-2 cursor-pointer hover:bg-gray-100"
                                  onClick={() => handleSelect(option)}
                                >
                                  <Image
                                    src={option.image}
                                    alt={option.label}
                                    className="w-5 h-5 mr-2"
                                  />
                                  {option.label}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="firstCoinSecond flex justify-between items-center m-1 text-black">
                          <div className="relative w-2/3 text-sm h-8">
                            <input
                              type="text"
                              placeholder="Enter Amount"
                              className="w-full rounded-lg h-8 text-black px-3"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                            />
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-700 mx-1 text-sm">
                              Max
                            </div>
                          </div>


                          <div className="flex justify-center gap-1 my-1 text-sm relative">
                            
                            <div
                              className="flex items-center justify-between border border-gray-300 rounded-lg px-3 py-2 cursor-pointer bg-white w-35 h-8"
                              onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                              {selectedCoin ? (
                                <>
                                  <Image
                                    src={selectedCoin.image}
                                    alt={selectedCoin.label}
                                    className="w-5 h-5 mr-2"
                                  />
                                  <span>{selectedCoin.label}</span>
                                </>
                              ) : (
                                <span className="text-gray-500">
                                  Select Token
                                </span>
                              )}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`w-4 h-4 transition-transform ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>

                            {dropdownOpen && (
                              <div className="absolute top-full mt-1 border border-gray-300 rounded-lg bg-white shadow-lg w-60 z-10">
                                {tokenOptions.map((coin) => (
                                  <div
                                    key={coin.value}
                                    className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleCoinSelect(coin)}
                                  >
                                    <Image
                                      src={coin.image}
                                      alt={coin.label}
                                      className="w-5 h-5 mr-2"
                                    />
                                    <span>{coin.label}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="firstCoinThree flex justify-between items-center px-2 text-gray-600">
                          <div>
                            {isNaN(parseFloat(amount)) || amount === ""
                              ? "0.00"
                              : convertAmountToValue(amount)}
                          </div>
                          <div>Balance: 0</div>
                        </div>
                      </div> */}

                      <div className="firstCoin bg-indigo-100 rounded-xl p-2 gap-4 md:gap-8">
                        {/* First Dropdown */}
                        <div className="firstCoinOne text-black p-0 text-sm relative bg-white rounded-[10px]">
                          <div
                            className="border border-gray-300 rounded-lg h-8 flex items-center justify-between px-2 cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                          >
                            {selectedToken ? (
                              <div className="flex items-center">
                                <img
                                  src={selectedToken.image}
                                  alt={selectedToken.label}
                                  className="w-5 h-5 mr-2"
                                />
                                <span>{selectedToken.label}</span>
                              </div>
                            ) : (
                              <span>Select Coin</span>
                            )}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={`w-4 h-4 transition-transform ${
                                isOpen ? "rotate-180" : ""
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                          {isOpen && (
                            <div className="absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 w-full max-w-xs sm:max-w-sm">
                              {tokenOptions.map((option) => (
                                <div
                                  key={option.value}
                                  className="flex items-center px-2 py-2 cursor-pointer hover:bg-gray-100"
                                  onClick={() => handleSelect(option)}
                                >
                                  <img
                                    src={option.image}
                                    alt={option.label}
                                    className="w-5 h-5 mr-2"
                                  />
                                  {option.label}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Input and Second Dropdown */}
                        <div className="firstCoinSecond flex flex-wrap md:flex-nowrap justify-between items-center gap-2 md:gap-4 m-1 text-black">
                          <div className="relative w-full md:w-2/3 text-sm h-8">
                            <input
                              type="text"
                              placeholder="Enter Amount"
                              className="w-full rounded-lg h-8 text-black px-3"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                            />
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-700 mx-1 text-sm">
                              Max
                            </div>
                          </div>

                          {/* Second Dropdown */}
                          <div className="relative w-full text-sm md:w-auto">
                            <div
                              className="flex items-center justify-between border border-gray-300 rounded-lg px-3 py-2 cursor-pointer bg-white w-full md:w-auto h-8"
                              onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                              {selectedCoin ? (
                                <>
                                  <img
                                    src={selectedCoin.image}
                                    alt={selectedCoin.label}
                                    className="w-5 h-5 mr-2"
                                  />
                                  <span>{selectedCoin.label}</span>
                                </>
                              ) : (
                                <span className="text-gray-500 ">
                                  Select Token
                                </span>
                              )}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`w-4 h-4 transition-transform ${
                                  dropdownOpen ? "rotate-180" : ""
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>

                            {/* Dropdown Options */}
                            {dropdownOpen && (
                              <div className="absolute top-full mt-1 border border-gray-300 rounded-lg bg-white shadow-lg w-full sm:w-60 z-10">
                                {tokenOptions.map((coin) => (
                                  <div
                                    key={coin.value}
                                    className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleCoinSelect(coin)}
                                  >
                                    <img
                                      src={coin.image}
                                      alt={coin.label}
                                      className="w-5 h-5 mr-2"
                                    />
                                    <span>{coin.label}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Amount Display and Balance */}
                        <div className="firstCoinThree flex flex-wrap justify-between items-center px-2 text-gray-600">
                          <div>
                            $
                            {isNaN(parseFloat(amount)) || amount === ""
                              ? "0.00"
                              : convertAmountToValue(amount)}
                          </div>
                          <div>Balance: 0</div>
                        </div>
                      </div>

                      <div className="flex w-full items-center justify-center p-2">
                        <div className="border-t border-gray-400 w-full"></div>
                        <div className="flex items-center justify-center">
                          <button>
                            <IoSwapVertical size={20} color="gray" />
                          </button>
                        </div>
                        <div className="border-t border-gray-400 w-full"></div>
                      </div>

                      {/* Second Coin */}

                      <div className="secondCoin bg-indigo-100 rounded-xl p-2 gap-8 ">
                        <div className="secondCoinOne text-black p-0 text-sm relative bg-white rounded-[10px]">
                          <div
                            className="border border-gray-300 rounded-lg h-8 flex items-center justify-between px-2 cursor-pointer"
                            onClick={() => setIsOpenSecond(!isOpenSecond)}
                          >
                            {selectedTokenSecond ? (
                              <div className="flex items-center">
                                <Image
                                  src={selectedTokenSecond.image}
                                  alt={selectedTokenSecond.label}
                                  className="w-5 h-5 mr-2"
                                />
                                <span>{selectedTokenSecond.label}</span>
                              </div>
                            ) : (
                              <span>Select Coin</span>
                            )}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={`w-4 h-4 transition-transform ${
                                isOpenSecond ? "rotate-180" : ""
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                          {isOpenSecond && (
                            <div className="absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 w-full">
                              {tokenOptions.map((option) => (
                                <div
                                  key={option.value}
                                  className="flex items-center px-2 py-2 cursor-pointer hover:bg-gray-100"
                                  onClick={() => handleSelectSecond(option)}
                                >
                                  <Image
                                    src={option.image}
                                    alt={option.label}
                                    className="w-5 h-5 mr-2"
                                  />
                                  {option.label}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="secondCoinSecond flex justify-between items-center m-1 text-black">
                          <div className="relative w-2/3 text-sm h-8">
                            <input
                              type="text"
                              placeholder="Enter Amount"
                              className="w-full rounded-lg h-8 text-black px-3"
                              value={amountSecond}
                              onChange={(e) => setAmountSecond(e.target.value)}
                            />
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-700 mx-1 text-sm">
                              Max
                            </div>
                          </div>

                          <div className="flex justify-center gap-1 my-1 text-sm relative">
                            <div
                              className="flex items-center justify-between border border-gray-300 rounded-lg px-3 py-2 cursor-pointer bg-white w-35 h-8"
                              onClick={() =>
                                setDropdownOpenSecond(!dropdownOpenSecond)
                              }
                            >
                              {selectedCoinSecond ? (
                                <>
                                  <Image
                                    src={selectedCoinSecond.image}
                                    alt={selectedCoinSecond.label}
                                    className="w-5 h-5 mr-2"
                                  />
                                  <span>{selectedCoinSecond.label}</span>
                                </>
                              ) : (
                                <span className="text-gray-500">
                                  Select Token
                                </span>
                              )}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`w-4 h-4 transition-transform ${
                                  dropdownOpenSecond ? "rotate-180" : ""
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>

                            {dropdownOpenSecond && (
                              <div className="absolute top-full mt-1 border border-gray-300 rounded-lg bg-white shadow-lg w-60 z-10">
                                {tokenOptions.map((coin) => (
                                  <div
                                    key={coin.value}
                                    className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleCoinSelectSecond(coin)}
                                  >
                                    <Image
                                      src={coin.image}
                                      alt={coin.label}
                                      className="w-5 h-5 mr-2"
                                    />
                                    <span>{coin.label}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="secondCoinThree flex justify-between items-center px-2 text-gray-600">
                          <div>
                            $
                            {isNaN(parseFloat(amountSecond)) ||
                            amountSecond === ""
                              ? "0.00"
                              : convertAmountToValueSecond(amountSecond)}
                          </div>
                          <div>Balance: 0</div>
                        </div>
                      </div>

                      <input
                        type="text"
                        className="my-5 w-full h-8 rounded-lg border border-gray-300 box-border p-2 text-black"
                        placeholder="Recipient Address (Default is your address)"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                      />

                      <button
                        className="bg-indigo-600 rounded-lg w-full h-8 box-border text-white cursor-pointer disabled:bg-blue-400 disabled:cursor-not-allowed"
                        onClick={handleSwap}
                        disabled={!isSwapEnabled}
                      >
                        Swap
                      </button>
                    </div>
                  )}

                  {selectedTab === "buy" && (
                    <div className="flex justify-center items-center h-96 text-gray-500">
                      Coming Soon
                    </div>
                  )}

                  {selectedTab === "sell" && (
                    <div className="flex justify-center items-center h-96 text-gray-500">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlockchainSwapCard;
