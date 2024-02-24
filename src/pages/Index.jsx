import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, Stack, Text, useToast } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const fetchSiteChanges = (url) => {
  // Mock function to simulate a backend request and the saving of website's code
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // This is where the actual network request logic would go
      // For demonstration purposes, we resolve the promise with a mock response
      // indicating that code changes have been saved (simulation)
      resolve(`Mock code changes for ${url} have been saved and can be viewed.`);
    }, 2000);
  });
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
      .then((changes) => {
        toast({
          title: "Changes Found",
          description: changes,
          status: "success",
          duration: 3000,
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
        Website Change Explorer
      </Heading>

      <Box p={6} borderWidth="1px" borderRadius="lg" boxShadow="md">
        <Stack spacing={4}>
          <Text>Enter the URL of the website you want to track:</Text>
          <Input placeholder="https://example.com" value={url} onChange={handleUrlChange} />
          <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={handleExploreChanges}>
            Explore Changes
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Index;
