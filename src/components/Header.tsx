import { ReactNode } from "react";
import logout from "lib/logout";
import Image from "next/image";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuGroup,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

type Props = {
  image: string;
  name: string;
  email: string;
};

const Links = ["Menu"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "blue.500",
    }}
    // onClick={logout}
  >
    {children}
  </Link>
);

const Header: React.FC<Props> = ({ image, name, email }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="blue.300" px={4}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image
                src="/images/icon.png"
                height={80}
                width={200}
                alt="icon"
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} src={image} />
              </MenuButton>
              <MenuList>
                {/* <MenuGroup title={`Name: ${name}`}></MenuGroup>
                <MenuGroup title={`Email: ${email}`}></MenuGroup> */}
                <MenuGroup title={name}></MenuGroup>
                <MenuGroup title={email}></MenuGroup>
                <MenuDivider />
                <MenuItem
                  bg="red.500"
                  _hover={{ bg: "red.600" }}
                  onClick={logout}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Header;
