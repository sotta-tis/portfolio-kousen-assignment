import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Sota Toshizumi Portfolio</title>
        <meta name="description" content="Sota Toshziumi Portfolio" />
      </Head>
      <main className="flex-grow w-auto">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
