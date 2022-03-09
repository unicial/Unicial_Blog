import { useRouter } from "next/router";
import ErrorPage from "next/error";
// import Layout
// ---------
import Header from "../../components/Header/Header";
import TopTab from "../../components/TopTab/TopTab";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import SocialLinkBlock from "../../components/SocialLinkBlock/SocialLinkBlock";
import Footer from "../../components/Footer/Footer";
// -----------
import BlogDetailHeader from "../../components/BlogDetail/BlogDetailHeader/BlogDetailHeader";
import BlogDetailBody from "../../components/BlogDetail/BlogDetailBody/BlogDetailBody";
import BlogDetailFooter from "../../components/BlogDetail/BlogDetailFooter/BlogDetailFooter";

export default function BlogDetail() {
  return (
    <>
      <Header />
      <TopTab />
      <div className="c-blogDetail-root">
        <BlogDetailHeader />
        <BlogDetailBody />
        <BlogDetailFooter />
      </div>
      <NewsLetter />
      <SocialLinkBlock />
      <Footer />
    </>
  );
}
