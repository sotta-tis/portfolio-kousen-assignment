/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // 静的サイトのエクスポートを有効化
  basePath: "/portfolio-kousen-assignment", // GitHub Pages用 (リポジトリ名に置き換え)
  assetPrefix: "/portfolio-kousen-assignment/", // GitHub Pages用 (リポジトリ名に置き換え)
};

module.exports = nextConfig;
