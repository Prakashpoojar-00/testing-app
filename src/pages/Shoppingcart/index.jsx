import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";

const ShoppingcartPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[184px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="bg-white-A700 flex flex-col items-center justify-start pt-[54px] md:px-10 sm:px-5 px-[54px] w-full">
            <div className="flex flex-col gap-[30px] items-start justify-start max-w-[1248px] mx-auto w-full">
              <div className="flex flex-row gap-6 items-end justify-start w-[22%] md:w-full">
                <Text
                  className="md:text-5xl text-[64px] text-black-900 tracking-[-1.28px]"
                  size="txtNewsreaderRegular64"
                >
                  Basket
                </Text>
                <Text
                  className="mb-[3px] mt-[35px] text-black-900 text-xl"
                  size="txtInterLight20"
                >
                  3 items
                </Text>
              </div>
              <Line className="bg-gray-300 h-0.5 shadow-bs w-full" />
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-start justify-start max-w-[1248px] mt-10 mx-auto md:px-5 w-full">
            <List
              className="flex flex-col gap-[31px] w-[66%]"
              orientation="vertical"
            >
              <div className="bg-gray-50 border-2 border-gray-300 border-solid flex flex-col items-center justify-start my-0 rounded-[24px] w-full">
                <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-[98%] md:w-full">
                  <Img
                    className="h-[159px] md:h-auto object-cover w-40 sm:w-full"
                    src="images/img_edoneilavvdz.png"
                    alt="edoneilavvdz"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                      <Text
                        className="text-black-900 text-xl"
                        size="txtInterSemiBold20"
                      >
                        Heirloom tomato
                      </Text>
                      <Text
                        className="text-black-900 text-right text-xl"
                        size="txtInterSemiBold20"
                      >
                        $5.99
                      </Text>
                    </div>
                    <Text
                      className="mt-[5px] text-light_green-900 text-xl"
                      size="txtInterSemiBold20Lightgreen900"
                    >
                      $5.99 / lb
                    </Text>
                    <div className="bg-white-A700 border-2 border-black-900_0f border-solid flex flex-row gap-[46px] items-center justify-start mt-[15px] p-1 rounded-[20px] w-[21%] md:w-full">
                      <Text
                        className="ml-3 text-base text-black-900"
                        size="txtInterSemiBold16"
                      >
                        1 lb
                      </Text>
                      <Img
                        className="h-8 w-8"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 border-2 border-gray-300 border-solid flex flex-col items-center justify-start my-0 rounded-[24px] w-full">
                <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-[98%] md:w-full">
                  <Img
                    className="h-[159px] md:h-auto object-cover w-40 sm:w-full"
                    src="images/img_noonbrewzicb4ekmakunsplash.png"
                    alt="noonbrewzicb4ek"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                      <Text
                        className="text-black-900 text-xl"
                        size="txtInterSemiBold20"
                      >
                        Organic ginger
                      </Text>
                      <Text
                        className="text-black-900 text-right text-xl"
                        size="txtInterSemiBold20"
                      >
                        $6.50
                      </Text>
                    </div>
                    <Text
                      className="mt-[3px] text-light_green-900 text-xl"
                      size="txtInterSemiBold20Lightgreen900"
                    >
                      $12.99 / lb
                    </Text>
                    <div className="bg-white-A700 border-2 border-black-900_0f border-solid flex flex-row gap-7 items-center justify-start mt-[15px] p-1 rounded-[20px] w-[21%] md:w-full">
                      <Text
                        className="ml-3 text-base text-black-900"
                        size="txtInterBold16"
                      >
                        0.5 lb
                      </Text>
                      <Img
                        className="h-8 w-8"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 border-2 border-gray-300 border-solid flex flex-col items-center justify-start my-0 rounded-[24px] w-full">
                <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-[98%] md:w-full">
                  <Img
                    className="h-[159px] md:h-auto object-cover w-40 sm:w-full"
                    src="images/img_k80fkphulvmunsplash.png"
                    alt="k80fkphulvmunsp"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                      <Text
                        className="text-black-900 text-xl"
                        size="txtInterSemiBold20"
                      >
                        Sweet onion
                      </Text>
                      <Text
                        className="text-black-900 text-right text-xl"
                        size="txtInterSemiBold20"
                      >
                        $14.95
                      </Text>
                    </div>
                    <Text
                      className="mt-[5px] text-light_green-900 text-xl"
                      size="txtInterSemiBold20Lightgreen900"
                    >
                      $2.99 / lb
                    </Text>
                    <div className="bg-white-A700 border-2 border-black-900_0f border-solid flex flex-row gap-[43px] items-center justify-start mt-[15px] p-1 rounded-[20px] w-[21%] md:w-full">
                      <Text
                        className="ml-3 text-base text-black-900"
                        size="txtInterBold16"
                      >
                        5 lb
                      </Text>
                      <Img
                        className="h-8 w-8"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <div className="bg-gray-50 border-2 border-gray-300 border-solid flex md:flex-1 flex-col items-center justify-end mb-[221px] p-6 sm:px-5 rounded-[24px] w-[32%] md:w-full">
              <div className="flex flex-col items-start justify-start mt-0.5 w-full">
                <Text
                  className="text-black-900 text-xl"
                  size="txtInterSemiBold20"
                >
                  Order summary
                </Text>
                <div className="flex flex-row items-center justify-between mt-[31px] w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtInterRegular16"
                  >
                    Subtotal
                  </Text>
                  <Text
                    className="text-base text-black-900 text-right"
                    size="txtInterRegular16"
                  >
                    $27.44
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between mt-4 w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtInterRegular16"
                  >
                    Shipping
                  </Text>
                  <Text
                    className="text-base text-black-900 text-right"
                    size="txtInterRegular16"
                  >
                    $3.99
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[15px] w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtInterRegular16"
                  >
                    Tax
                  </Text>
                  <Text
                    className="text-base text-black-900 text-right"
                    size="txtInterRegular16"
                  >
                    $2.00
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between mt-[13px] w-full">
                  <Text
                    className="mt-[3px] text-base text-black-900"
                    size="txtInterSemiBold16"
                  >
                    Total
                  </Text>
                  <Text
                    className="mb-[3px] text-base text-black-900 text-right"
                    size="txtInterSemiBold16"
                  >
                    $33.43
                  </Text>
                </div>
                <div className="bg-light_green-900 flex flex-row items-center justify-between mt-8 p-2 rounded-lg w-full">
                  <Text
                    className="ml-4 text-base text-white-A700"
                    size="txtInterSemiBold16WhiteA700"
                  >
                    Continue to payment
                  </Text>
                  <Img
                    className="h-8 mr-2 w-8"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingcartPage;
