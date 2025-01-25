import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import { useColorModeValue } from "./color-mode";
import React from "react";

export const FeatureCard = ({ icon: Icon, title, description }) => (
  <VStack
    p={6}
    bg={useColorModeValue("white", "gray.800")}
    borderRadius="xl"
    boxShadow="md"
    maxW="300px"
    textAlign="center"
    role="group"
  >
    <Box fontSize="3xl" color={useColorModeValue("blue.500", "blue.200")}>
      <Icon />
    </Box>
    <Heading size="md">{title}</Heading>
    <Text color="gray.500" fontSize="sm">
      {description}
    </Text>
  </VStack>
);
