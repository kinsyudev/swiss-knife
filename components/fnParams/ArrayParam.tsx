import React, { useState } from "react";
import { Collapse, HStack, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { ParamType } from "ethers";
import { StringParam } from "./StringParam";
import { renderParamTypes } from "../renderParams";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

interface Params {
  input: ParamType;
  value: any;
}

export const ArrayParam = ({ input, value }: Params) => {
  const { isOpen, onToggle } = useDisclosure();

  if (value.length === 0) {
    return <StringParam value={"[ ]"} />;
  } else {
    return (
      <>
        <HStack>
          <StringParam value={value} />
          <Text
            fontSize={"xl"}
            fontWeight={"bold"}
            cursor={"pointer"}
            onClick={onToggle}
          >
            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Text>
        </HStack>
        <Collapse in={isOpen} animateOpacity>
          <Stack
            p={4}
            spacing={4}
            border="1px"
            borderStyle={"dashed"}
            borderColor={"whiteAlpha.500"}
            rounded={"lg"}
          >
            {value.map((v: any, i: number) => {
              return renderParamTypes(input.arrayChildren!, v);
            })}
          </Stack>
        </Collapse>
      </>
    );
  }
};