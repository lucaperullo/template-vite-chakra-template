import {
  Flex,
  Box,
  VStack,
  Button,
  Link as ChakraLink,
  ClientOnly,
  Skeleton,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { Link, Outlet } from "react-router";
import React, { ReactChild } from "react";
import { ColorModeButton, useColorModeValue } from "./color-mode";
import {
  RiHomeLine,
  RiCalendarLine,
  RiArrowRightLine,
  RiLogoutBoxRLine,
} from "react-icons/ri";

export const GenericPage = ({ children }: { children: ReactChild }) => {
  const sidebarBg = useColorModeValue("gray.900", "gray.800");

  return (
    <Flex height="100dvh" w="100%">
      {/* Sidebar with violet theme */}
      <Box
        w="250px"
        p={4}
        bg={sidebarBg}
        color="white"
        display="flex"
        flexDirection="column"
        boxShadow="md"
      >
        <VStack align="stretch" flex={1}>
          <ChakraLink asChild>
            <Link to="/home">
              <Button
                colorPalette={"gray"}
                variant="surface"
                justifyContent="flex-start"
                w="full"
                _hover={{ transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                <RiHomeLine /> Home
              </Button>
            </Link>
          </ChakraLink>

          <ChakraLink asChild>
            <Link to="/schedule">
              <Button
                colorPalette={"gray"}
                variant="surface"
                justifyContent="flex-start"
                w="full"
                _hover={{ transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                <RiCalendarLine /> Schedule
              </Button>
            </Link>
          </ChakraLink>

          <ChakraLink asChild>
            <Link to="/calendar">
              <Button
                colorPalette={"gray"}
                variant="surface"
                justifyContent="flex-start"
                w="full"
                _hover={{ transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                <RiCalendarLine /> Calendar
              </Button>
            </Link>
          </ChakraLink>

          <Spacer />

          {/* Logout button at bottom */}
          <Button
            w="full"
            mt={4}
            colorPalette={"red"}
            variant="surface"
            justifyContent="flex-start"
            onClick={() => console.log("Logout logic here")}
          >
            <RiLogoutBoxRLine /> Log Out
          </Button>
        </VStack>
      </Box>

      {/* Main Content Area */}
      <Box flex={1} p={4} overflow="auto" position="relative">
        {children}

        {/* Color mode button in top-right corner */}
        <Box position="absolute" top="4" right="4">
          <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
            <HStack>
              <ColorModeButton />
              <Button colorScheme="teal" variant="outline" size="sm">
                <RiArrowRightLine /> Support
              </Button>
            </HStack>
          </ClientOnly>
        </Box>
      </Box>
    </Flex>
  );
};
