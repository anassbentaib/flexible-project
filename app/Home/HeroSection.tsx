"use client";
import {
  Box,
  Image,
  Text,
  Heading,
  Stack,
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  FormControl,
  InputRightAddon,
  Divider,
  SimpleGrid,
  Card,
  CardBody,
  Spacer,
  useMediaQuery,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

import NavigationBar from "./NavigationBar";
import { useEffect, useState } from "react";
import { AiFillGithub, AiOutlineMenu } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSmallScreen] = useMediaQuery("(max-width: 48em)");

  const logs = [
    "[09:43:36] Starting 'watch-extension:vscode-api-tests' ...",
    "[09:43:36] Finished 'clean-extension:typescript-language-features' after 248 ms",
    "[09:43:36] Starting 'watch-extension:typescript-language-features' ...",
    "[09:43:36] Finished 'clean-extension:php-language-features' after 384 ms",
    "[09:43:36] Starting 'watch-extension:php-language-features' ...",
    "[09:43:40] Finished 'clean-extension:html-language-features-server' after 4.66 s",
    "[09:43:40] Starting 'watch-extension:html-language-features-server' ...",
    "[09:43:43] Finished 'clean-client' after 7.33 s",
    "[09:43:43] Starting 'watch-client' ...",
  ];

  const renderLog = (log) => {
    const timestampRegex = /^\[([\d:]+)\]/;
    const timestampMatch = log.match(timestampRegex);

    if (timestampMatch) {
      const timestamp = timestampMatch[1];
      const content = log.replace(timestampMatch[0], "");

      return (
        <Text key={log}>
          <Text as="span" color="#7d8590">
            {`[${timestamp}]`}
          </Text>
          <Text as="span" color="#2f81f7">
            {content}
          </Text>
        </Text>
      );
    }

    return <Text key={log}>{log}</Text>;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsVisible(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        w="100%"
        h="100vh"
        color="#fff"
        justifyContent="flex-start"
        alignItems="start"
        position="relative"
      >
        <Image
          h="100%"
          w="100%"
          src="/space1.jpg"
          bgPos="center"
          bgSize="cover"
          position="absolute"
          zIndex="-1"
        />
        <NavigationBar />
        <Box
          maxW="1100px"
          w="100%"
          zIndex="100"
          opacity="0.8"
          mx="auto"
          borderRadius="md"
          boxShadow="lg"
          textAlign="start"
        >
          <Stack pt="8rem">
            <Heading
              fontSize="clamp(2rem , 4vw, 4rem )"
              fontWeight="bold"
              mt="5rem"
            >
              Let’s build from here
            </Heading>

            <Text fontSize="clamp(1rem , 2vw, 2rem )" mt="1.5rem" mb="3rem">
              The AI-powered developer platform to build, scale, and deliver
              secure software. Email address Email address
            </Text>
            <Box
              maxW="600px"
              w="100%"
              zIndex="100"
              borderRadius="md"
              boxShadow="lg"
              textAlign="start"
            >
              <InputGroup>
                <Input
                  borderLeftRadius={3.3}
                  borderRightRadius={0}
                  required
                  outline="none"
                  border="none"
                  type="email"
                  name="email"
                  placeholder="e-mail adresse"
                  fontSize="16px"
                  bg="#fff"
                  lineHeight="1.5"
                  color="#ccc"
                  w="100%"
                  p={5}
                />
                <InputRightAddon p={0} border="none">
                  <Button
                    borderLeftRadius={0}
                    borderRightRadius={3.3}
                    w="100%"
                    type="submit"
                    cursor="pointer"
                    p="0.8rem 3rem"
                    color="#fff"
                    bg="linear-gradient(180deg, rgba(183, 52, 179, 0.15) 0%, rgba(164, 46, 156, 0) 100%),#6e40c9 !important"
                    border="none"
                    outline="none"
                    fontSize="clamp(1.1rem , 1.5vw, 1rem )"
                    fontWeight="bold"
                  >
                    Sign up for GitHub
                  </Button>
                </InputRightAddon>
              </InputGroup>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Box
        w="100%"
        h="60vh"
        bg="#0c1015"
        color="#fff"
        justifyContent="flex-start"
        alignItems="start"
        position="relative"
      >
        <Box
          maxW="1100px"
          w="100%"
          zIndex="100"
          opacity="0.8"
          mx="auto"
          borderRadius="md"
          boxShadow="lg"
          textAlign="start"
        >
          <Stack pt="2rem">
            <motion.div
              initial={{ opacity: 0, x: "5%" }}
              animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? "0%" : "5%",
              }}
              transition={{ duration: 0.5 }}
            >
              <Heading
                fontSize="clamp(1rem , 2vw, 2rem )"
                fontWeight="extrabold"
              >
                Productivity
              </Heading>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "10%" }}
              animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? "0%" : "10%",
              }}
              transition={{ duration: 0.1 }}
            >
              <Text
                fontSize="clamp(1rem , 2.3vw, 2.3rem )"
                mt="1rem"
                mb="3rem"
                fontWeight="bold"
              >
                <span style={{ color: "#7ee787" }}>
                  Productivity Accelerate high-quality software
                  <br />
                  development.
                </span>
                Our AI-powered platform <br />
                drives innovation with tools that boost <br />
                developer velocity.
              </Text>
            </motion.div>
          </Stack>
        </Box>
      </Box>

      {/* ///////////////////////////////////////////////// */}
      <Box
        bg="#0c1015"
        maxW="100%"
        mx="auto"
        minH="100vh"
        pos="relative"
        px={50}
      >
        <Box maxW="100%" mx="auto" minHeight="100vh" color="#fff">
          <Box maxW="6xl" mx="auto" minH="100vh" pos="relative">
            <Box as="section" maxW="4xl" mx="auto" bg="#161b22">
              <SimpleGrid
                color="#fff"
                templateColumns="repeat(auto-fill, minmax(500px, 1fr))"
              >
                <Card
                  boxShadow="none"
                  border="1px solid #ccc"
                  borderRadius="none"
                >
                  <CardBody>
                    <Box>
                      <Box w="85%" mx="auto" mt="20px" mb="20px">
                        <Flex>
                          <Flex fontSize="1.5rem">
                            <AiFillGithub />
                          </Flex>
                          <Spacer />
                          <Flex fontSize="1.5rem">
                            <AiOutlineMenu />
                          </Flex>
                          <Spacer />
                          <Flex fontSize="1.5rem">
                            <IoMdNotificationsOutline />
                          </Flex>
                        </Flex>
                      </Box>
                      <Box>
                        <AnimatePresence>
                          {isVisible && (
                            <motion.div
                              initial={{ opacity: 0, y: "30%" }}
                              animate={{ opacity: 1, y: "0%" }}
                              exit={{ opacity: 0, y: "30%" }}
                              transition={{ duration: 0.5 }}
                            >
                              <Image
                                // w="80%"
                                src="/planet.jpg"
                                mx="auto"
                                h="70vh"
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Box>
                    </Box>
                  </CardBody>
                </Card>
                <Card boxShadow="none" border="1px solid #ccc">
                  <CardBody>
                    <Box w="90%" mx="auto" mt="20px" mb="20px">
                      <Box w="85%" mx="auto" mt="20px" mb="20px">
                        <Flex>
                          <Flex fontSize="1rem">
                            <Text>Terminal</Text>
                          </Flex>
                          <Spacer />
                          <Flex fontSize="1rem" color="#7d8590">
                            <Text>Output</Text>
                          </Flex>
                          <Spacer />
                          <Flex fontSize="1rem" color="#7d8590">
                            <Text>Problems</Text>
                          </Flex>
                          <Spacer />
                          <Flex fontSize="1rem" color="#7d8590">
                            <Text>Debug Console</Text>
                          </Flex>
                        </Flex>
                      </Box>
                      <Box p="4">
                        <AnimatePresence>
                          {isVisible && (
                            <motion.div
                              initial={{ opacity: 0, y: "30%" }}
                              animate={{ opacity: 1, y: "0%" }}
                              exit={{ opacity: 0, y: "30%" }}
                              transition={{ duration: 0.5 }}
                            >
                              <UnorderedList>
                                {logs.map((log, index) => (
                                  <ListItem key={index} mb="2">
                                    {renderLog(log)}
                                  </ListItem>
                                ))}
                              </UnorderedList>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Box>
                      <Text color="#7d8590" fontSize="1.3rem" mt="20px">
                        <span
                          style={{
                            color: "#fff",
                            fontSize: "1.3rem",
                            fontWeight: "bold",
                          }}
                        >
                          GitHub Codespaces &nbsp;
                        </span>
                        offers a complete dev environment in seconds, so you can
                        code, build, test, and open pull requests from any repo
                        anywhere.
                      </Text>
                    </Box>
                  </CardBody>
                </Card>
              </SimpleGrid>

              {/* <Box pb="5rem" mt="30px">
            <Text fontWeight="bold">Legal address:</Text>
            <Text>AZ1033, Baku, Narimanov district,</Text>
            <Text>Heydar Aliyev ave., 103, flat. 3</Text>
          </Box> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
