import React from "react";

import { Button, Img, Text } from "components";
import Header from "components/Header";

const HomepagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-newsreader items-center justify-start mx-auto pb-[30px] w-full">
        <div className="flex flex-col items-end justify-start w-full">
          <Header className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full" />
          <Text
            className="leading-[120.00%] mt-[167px] md:text-5xl text-[64px] text-black-900 text-center tracking-[-1.28px] w-[71%] sm:w-full"
            size="txtNewsreaderRegular64"
          >
            <span className="text-black-900 font-newsreader font-normal">
              We’re{" "}
            </span>
            <span className="text-black-900 font-newsreader font-normal italic">
              farmers
            </span>
            <span className="text-black-900 font-newsreader font-normal">
              ,{" "}
            </span>
            <span className="text-black-900 font-newsreader font-normal italic">
              purveyors
            </span>
            <span className="text-black-900 font-newsreader font-normal">
              , and{" "}
            </span>
            <span className="text-black-900 font-newsreader font-normal italic">
              eaters
            </span>
            <span className="text-black-900 font-newsreader font-normal">
              {" "}
              of organically grown food.
            </span>
          </Text>
          <div className="flex flex-col font-inter md:gap-10 gap-[156px] items-start justify-start mt-12 md:px-5 w-[94%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[7px] items-start justify-between w-full">
              <Img
                className="h-[693px] md:h-auto md:mt-0 mt-[220px] object-cover"
                src="images/img_jonathankemper.png"
                alt="jonathankemper"
              />
              <div className="flex flex-col md:gap-10 gap-[246px] justify-start mb-[62px]">
                <Button
                  className="cursor-pointer font-semibold min-w-[227px] mr-[606px] rounded-lg text-center text-xl"
                  color="light_green_900"
                  size="md"
                  variant="fill"
                >
                  Browse our shop
                </Button>
                <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[53px] w-[94%] md:w-full">
                  <Img
                    className="h-[480px] md:h-auto object-cover w-full"
                    src="images/img_stocksytxp226f.png"
                    alt="stocksytxp226f"
                  />
                  <Text
                    className="leading-[160.00%] text-black-900 text-sm tracking-[-0.14px] w-[95%] sm:w-full"
                    size="txtInterRegular14"
                  >
                    <span className="text-black-900 font-inter text-left font-medium">
                      Central California
                    </span>
                    <span className="text-black-900 font-inter text-left font-light">
                      {" "}
                      — The person who grew these was located in Central
                      California and, er, hopefully very well-compensated.
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[77px] items-start justify-start w-[78%] md:w-full">
              <Text
                className="md:mt-0 mt-[7px] text-black-900 text-sm tracking-[0.56px] uppercase"
                size="txtInterSemiBold14"
              >
                WHAT WE BELIEVE
              </Text>
              <Text
                className="leading-[160.00%] text-black-900 text-xl"
                size="txtInterRegular20"
              >
                <>
                  We believe in produce. Tasty produce. Produce like:
                  <br />
                  <br />
                  Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers.
                  Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese
                  eggplants. Asparagus. Artichokes—Jerusalem artichokes, too.
                  Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy.
                  Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley.
                  Dill. <br />
                  <br />
                  What are we forgetting?
                  <br />
                  <br />
                  Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some,
                  “rocket”). Persian cucumbers, in addition to aforementioned
                  “normal” cucumbers. Artichokes. Zucchinis. Pumpkins. Squash
                  (what some cultures call pumpkins). Sweet potatoes and
                  potato-potatoes. Jackfruit. Monk fruit. Fruit of the Loom.
                  Fruits of our labor (this website). Sorrel. Pineapple. Mango.
                  Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes.
                  Beets. Chives. Corn. Endive. Escarole, which, we swear, we’re
                  vendors of organic produce, but if you asked us to describe
                  what escaroles are...
                </>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
