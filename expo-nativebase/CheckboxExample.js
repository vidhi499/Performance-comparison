import React from "react";
import {
  Box,
  Image,
  Text,
  Link,
  HStack,
  Heading,
  Switch,
  useColorMode,
  VStack,
  Code,
} from "./nb";

function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2}>
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

function Example() {
  const { colorMode } = useColorMode();

  return <Box>hello</Box>;
  return (
    <Box
      bg={colorMode === "light" ? "coolGray.50" : "coolGray.900"}
      minHeight="100vh"
      justifyContent="center"
      px={4}
    >
      hello
      {/* <VStack space={5} alignItems="center">
        <Image
          source={{
            uri: "https://docs.nativebase.io/img/nativebaselogo.svg",
          }}
          alt="NativeBaseLogo"
          h="150"
          w="132"
        />
        <Heading size="lg">Welcome to NativeBase</Heading>
        <Text>
          Edit <Code>src/App.tsx</Code> and save to reload.
        </Text>
        <Link href="https://docs.nativebase.io" isExternal>
          <Text color="primary.500" underline fontSize={"xl"}>
            Learn NativeBase
          </Text>
        </Link>
        <ToggleDarkMode />
      </VStack> */}
    </Box>
  );
}

export default Example;
