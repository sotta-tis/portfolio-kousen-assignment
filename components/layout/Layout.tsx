import Header from "./Header";
import Footer from "./Footer";
import LoadingAnimation from "./LoadingAnimation";
import Head from "next/head";
import { useEffect, useState } from "react";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // ローディング : 初期状態はtrue
  const [isLoading, setIsLoading] = useState(true);
  const [loadingDuration, setLoadingDuration] = useState(1000);

  useEffect(() => {
    // 訪問したことがあるかをチェック
    const isVisited = sessionStorage.getItem("isVisited");

    // 訪問済みであればOpeningは表示しない
    if (!isVisited) {
      setLoadingDuration(3000);
      sessionStorage.setItem("isVisited", "true");
    }

    const timer = setTimeout(() => setIsLoading(false), loadingDuration);
    return () => clearTimeout(timer);
  }, [loadingDuration]);

  return (
    <>
      <Head>
        <title>Sota Toshizumi Portfolio</title>
        <meta name="description" content="Sota Toshziumi Portfolio" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </Head>
      {isLoading ? (
        <LoadingAnimation duration={0} />
      ) : (
        <main className="flex-grow w-auto">
          <Header />
          {children}
          <Footer />
        </main>
      )}
    </>
  );
};

export default Layout;
