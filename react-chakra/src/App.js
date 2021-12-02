import logo from "./logo.svg";
import "./App.css";
import { Box, Center } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";

function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box textAlign="right" py={4} mr={12}>
      <IconButton
        icon={colorMode === "light" ? "moon" : "sun"}
        onClick={toggleColorMode}
        variant="ghost"
        color={colorMode === "light" ? "black" : "white"}
      />
    </Box>
  );
}

function App() {
  return (
    <Center w="100%" h="100vh" justifyContent="center" alignItems="center">
      <Box bg="gray.100" w="25%" m="auto" p="30" borderRadius="4">
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
  );
}

export default App;
