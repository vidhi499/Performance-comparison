import logo from "./logo.svg";
import "./App.css";
import { Box, Center } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Select } from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";

function ThemeToggler() {
  const { toggleColorMode } = useColorMode();
  return (
    <Button size="sm" onClick={toggleColorMode}>
      Toggle Mode
    </Button>
  );
}

function App() {
  return (
    <>
      <ThemeToggler />
      <Center w="100%" h="100vh" justifyContent="center" alignItems="center">
        <Box
          bg={useColorModeValue("gray.100", "gray.600")}
          w="25%"
          m="auto"
          p="30"
          borderRadius="4"
        >
          <Box w="100%" h="100%">
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl id="password" pt="8">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl id="password" pt="8">
              <FormLabel>Choose a department</FormLabel>
              <Select placeholder="Select option">
                <option label="UX Research" value="ux" />
                <option label="Web Development" value="web" />
                <option label="Cross Platform Development" value="cross" />
                <option label="UI Designing" value="ui" />
                <option label="Backend Development" value="backend" />
              </Select>
            </FormControl>
            <Center>
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
    </>
  );
}

export default App;
