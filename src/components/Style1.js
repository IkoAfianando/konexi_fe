import React, {useState} from 'react';
import {Box, VStack, Text, HStack, Flex, CloseButton} from "@chakra-ui/react";
import {DeleteIcon} from "@chakra-ui/icons";
import {FormControl, FormLabel, Button, Select, Input} from "@chakra-ui/react";
import Logo from "../assets/png-clipart-google-docs-spreadsheet-computer-icons-g-suite-google-angle-text.png";

export default function Style1() {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
        const fileList = Array.from(event.target.files);
        setSelectedFiles(fileList);
    };

    const handleRemoveFile = (index) => {
        setSelectedFiles((prevFiles) => {
            const updatedFiles = [...prevFiles];
            updatedFiles.splice(index, 1);
            return updatedFiles;
        });
    };

    const renderFileTabs = () => {
        return (
            <Select
                placeholder="Select File"
                onChange={handleFileTabChange}
                size="sm"
                style={{position: 'absolute', opacity: 0, width: '100%', height: '100%', cursor: 'pointer'}}
            >
                {selectedFiles.map((file, index) => (
                    <option key={index} value={index}>
                        Tab {index + 1}
                    </option>
                ))}
            </Select>
        );
    };

    const handleFileTabChange = (event) => {
        const selectedIndex = event.target.value;
        console.log(selectedFiles[selectedIndex]);
    };

    return (<Box
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
            <DeleteIcon boxSize={5} marginLeft="auto"/>
        </Flex>
        <br/>
        <FormLabel fontWeight="bold">Google Account</FormLabel>


        <VStack spacing={4} align="flex-start" w="full">
            <FormControl>
                <Select placeholder="Account Name">
                    <option fontWeight="bold" value="option1">Option 1</option>
                    <option fontWeight="bold" value="option2">Option 2</option>
                    <option fontWeight="bold" value="option3">Option 3</option>
                </Select>
            </FormControl>

            <FormControl>
                <FormLabel fontWeight="bold">File</FormLabel>
                <Input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    size="sm"
                    style={{position: 'relative', zIndex: 1, opacity: 0, cursor: 'pointer'}}
                />
                <Box
                    border="1px"
                    borderColor="gray.300"
                    borderRadius="md"
                    py={2}
                    px={3}
                    width="100%"
                    position="relative"
                >
                    {selectedFiles.length > 0 && (
                        <Text fontSize="sm" color="gray.500" mb={1}>
                            Tab {selectedFiles.length}
                        </Text>
                    )}
                    {selectedFiles.map((file, index) => (
                        <Flex key={index} alignItems="center">
                            <Text>{file.name}</Text>
                            <CloseButton onClick={() => handleRemoveFile(index)} size="sm"/>
                        </Flex>
                    ))}
                    {renderFileTabs()}
                </Box>
            </FormControl>


        </VStack>

        <Button w="full" colorScheme="blue" mt={4}>
            Export
        </Button>
    </Box>);
}
