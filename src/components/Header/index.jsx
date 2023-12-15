import React from "react";

import { Button, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Text
          className="mb-[42px] sm:ml-[0] ml-[95px] sm:mt-0 mt-[37px] md:text-3xl sm:text-[28px] text-[32px] text-light_green-900 tracking-[-0.32px]"
          size="txtNewsreaderMedium32"
        >
          World Peas
        </Text>
        <Text
          className="mb-11 sm:ml-[0] ml-[497px] sm:mt-0 mt-[47px] text-base text-black-900 text-center"
          size="txtInterRegular16"
        >
          Shop
        </Text>
        <Text
          className="ml-12 sm:ml-[0] sm:mt-0 my-[45px] text-base text-black-900 text-center"
          size="txtInterRegular16"
        >
          Newstand
        </Text>
        <Text
          className="ml-12 sm:ml-[0] sm:mt-0 my-[45px] text-base text-black-900 text-center"
          size="txtInterRegular16"
        >
          Who we are
        </Text>
        <Text
          className="mb-11 ml-12 sm:ml-[0] sm:mt-0 mt-[47px] text-base text-black-900 text-center"
          size="txtInterRegular16"
        >
          My profile
        </Text>
        <Button
          className="cursor-pointer font-inter font-semibold min-w-[126px] ml-12 sm:ml-[0] mr-24 sm:mt-0 my-8 rounded text-base text-center"
          color="light_green_900"
          size="sm"
          variant="fill"
        >
          Basket (3)
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
