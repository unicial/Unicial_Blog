import { useRouter } from "next/router";
import ErrorPage from "next/error";
// import Layout
// ---------
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import TopTab from "../../components/TopTab/TopTab";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import SocialLinkBlock from "../../components/SocialLinkBlock/SocialLinkBlock";
import Footer from "../../components/Footer/Footer";
// -----------
import BlogDetailHeader from "../../components/BlogDetail/BlogDetailHeader/BlogDetailHeader";
import BlogDetailBody from "../../components/BlogDetail/BlogDetailBody/BlogDetailBody";
import BlogDetailFooter from "../../components/BlogDetail/BlogDetailFooter/BlogDetailFooter";

import { getPostBySlug, getMorePosts, getAllPostsWithSlug } from "../../lib";

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/announcements/${slug}`) ?? [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  console.log("params", params);
  const postDetail = await getPostBySlug(params.slug);
  const morePosts = await getMorePosts(params.slug);
  return {
    props: {
      postDetail: postDetail ? postDetail : null,
      morePosts: morePosts ? morePosts : null,
    },
    revalidate: 1,
  };
}

export default function BlogDetail({ postDetail, morePosts }) {
  // const [postDetail, setPostDetail] = useState();
  // const [morePosts, setMorePosts] = useState();

  // useEffect(() => {
  //   getPostBySlug(params.slug).then((e) => {
  //     setPostDetail(e);
  //   });
  //   getMorePosts(params.slug).then((e) => {
  //     setMorePosts(e);
  //   })
  // });

  console.log("post detail", postDetail);
  return (
    <>
      <Header />
      <TopTab />
      <div className="c-blogDetail-root">
        <BlogDetailHeader
          title={postDetail?.fields.title}
          slug={postDetail?.fields.slug}
          description={postDetail?.fields.description}
          date={postDetail?.fields.date}
          coverImage={postDetail?.fields.coverImage.fields.file.url}
        />
        <BlogDetailBody content={postDetail?.fields.content} />
        <BlogDetailFooter morePosts={morePosts} />
      </div>
      <NewsLetter />
      <SocialLinkBlock />
      <Footer />
    </>
  );
}
