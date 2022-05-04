import Head from "next/head";
import Header from "../Header/Header";
import TopTab from "../TopTab/TopTab";
import NewsLetter from "../NewsLetter/NewsLetter";
import SocialLinkBlock from "../SocialLinkBlock/SocialLinkBlock";
import Footer from "../Footer/Footer";
import Alert from "../../components/Base/Alert";

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>Unicial Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          property="og:title"
          content={title ? title : "Blog"}
          key="og:title"
        />
        <meta
          property="og:description"
          content={
            description
              ? description
              : "This is a statically generated blog example using Next.js and Contentful."
          }
          key="og:description"
        />
        <link rel="icon" href="/logo.svg" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>
      <Header />
      <TopTab />
      <main>{children}</main>
      <NewsLetter />
      <SocialLinkBlock />
      <Footer />
      <Alert />
    </>
  );
};
export default Layout;
