import BlogDetailHeader from "../../components/BlogDetail/BlogDetailHeader/BlogDetailHeader";
import BlogDetailBody from "../../components/BlogDetail/BlogDetailBody/BlogDetailBody";
import BlogDetailFooter from "../../components/BlogDetail/BlogDetailFooter/BlogDetailFooter";

export default function BlogDetail() {
  return (
    <>
      <div className="c-blogDetail-root">
        <BlogDetailHeader />
        <BlogDetailBody />
        <BlogDetailFooter />
      </div>
    </>
  );
}
