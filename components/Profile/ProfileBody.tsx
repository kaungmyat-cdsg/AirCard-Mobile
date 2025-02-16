import React from "react";
import { Box, Avatar, Text, VStack, Button, Center } from "native-base";
import { Appbar } from "react-native-paper";

export function ProfileBody() {
  return (
    <Center style={{ gap: 10 }} bg="coolGray.100">
      <Appbar.Header style={{ elevation: 10, width: "100%" }}>
        <Appbar.Content title="Profile" />
      </Appbar.Header>
      <Box
        w="90%"
        // maxW="400"
        p="5"
        bg="white"
        shadow="2"
        rounded="lg"
        alignItems="center"
      >
        {/* Avatar Section */}
        <Avatar
          size="xl"
          source={{
            uri: "https://i.pravatar.cc/150",
          }}
          mb="4"
        >
          AB
        </Avatar>
        <Text fontSize="lg" color="primary.400" fontWeight="bold">
          John Doe
        </Text>
        <Text fontSize="sm" color="gray.500" mb="4">
          johndoe@example.com
        </Text>

        {/* Details Section */}
        <VStack space={3} w="100%" mt="4">
          <Box bg="coolGray.50" p="4" rounded="md">
            <Text fontSize="md" color="primary.400" fontWeight="semibold">
              Role: Developer
            </Text>
          </Box>
          <Box bg="coolGray.50" p="4" rounded="md">
            <Text fontSize="md" color="primary.400" fontWeight="semibold">
              Location: San Francisco
            </Text>
          </Box>
        </VStack>

        {/* Action Buttons */}
        <VStack space={2} mt="6" w="100%">
          <Button
            variant="subtle"
            size="md"
            rounded="full"
            colorScheme="primary"
          >
            Edit Profile
          </Button>
          <Button
            rounded="full"
            size="md"
            variant="outline"
            colorScheme="primary"
          >
            Logout
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
