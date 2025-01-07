import Header from "./Header";
import Footer from "./Footer";
import OpeningAnimation from "./OpeningAnimation";
import Head from "next/head";
import { useEffect, useState } from "react";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // ローディング : 初期状態はtrue
  const [isLoading, setIsLoading] = useState(true);
  // OpeningAnimationの表示有無
  const [showOpening, setShowOpening] = useState(true);

  // OpeningAnimationを表示し終わったらsessionにその旨を保存
  const showedOpening = () => {
    setShowOpening(false);
    sessionStorage.setItem("isVisited", "true");
  };

  useEffect(() => {
    // 訪問したことがあるかをチェック
    const isVisited = sessionStorage.getItem("isVisited");

    // 訪問済みであればOpeningは表示しない
    if (isVisited) {
      setShowOpening(false);
    }
    // ローディングを終了
    setIsLoading(false);
  }, []);

  // ローディング中は以下を返す
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        <p>Loading...</p>
      </div>
    );
  }

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
      {showOpening ? (
        <OpeningAnimation onComplete={() => showedOpening()} />
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
