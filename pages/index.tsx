import { Box, Flex, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

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
  return (
    <Flex direction="column" w="100%" h="auto">
      {/* セクション1 */}
      <Box
        display="flex"
        position="relative"
        bg="rgba(10, 25, 47, 0.9)"
        color="navy.900"
        h="80vh"
        alignItems="start"
        justifyContent="center"
        zIndex={1}
        overflow="hidden"
      >
        <Flex direction="column">
          <Text fontFamily={"Outfit,Lato,sans-serif"} fontSize={"6xl"}>
            Sota Toshizumi
          </Text>
          <Text fontFamily={"Outfit,Lato,sans-serif"} fontSize={"6xl"}>
            Portfolio
          </Text>
        </Flex>
        {/* セクション間のSVG */}
        <Box
          position="absolute"
          top="50%"
          animation={`${rotate} 20s linear infinite`}
          w="auto"
          h="100%"
          zIndex={1}
        >
          <img
            src={`${basePath}/moon.svg`} // publicディレクトリ内のファイルパス
            alt="Wave"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Box>

      {/* セクション2 */}
      <Box
        bg="green.500"
        color="white"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex={2}
      >
        <Text fontSize="4xl" fontWeight="bold">
          セクション2
        </Text>
      </Box>

      {/* セクション3 */}
      <Box
        bg="purple.500"
        color="white"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex={2}
      >
        <Text fontSize="4xl" fontWeight="bold">
          セクション3
        </Text>
      </Box>
    </Flex>
  );
};

export default Home;
