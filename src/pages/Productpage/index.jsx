import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";

const ProductpagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[279px] w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="bg-white-A700 flex flex-col items-center justify-start pt-[54px] md:px-10 sm:px-5 px-[54px] w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start max-w-[1248px] mx-auto w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                <Text
                  className="md:text-5xl text-[64px] text-black-900 tracking-[-1.28px]"
                  size="txtNewsreaderRegular64"
                >
                  Produce
                </Text>
                <Text
                  className="ml-6 sm:ml-[0] sm:mt-0 mt-[37px] text-black-900 text-xl"
                  size="txtInterRegular20"
                >
                  <span className="text-black-900 font-inter text-left font-medium">
                    Fresh
                  </span>
                  <span className="text-black-900 font-inter text-left font-light">
                    {" "}
                    — August 21, 2023
                  </span>
                </Text>
                <Button
                  className="cursor-pointer font-inter font-semibold mb-0.5 min-w-[88px] sm:ml-[0] ml-[482px] sm:mt-0 mt-[21px] text-base text-center"
                  shape="round"
                  color="light_green_900"
                  size="xs"
                  variant="fill"
                >
                  Default
                </Button>
                <Button
                  className="border border-gray-400 border-solid cursor-pointer font-inter font-semibold mb-0.5 min-w-[62px] ml-2 sm:ml-[0] sm:mt-0 mt-[21px] text-base text-center"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                >
                  A-Z
                </Button>
                <Button
                  className="border border-gray-400 border-solid cursor-pointer font-inter font-semibold mb-0.5 min-w-[101px] ml-2 sm:ml-[0] sm:mt-0 mt-[21px] text-base text-center"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                >
                  List view
                </Button>
              </div>
              <Line className="bg-gray-300 h-0.5 shadow-bs w-full" />
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 ml-24 md:ml-[0] mt-10 md:px-5 w-[58%]"
            orientation="horizontal"
          >
            <div className="bg-gray-50 border-2 border-gray-300 border-solid flex flex-col gap-[23px] justify-start pb-7 rounded-[24px] w-full">
              <Img
                className="h-[296px] sm:h-auto object-cover rounded-tl-[24px] rounded-tr-[24px] w-full"
                src="images/img_edoneilavvdz.png"
                alt="edoneilavvdz"
              />
              <div className="flex flex-col items-start justify-start ml-6 md:ml-[0]">
                <Text
                  className="text-black-900 text-xl"
                  size="txtInterSemiBold20"
                >
                  Heirloom tomato
                </Text>
                <Text
                  className="mt-[5px] text-light_green-900 text-xl"
                  size="txtInterSemiBold20Lightgreen900"
                >
                  $5.99 / lb
                </Text>
                <Text
                  className="mt-5 text-base text-gray-600"
                  size="txtInterRegular16Gray600"
                >
                  Grown in San Juan Capistrano, CA
                </Text>
              </div>
            </div>
            <div className="bg-gray-50 border-2 border-gray-300 border-solid flex flex-col gap-[26px] justify-start pb-7 rounded-[24px] w-full">
              <Img
                className="h-[296px] sm:h-auto object-cover rounded-tl-[24px] rounded-tr-[24px] w-full"
                src="images/img_noonbrewzicb4ekmakunsplash.png"
                alt="noonbrewzicb4ek"
              />
              <div className="flex flex-col items-start justify-start ml-6 md:ml-[0]">
                <Text
                  className="text-black-900 text-xl"
                  size="txtInterSemiBold20"
                >
                  Organic ginger
                </Text>
                <Text
                  className="mt-[3px] text-light_green-900 text-xl"
                  size="txtInterSemiBold20Lightgreen900"
                >
                  $12.99 / lb
                </Text>
                <Text
                  className="mt-5 text-base text-gray-600"
                  size="txtInterRegular16Gray600"
                >
                  <span className="text-gray-600 font-inter text-left font-normal">
                    Grown in{" "}
                  </span>
                  <span className="text-gray-600 font-inter text-left font-normal">
                    Huntington Beach
                  </span>
                  <span className="text-gray-600 font-inter text-left font-normal">
                    , C
                  </span>
                  <span className="text-gray-600 font-inter text-left font-normal">
                    A
                  </span>
                </Text>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default ProductpagePage;
