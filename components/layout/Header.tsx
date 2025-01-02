import React, { useEffect, useState } from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Header: React.FC = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={100}
      bg={isScrolled ? "rgba(255, 240, 220, 0.9)" : "rgba(10, 25, 47, 0.9)"}
      color={isScrolled ? "navy.900" : "white"}
      boxShadow={isScrolled ? "sm" : "none"}
      backdropFilter="blur(10px)"
      transition="background-color 0.3s, color 0.3s, box-shadow 0.3s"
      px={6}
      py={4}
      overflow="hidden"
    >
      <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
        {/* 歯車部分 */}
        <Box position="relative" width="150px" height="50px" overflow="hidden">
          <Box
            position="absolute"
            top="0"
            left="0"
            width={12}
            height={12}
            transform={`rotate(${scrollY * 0.5}deg)`}
            transition="transform 0.1s linear"
          >
            <img
              src={`${basePath}/gear.svg`}
              alt="Rotating gear 1"
              style={{
                width: "100%",
                height: "100%",
                fill: "orange",
              }}
            />
          </Box>
          <Box
            position="absolute"
            top="15px"
            left="45px"
            width={12}
            height={12}
            transform={`rotate(-${scrollY * 0.5}deg)`}
            transition="transform 0.1s linear"
          >
            <img
              src={`${basePath}/gear.svg`}
              alt="Rotating gear 2"
              style={{
                width: "100%",
                height: "100%",
                fill: "orange",
              }}
            />
          </Box>
          <Box
            position="absolute"
            top="0"
            left="90px"
            width={12}
            height={12}
            transform={`rotate(${scrollY * 0.5}deg)`}
            transition="transform 0.1s linear"
          >
            <img
              src={`${basePath}/gear.svg`}
              alt="Rotating gear 3"
              style={{
                width: "100%",
                height: "100%",
                fill: "orange",
              }}
            />
          </Box>
        </Box>

        {/* ナビゲーション */}
        <Flex as="nav" gap={6}>
          <Link
            href="#home"
            fontWeight="medium"
            color={isScrolled ? "navy.900" : "white"}
            _hover={{ textDecoration: "none", color: "orange.300" }}
          >
            Home
          </Link>
          <Link
            href="#about"
            fontWeight="medium"
            color={isScrolled ? "navy.900" : "white"}
            _hover={{ textDecoration: "none", color: "orange.300" }}
          >
            About
          </Link>
          <Link
            href="#projects"
            fontWeight="medium"
            color={isScrolled ? "navy.900" : "white"}
            _hover={{ textDecoration: "none", color: "orange.300" }}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            fontWeight="medium"
            color={isScrolled ? "navy.900" : "white"}
            _hover={{ textDecoration: "none", color: "orange.300" }}
          >
            Contact
          </Link>
        </Flex>

        <Flex gap={4}>
          <Link
            href="https://github.com/sotta-tis"
            color={isScrolled ? "navy.900" : "white"}
            _hover={{ color: "orange.300" }}
          >
            <AiFillGithub size="24px" />
          </Link>
          <Link
            href="https://instagram.com/sotta_tis"
            color={isScrolled ? "navy.900" : "white"}
            _hover={{ color: "orange.300" }}
          >
            <AiFillInstagram size="24px" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
