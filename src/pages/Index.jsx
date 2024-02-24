import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, Stack, Text, useToast } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

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

    // TODO: Implement the logic to explore and track changes of the website
    // For now, we just display a toast message for demonstration
    toast({
      title: "Success",
      description: `Changes for ${url} will be tracked.`,
      status: "success",
      duration: 3000,
      isClosable: true,
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
