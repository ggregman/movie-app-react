import {Box,CloseButton, Flex, HStack, VStack, IconButton, useColorModeValue, useDisclosure} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { Heading, Icon } from "@chakra-ui/react";
import { SearchBar } from "./SearchBar";

export const NavBar = (props) => {
  
  const { searchCallback } = props;
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <>
      <Heading bg={bg} w="full" px={{ base: 2, sm: 4 }} py={5} shadow="md">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
          paddingX="100px"
        >
          <Flex fontSize="xl">
            <Icon h="25px" w="25px" marginRight="5px">
              <path
                fill="#50C878"
                d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm.001 6c-.001 0-.001 0 0 0h-.466l-2.667-4H20l.001 4zm-5.466 0-2.667-4h2.596l2.667 4h-2.596zm-2.404 0H9.535L6.869 5h2.596l2.666 4zM4 5h.465l2.667 4H4V5z"
              />
            </Icon>
            MovieApp
          </Flex>

          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <SearchBar searchCallback={searchCallback} />
            </HStack>

            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<HamburgerIcon />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
                
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                  <SearchBar searchCallback={searchCallback} />
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </Heading>
    </>
  );
};
