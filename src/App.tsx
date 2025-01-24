// src/App.js
import React, { useState } from "react";
import {
  Box,
  Button,
  ClientOnly,
  Skeleton,
  Text,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import { SiVite, SiChakraui } from "react-icons/si";
import { ColorModeButton } from "./components/ui/color-mode";
import IconMask from "./components/ui/icon-mask";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Color Mode Toggle Button */}
      <Box pos="absolute" top="4" right="4">
        <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
          <ColorModeButton />
        </ClientOnly>
      </Box>

      {/* Main Content */}
      <Box textAlign="center" fontSize="xl" pt="2vh">
        <VStack mt="20">
          {/* Welcome Message with Icons */}
          <Box>
            <Text fontSize="2xl" mb="4">
              Welcome to
              <HStack as="span" ml={2}>
                <Text as="span">Vite</Text>
                <IconMask fontSize="2xl" color="cyan.500">
                  <SiVite />
                </IconMask>
                <Text as="span"> + ChakraUI 3</Text>
                <IconMask fontSize="2xl" color="teal.500">
                  <SiChakraui />
                </IconMask>
                <Text as="span"> + React</Text>
                <IconMask fontSize="2xl" color="blue.400">
                  <FaReact />
                </IconMask>
              </HStack>
            </Text>
          </Box>

          {/* Simple Counter */}
          <Box>
            <Text fontSize="2xl" mb="4">
              Simple Counter
            </Text>
            <HStack justify="center">
              <Button colorScheme="teal" onClick={() => setCount(count + 1)}>
                Increment
              </Button>
              <Button colorScheme="red" onClick={() => setCount(count - 1)}>
                Decrement
              </Button>
              <Button colorScheme="gray" onClick={() => setCount(0)}>
                Reset
              </Button>
            </HStack>
            <Text mt="4" fontSize="lg">
              Current Count: {count}
            </Text>
          </Box>
        </VStack>
      </Box>
    </>
  );
}

export default App;
