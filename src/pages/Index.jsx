import { Container, VStack, Button, Box, Text, Heading, useBoolean, Center, HStack } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight, FaArrowUp, FaArrowDown, FaCar } from "react-icons/fa";

const Index = () => {
  const [isGameStarted, setIsGameStarted] = useBoolean(false);

  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={4}>
        <Heading>Car Racing Game</Heading>
        <Text>Welcome to the virtual car racing game. Use the arrow buttons to simulate driving.</Text>

        <Box borderWidth="1px" borderRadius="lg" w="100%" h="300px" bg="gray.200" position="relative">
          {isGameStarted && (
            <Box position="absolute" left="50%" top="50%" transform="translate(-50%, -50%)">
              <FaCar size="40px" />
            </Box>
          )}
          {!isGameStarted && (
            <Center h="100%">
              <Text>Press Start to play!</Text>
            </Center>
          )}
        </Box>

        <Button colorScheme="green" onClick={setIsGameStarted.toggle}>
          {isGameStarted ? "Stop Game" : "Start Game"}
        </Button>

        <HStack>
          <Button leftIcon={<FaArrowLeft />} aria-label="Move Left">
            Left
          </Button>
          <VStack>
            <Button leftIcon={<FaArrowUp />} aria-label="Move Up">
              Up
            </Button>
            <Button leftIcon={<FaArrowDown />} aria-label="Move Down">
              Down
            </Button>
          </VStack>
          <Button leftIcon={<FaArrowRight />} aria-label="Move Right">
            Right
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
