import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, Stack, Text, useToast } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const fetchSiteChanges = async (url) => {
  try {
    const response = await fetch(url); // Fetch API used here
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); // Assuming the server returns JSON data
    return `Tracking initiated for ${url}. Changes will be monitored and reported.`;
  } catch (error) {
    throw new Error(`Network request failed: ${error.message}`);
  }
};

const Index = () => {
  const [url, setUrl] = useState("");
  const toast = useToast();

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleExploreChanges = () => {
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a URL to explore.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulate fetching site changes from a backend
    fetchSiteChanges(url)
      .then((message) => {
        toast({
          title: "Tracking Initiated",
          description: `The site will be tracked for the next 24 hours. Changes will be replicated and made available for download.`,
          status: "info",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Website Monitoring Tool
      </Heading>

      <Box p={6} borderWidth="1px" borderRadius="lg" boxShadow="md">
        <Stack spacing={4}>
          <Text>Enter the URL of the website you want to monitor:</Text>
          <Input placeholder="https://example.com" value={url} onChange={handleUrlChange} />
          <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={handleExploreChanges} mr={2}>
            Monitor Changes
          </Button>
          <Button leftIcon={<FaSearch />} colorScheme="orange">
            Start Monitoring
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Index;
