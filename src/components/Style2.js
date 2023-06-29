import React, { useState } from 'react';
import {Box, VStack, Text, HStack, Flex, Button} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import Logo from "../assets/png-clipart-google-docs-spreadsheet-computer-icons-g-suite-google-angle-text.png";

export default function Style2() {
    const [isGoogleConnected, setIsGoogleConnected] = useState(false);

    const handleConnect = () => {
        setIsGoogleConnected(true);
    };

    return (
        <Box
            w={['full', 'md']}
            p={[8, 10]}
            mt={[20, "18vh"]}
            mx="auto"
            border={["none", "1px"]}
            borderColor={["", "gray.300"]}
            borderRadius={10}
            position="relative"
        >
            <Flex w="full" alignItems="center" justifyContent="space-between">
                <HStack alignItems="center">
                    <img
                        src={Logo}
                        alt="Google Spreadsheet Logo"
                        width="25px"
                        height="25px"
                    />
                    <Text fontWeight="bold" mt={3} mb={4}>Export To Google Spreadsheet</Text>
                </HStack>
                <DeleteIcon boxSize={5} marginLeft="auto" />
            </Flex>

            {isGoogleConnected ? (
                <Text mt={4} color="green.500">Connect Flow Node to Import to Google Spreadsheet</Text>
            ) : (
                <>
                <VStack mt={4} spacing={3} alignItems="center">
                    <Text>Please connect Google Account to use this block</Text>
                </VStack>
                <Button justifyContent="center" mt={4} onClick={handleConnect}>Connect</Button>
                </>

            )}

        </Box>
    );
}
