import React from "react";
import { Center, CircularProgress } from "@chakra-ui/react";

const FullScreenLoader = () => {
  return (
    <Center h="100vh" w="100vw">
      <CircularProgress isIndeterminate />
    </Center>
  );
};

export default FullScreenLoader;
