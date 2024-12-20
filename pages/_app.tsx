import React from "react";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import "../styles/globals.css"; // グローバルCSS

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      {/* 各ページのコンテンツをここでレンダリング */}
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
