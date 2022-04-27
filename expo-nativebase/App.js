import React, { useState, useEffect, useContext, forwardRef } from "react";
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
  CheckIcon,
  FormLabel,
  Input,
  FormHelperText,
  Select,
  Button,
  Box,
  Code,
  Stack,
  WarningOutlineIcon,
  Checkbox,
} from "./nb";
import NativeBaseIcon from "./components/NativeBaseIcon";
import CheckboxExample from "./CheckboxExample";
import TestKeyboard from "./TestKeyboard";
import MyExample from "./MyExample";
import { View } from "react-native";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

// import { usePropsResolution } from '../../../hooks/useThemeProps';
import { usePropsResolution } from "./nb/hooks/useThemeProps";
import { HybridContext } from "./nb/core/hybrid-overlay/Context";

// extend the theme
export const theme = extendTheme({ config });

const INTERESTS = [
  "Acting",
  "Architecture",
  "Art",
  "Astronomy",
  "Automotive",
  "Aviation",
  "Beauty",
  "Business",
  "Comedy",
  "Construction",
  "Dance",
  "Education",
  "Entertainment",
  "Travel",
];

const TestBox = function (props) {
  console.log("**** render test box");
  return <div>Hello div</div>;

  console.log("**** Test box render here");
  // usePropsResolution("Box", props);
  // const context = useContext(HybridContext);
  // console.log("Test box render here ---> context", context);
  return (
    <View
      style={{
        heigth: 100,
        width: 100,
        padding: 20,
        backgroundColor: "red",
      }}
    />
  );
};

const MTestBox = React.memo(forwardRef(TestBox), () => {
  return false;
});

const TestProvider = React.createContext("test");
function TestProviderComponent() {
  console.log("**** test provider");
  return <TestProvider.Provider></TestProvider.Provider>;
}

const MemoTestProviderComponent = React.memo(TestProviderComponent);

export default function App() {
  const [state, setState] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setState(!state);
  //   }, 3000);
  // }, []);

  console.log("**** app.js");

  const newTheme = extendTheme({
    config: {
      initialColorMode: "light",
    },
  });

  const themeJSON = require("./theme.json");

  console.log("theme json", themeJSON);
  const mytheme = extendTheme(themeJSON);

  const [groupValues, setGroupValues] = React.useState([]);

  // return (
  //   <NativeBaseProvider theme={mytheme}>
  //     <TestKeyboard />
  //   </NativeBaseProvider>
  // );
  return (
    <NativeBaseProvider theme={mytheme}>
      <Center flex={1} px="3">
        <>
          {/* <Checkbox.Group
            onChange={setGroupValues}
            value={groupValues}
            accessibilityLabel="choose numbers"
          >
            {INTERESTS.map((interest) => (
              <Checkbox key={interest} value={interest} my="1">
                {interest}
              </Checkbox>
            ))}
          </Checkbox.Group> */}
          <Button>Button</Button>
        </>
      </Center>
    </NativeBaseProvider>
  );
  // return "hello";
  let [service, setService] = React.useState("");

  return (
    <>
      <NativeBaseProvider theme={newTheme}>
        <Box w="3/4" maxW="300">
          <Select
            isDisabled
            _disabled={{ bg: "red.200" }}
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
        </Box>
        {/* <Box>hello</Box> */}
        {/* <Stack
          // direction={{ base: "column", md: "row" }}
          // direction={["column", "row", "row"]}
          direction={"row"}
          space="4"
        >
          <Box w="20" h="20" bg="red.500">
            hello
          </Box>
          <Box w="20" h="20" bg="blue.500">
            hello
          </Box>
        </Stack> */}

        {/* <Checkbox>hello</Checkbox> */}
      </NativeBaseProvider>
      {/* <CheckboxExample /> */}
      {/* <MTestBox>
        <MTestBox />
      </MTestBox> */}
      {/* <Box p={2} bg="red.300">
        <Box bg="red.800">
          <Box bg="red.700" />
        </Box>
        <Box bg="red.700"></Box>
        <Box bg="red.600"></Box>
      </Box>
      {/* <Box p={2} bg={state ? "red.300" : "blue.300"} /> */}
      {/* <Box p={2} bg="red.200" />
      <Box p={2} bg="red.200" /> */}
      {/* <MTestBox
        w="100"
        h="100"
        bg="red.200"
        justifyContent="center"
        alignItems="center"
      ></MTestBox> */}
      {/* <Box w="100%" h="100vh" justifyContent="center" alignItems="center">
        Text here
      </Box>
      <Box w="100%" h="100vh" justifyContent="center" alignItems="center">
        Text here
      </Box>
      <Box w="100%" h="100vh" justifyContent="center" alignItems="center">
        Text here
      </Box>
      <Box w="100%" h="100vh" justifyContent="center" alignItems="center">
        Text here
      </Box>
      <Box w="100%" h="100vh" justifyContent="center" alignItems="center">
        Text here
      </Box> */}
    </>
  );
}
// export function App1() {
//   return (
//     <NativeBaseProvider>
//       <Box _dark={{ bg: "gray.900" }} bg="white" h="100vh" w="100vw">
//         <ToggleDarkMode />
//         <Center w="100%" h="100vh" justifyContent="center" alignItems="center">
//           <Box bg="gray.100" w="25%" m="auto" p="30" borderRadius="4">
//             <Box w="100%" h="100%">
//               <FormControl>
//                 <Stack mx="4">
//                   <FormControl.Label _dark={{ _text: { color: "gray.800" } }}>
//                     Email
//                   </FormControl.Label>
//                   <Input type="email" placeholder="Email" />
//                 </Stack>
//               </FormControl>

//               <FormControl isRequired mt="8">
//                 <Stack mx="4">
//                   <FormControl.Label _dark={{ _text: { color: "gray.800" } }}>
//                     Password
//                   </FormControl.Label>
//                   <Input type="password" placeholder="password" />
//                   <FormControl.HelperText>
//                     Must be atleast 6 characters.
//                   </FormControl.HelperText>
//                   <FormControl.ErrorMessage
//                     leftIcon={<WarningOutlineIcon size="xs" />}
//                   >
//                     Atleast 6 characters are required.
//                   </FormControl.ErrorMessage>
//                 </Stack>
//               </FormControl>
//               <Center mt="8">
//                 <Button
//                   type="submit"
//                   variant="outline"
//                   px="10"
//                   colorScheme="blue"
//                   mt="8"
//                   mx="auto"
//                 >
//                   Submit
//                 </Button>
//               </Center>
//             </Box>
//           </Box>
//         </Center>
//       </Box>
//     </NativeBaseProvider>
//   );
// }

// Color Switch Component
// function ToggleDarkMode() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <HStack space={2} alignItems="center">
//       <Text _dark={{ color: "white" }} color="black">
//         Dark
//       </Text>
//       <Switch
//         isChecked={colorMode === "light" ? true : false}
//         onToggle={toggleColorMode}
//         aria-label={
//           colorMode === "light" ? "switch to dark mode" : "switch to light mode"
//         }
//       />
//       <Text>Light</Text>
//     </HStack>
//   );
// }
