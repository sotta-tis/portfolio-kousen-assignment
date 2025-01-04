import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useRouter } from "next/router";

// 回転アニメーションを定義
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Home: React.FC = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  const router = useRouter();

  const skills = [
    "Web Development",
    "IoT Development",
    "Control Systems Design",
    "Competitive Programming",
    "Data Analysis",
    "Machine Learning Modeling",
    "Mechanical Design",
    "Project Management",
  ];

  const logos = [
    "css",
    "html",
    "javascipt",
    "typescript",
    "react",
    "php",
    "laravel",
    "docker",
    "c++",
    "tensorflow",
    "python",
  ];
  return (
    <Flex direction="column" w="100%" h="auto">
      {/* about me */}
      <Flex p="5" bg="orange.600" direction="column" alignItems="center">
        {/* タイトル */}
        <Box p="3" bg="rgba(255, 240, 220, 1)" w="80%" borderRadius="50px">
          <Box>
            <Text
              textAlign="center"
              fontSize="4xl"
              fontWeight="bold"
              color="black"
            >
              Skills
            </Text>
          </Box>
        </Box>
        <Flex wrap="wrap" w="80%" p={4}>
          {skills.map((skill, index) => (
            <Flex
              key={index}
              direction="column"
              bg="rgba(255, 240, 220, 1)"
              height="auto"
              width={{ md: "48%", base: "100%" }}
              borderRadius="25px"
              m="5px"
            >
              <Text alignSelf="center" m="3" fontSize="2xl">
                {skill}
              </Text>
            </Flex>
          ))}
        </Flex>
        <Flex wrap="wrap" w="100%" p={4} justifyContent="center" gap={4}>
          {logos.map((src, index) => (
            <Flex
              key={index}
              w={{ base: "30%", md: "20%" }}
              h="auto"
              overflow="hidden"
              borderRadius="10px"
              boxShadow="md"
              bg="white"
            >
              <Image
                src={`${basePath}/${src}.png`}
                alt={`Image ${index + 1}`}
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </Flex>
          ))}
        </Flex>
      </Flex>

      {/* 戻る */}
      <Box
        bg="orange.600"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={4}
        overflow="hidden"
        flexWrap="wrap"
        zIndex={2}
        p="20"
      >
        {/* ボタン */}
        <Button
          onClick={() => router.push("/")}
          w="80%"
          h="auto"
          borderRadius="10px"
          fontSize="3xl"
          bg="rgba(255, 240, 220, 1)"
          _hover={{ bg: "rgba(255, 230, 200, 1)" }}
        >
          <Box p="5" color="black" fontWeight="bold">
            Back to Top
          </Box>
        </Button>
      </Box>
    </Flex>
  );
};

export default Home;
