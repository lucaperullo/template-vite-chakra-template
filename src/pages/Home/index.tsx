import {
  Heading,
  Text,
  Button,
  VStack,
  Box,
  Flex,
  Link,
} from "@chakra-ui/react";
import { GenericPage } from "../../components/ui/generic-page";
import { FaRandom, FaComments, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import React from "react";
import { FeatureCard } from "@/components/ui/feature-card";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const Home = () => {
  const accentColor = useColorModeValue("blue.500", "blue.200");
  const gradient = useColorModeValue(
    "linear(to-r, blue.400, purple.500)",
    "linear(to-r, blue.300, purple.200)"
  );

  return (
    <GenericPage>
      <Flex
        direction="column"
        align="center"
        justify="center"
        minH="calc(100vh - 80px)"
        textAlign="center"
        px={4}
      >
        <VStack maxW="3xl">
          <Box>
            <Heading
              as="h1"
              size="2xl"
              mb={6}
              bgGradient={gradient}
              bgClip="text"
            >
              Connect in 15 Minutes or Less
            </Heading>

            <Text fontSize="xl" color="gray.500" mb={8}>
              Break the ice with random team members through quick, focused
              conversations. Perfect for sparking creativity, sharing ideas, and
              building stronger connections.
            </Text>
          </Box>

          <VStack w="full">
            <Flex
              gap={6}
              wrap="wrap"
              justify="center"
              //@ts-ignore
              sx={{
                "[role='group']": {
                  transition: "transform 0.2s",
                  _hover: {
                    transform: "translateY(-4px)",
                  },
                },
              }}
            >
              <FeatureCard
                icon={FaRandom}
                title="Instant Matching"
                description="Get paired with random colleagues in seconds"
              />

              <FeatureCard
                icon={FaClock}
                title="Time-Boxed Chats"
                description="15 minutes of random, unproductive conversations! What are you waiting for?"
              />

              <FeatureCard
                icon={FaComments}
                title="Diverse Networking"
                description="Meet team members outside your usual circle"
              />
            </Flex>

            <Box pt={8}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  colorScheme="blue"
                  size="lg"
                  px={8}
                  py={6}
                  fontSize="xl"
                  borderRadius="xl"
                  boxShadow="xl"
                  _hover={{ textDecoration: "none" }}
                  animation={`${pulse} 2s infinite`}
                >
                  <FaRandom /> Talk to a stranger in your team!
                </Button>
              </motion.div>

              <Text mt={4} color="gray.500">
                Already queued?{" "}
                <Link href="/queue" color={accentColor} fontWeight="semibold">
                  Check your status
                </Link>
              </Text>
            </Box>
          </VStack>
        </VStack>

        <Box mt={16} textAlign="center">
          <Text fontSize="sm" color="gray.500">
            🔥 Over 19 people to get in touch with
          </Text>
        </Box>
      </Flex>
    </GenericPage>
  );
};
