import { Box, Flex, Text, Image, Button, Link } from "@chakra-ui/react";
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
const trust = ["html", "javascipt", "typescript", "react"];
const basic = [
  "c++",
  "python",
  "tensorflow",
  "raspberrypi",
  "typescript",
  "react",
];
const logos = ["html", "javascipt", "php", "laravel", "typescript", "react"];

const Home: React.FC = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  const router = useRouter();
  return (
    <Flex direction="column" w="100%" h="auto">
      {/* 受賞歴 */}
      <Flex
        position="relative"
        direction="column"
        bg="rgba(10, 25, 47, 0.9)"
        color="navy.900"
        alignItems="center"
        justifyContent="center"
        zIndex={1}
        overflow="hidden"
      >
        {/* タイトル */}
        <Box justifyContent="center" direction="column">
          <Text
            mt="5"
            textAlign="center"
            fontSize="4xl"
            fontWeight="bold"
            color="white"
          >
            Awards
          </Text>
          <Text
            textAlign="center"
            fontSize="md"
            fontWeight="bold"
            color="white"
          >
            - 受賞歴 ー
          </Text>
        </Box>
        <Box
          bg="rgba(255, 240, 220, 1)"
          margin="10"
          justifyContent="center"
          w="80%"
          borderRadius="20px"
        >
          <Box justifyContent="center" direction="column">
            <Text
              textAlign="center"
              fontSize="4xl"
              fontWeight="bold"
              color="black"
            >
              第33回高専プロコン競技部門 優勝
            </Text>
            <Box
              mt="5"
              mb="5"
              display="flex"
              flexDirection={{ base: "column", md: "row" }}
              justifyContent={{
                base: "center",
                md: "space-around",
              }}
              alignItems={{
                base: "center",
                md: "space-around",
              }}
            >
              <Box w="45%" m="10">
                <Text color="black" fontSize="2xl">
                  期間：約半年の開発期間
                </Text>
                <Text color="black" fontSize="2xl">
                  3名チーム
                </Text>
                <Text color="black" fontSize="lg">
                  2022年に開催された高専プログラミングコンテスト競技部門で優勝し文部科学大臣賞受賞。
                </Text>
                <Text color="black" fontSize="lg">
                  (使用技術 : C++,OpenSiv3D)
                </Text>
              </Box>
              <Link
                href="https://www.ct.omu.ac.jp/info/news/entry-16997.html"
                _hover={{ textDecoration: "none", transform: "scale(1.1)" }}
              >
                <Box
                  w="10rem"
                  h="10rem"
                  bg="rgba(10, 25, 47, 0.9)"
                  color="white"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="10px"
                  boxShadow="md"
                  _hover={{ bg: "rgba(30, 45, 67, 0.9)", boxShadow: "lg" }}
                >
                  <Text p="3" fontSize="3xl" fontWeight="bold">
                    More Detail
                  </Text>
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      </Flex>
      {/* インターンシップ */}
      <Flex
        position="relative"
        direction="column"
        bg="orange.600"
        color="navy.900"
        alignItems="center"
        justifyContent="center"
        zIndex={1}
        overflow="hidden"
      >
        {/* タイトル */}
        <Box justifyContent="center" direction="column">
          <Text
            mt="5"
            textAlign="center"
            fontSize="4xl"
            fontWeight="bold"
            color="white"
          >
            Internship
          </Text>
          <Text
            textAlign="center"
            fontSize="md"
            fontWeight="bold"
            color="white"
          >
            - インターンシップ経験 ー
          </Text>
        </Box>
        {/*　trusthub */}
        <Box
          bg="rgba(255, 240, 220, 1)"
          margin="10"
          justifyContent="center"
          w="80%"
          borderRadius="20px"
        >
          <Box justifyContent="center" direction="column">
            <Text
              mt="3"
              textAlign="center"
              fontSize="4xl"
              fontWeight="bold"
              color="black"
            >
              1Month (Webエンジニア)
            </Text>
          </Box>
          <Box
            mt="5"
            mb="5"
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={{
              base: "center",
              md: "sapce-between",
            }}
            alignItems={{
              base: "center",
              md: "sapce-betweenpace-around",
            }}
          >
            <Box w="45%" m="10">
              <Text color="black" fontSize="2xl">
                期間：1ヶ月
              </Text>
              <Text color="black" fontSize="lg">
                約20名規模のエンジニアチームで機能の修正・新サービス開発を行なった。
              </Text>
            </Box>
            <Flex wrap="wrap" w="30%" p={4} justifyContent="center" gap={4}>
              {trust.map((src, index) => (
                <Flex
                  key={index}
                  w={{ base: "30%", md: "35%" }}
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
          </Box>
        </Box>
        {/* office */}
        <Box
          bg="rgba(255, 240, 220, 1)"
          margin="10"
          justifyContent="center"
          w="80%"
          borderRadius="20px"
        >
          <Box justifyContent="center" direction="column">
            <Text
              mt="3"
              textAlign="center"
              fontSize="4xl"
              fontWeight="bold"
              color="black"
            >
              長期インターン (webエンジニア)
            </Text>
          </Box>
          <Box
            mt="5"
            mb="5"
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={{
              base: "center",
              md: "sapce-between",
            }}
            alignItems={{
              base: "center",
              md: "sapce-betweenpace-around",
            }}
          >
            <Box w="45%" m="10">
              <Text color="black" fontSize="2xl">
                期間：約1年(継続中)
              </Text>
              <Text color="black" fontSize="2xl">
                約10名規模のエンジニアチーム
              </Text>
              <Text color="black" fontSize="lg">
                自社サイト・公開サイト・社内サービスの修正,新規開発
              </Text>
            </Box>
            <Flex wrap="wrap" w="30%" p={4} justifyContent="center" gap={4}>
              {logos.map((src, index) => (
                <Flex
                  key={index}
                  w={{ base: "30%", md: "35%" }}
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
          </Box>
        </Box>

        {/* 抱月 */}
        <Box
          bg="rgba(255, 240, 220, 1)"
          margin="10"
          justifyContent="center"
          w="80%"
          borderRadius="20px"
        >
          <Box justifyContent="center" direction="column">
            <Text
              mt="3"
              textAlign="center"
              fontSize="4xl"
              fontWeight="bold"
              color="black"
            >
              1Week (海外工場実地,無給)
            </Text>
          </Box>
          <Box
            mt="5"
            mb="5"
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={{
              base: "center",
              md: "sapce-between",
            }}
            alignItems={{
              base: "center",
              md: "sapce-betweenpace-around",
            }}
          >
            <Box
              mt="5"
              mb="5"
              display="flex"
              flexDirection={{ base: "column", md: "row" }}
              justifyContent={{
                base: "center",
                md: "space-between",
              }}
              alignItems={{
                base: "center",
                md: "space-between",
              }}
            >
              <Box order={{ base: 2, md: 1 }} ml="10" w="80%">
                <Text color="black" fontSize="2xl">
                  期間：約1週間
                </Text>
                <Text color="black" fontSize="lg">
                  ベトナムホーチミンの金属加工会社でのインターンシップを経験しました。
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>

      {/* 研究 */}
      <Flex
        position="relative"
        direction="column"
        bg="yellow.400"
        color="navy.900"
        alignItems="center"
        justifyContent="center"
        zIndex={1}
        overflow="hidden"
      >
        {/* タイトル */}
        <Box justifyContent="center" direction="column">
          <Text mt="5" textAlign="center" fontSize="4xl" fontWeight="bold">
            Research project
          </Text>
          <Text textAlign="center" fontSize="md" fontWeight="bold">
            - 在学中の研究 ー
          </Text>
        </Box>
        {/* 基礎研究 */}
        <Box
          bg="rgba(255, 240, 220, 1)"
          margin="10"
          justifyContent="center"
          w="80%"
          borderRadius="20px"
        >
          <Box justifyContent="center" direction="column">
            <Text
              mt="3"
              textAlign="center"
              fontSize="4xl"
              fontWeight="bold"
              color="black"
            >
              Iotシステムの開発(高専4年)
            </Text>
          </Box>
          <Box
            mt="5"
            mb="5"
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={{
              base: "center",
              md: "sapce-between",
            }}
            alignItems={{
              base: "center",
              md: "sapce-betweenpace-around",
            }}
          >
            <Box w="45%" m="10">
              <Text color="black" fontSize="2xl">
                期間：約半年
              </Text>
              <Text color="black" fontSize="2xl">
                約5名
              </Text>
              <Text color="black" fontSize="lg">
                ソフトウェアと制御を全て開発し、
              </Text>
              <Text color="black" fontSize="lg">
                ハードウェアの設計・制作はチームで分担して開発した。
              </Text>
              <Text color="black" fontSize="md">
                Object
                detectionの転移学習、座標の線形変換、クライアント・管理者用フロントエンド、各種ハードのapiと通信のバックエンドの実装を行なった。
              </Text>
            </Box>
            <Flex wrap="wrap" w="30%" p={4} justifyContent="center" gap={4}>
              {basic.map((src, index) => (
                <Flex
                  key={index}
                  w={{ base: "30%", md: "35%" }}
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
          </Box>
        </Box>
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
