import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Layout({ children, title, description, keywords }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
}

Layout.defaultProps = {
  title: "GameShop | Your Everything Game Place",
  description: "Get all your gaming accessories from one place",
  keywords: "gaming, consoles, xbox, ps5, ps4, gaming headphones",
};
