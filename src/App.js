import React from 'react';
import {
    ChakraProvider,
    Box,
    Grid,
    theme,
} from '@chakra-ui/react';
import {ColorModeSwitcher} from './ColorModeSwitcher';
import Style1 from "./components/Style1";
import Style2 from "./components/Style2";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <ColorModeSwitcher justifySelf="flex-end"/>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" p={3}>
                    <Style1/>
                    <Style2/>
                </Grid>
            </Box>

        </ChakraProvider>
    );
}

export default App;
