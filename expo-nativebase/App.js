import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Box,
  Code,
  Stack,
  WarningOutlineIcon,
  useColorModeValue,
  Select,
  CheckIcon,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <Box _dark={{ bg: "gray.900" }} bg="white" h="100vh" w="100vw">
        <ToggleDarkMode />
        <Center w="100%" h="100vh" justifyContent="center" alignItems="center">
          <Box
            bg="gray.100"
            _dark={{ bg: "gray.800" }}
            w="25%"
            m="auto"
            p="30"
            borderRadius="4"
          >
            <Box w="100%" h="100%">
              <FormControl>
                <Stack mx="4">
                  <FormControl.Label>Email</FormControl.Label>
                  <Input type="email" placeholder="Email" />
                </Stack>
              </FormControl>

              <FormControl isRequired mt="8">
                <Stack mx="4">
                  <FormControl.Label>Password</FormControl.Label>
                  <Input type="password" placeholder="password" />
                  <FormControl.HelperText>
                    Must be atleast 6 characters.
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}
                  >
                    Atleast 6 characters are required.
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>
              <FormControl isRequired mt="8">
                <Stack mx="4">
                  <FormControl.Label>Choose a department</FormControl.Label>
                  <Select
                    selectedValue={"ux"}
                    minWidth="200"
                    accessibilityLabel="Choose Service"
                    placeholder="Choose Service"
                    _selectedItem={{
                      bg: "teal.600",
                      endIcon: <CheckIcon size="5" />,
                    }}
                    mt={1}
                    // onValueChange={(itemValue) => setService(itemValue)}
                  >
                    <Select.Item label="UX Research" value="ux" />
                    <Select.Item label="Web Development" value="web" />
                    <Select.Item
                      label="Cross Platform Development"
                      value="cross"
                    />
                    <Select.Item label="UI Designing" value="ui" />
                    <Select.Item label="Backend Development" value="backend" />
                  </Select>
                </Stack>
              </FormControl>

              <Center mt="8">
                <Button
                  type="submit"
                  variant="outline"
                  px="10"
                  colorScheme="blue"
                  mt="8"
                  mx="auto"
                >
                  Submit
                </Button>
              </Center>
            </Box>
          </Box>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text _dark={{ color: "white" }} color="black">
        Dark
      </Text>
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
