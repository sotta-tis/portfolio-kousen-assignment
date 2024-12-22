import React from "react";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import "../styles/globals.css"; // グローバルCSS

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <Layout>
        {/* 各ページのコンテンツをここでレンダリング */}
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
