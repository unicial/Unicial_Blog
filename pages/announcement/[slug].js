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

import { getAnnouncementBySlug, getMoreAnnouncement, getAllAnnouncementWithSlug } from "../../lib";

export async function getStaticPaths() {
  const allAnnouncements = await getAllAnnouncementWithSlug();
  return {
    paths: allAnnouncements?.map(({ slug }) => `/announcement/${slug}`) ?? [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  console.log("params", params);
  const announcementDetail = await getAnnouncementBySlug(params.slug);
  const moreAnnouncements = await getMoreAnnouncement(params.slug);
  return {
    props: {
      announcementDetail: announcementDetail ? announcementDetail : null,
      moreAnnouncements: moreAnnouncements ? moreAnnouncements : null,
    },
    revalidate: 1,
  };
}

export default function BlogDetail({ announcementDetail, moreAnnouncements }) {

  console.log("post detail", announcementDetail);
  return (
    <>
      <Header />
      <TopTab />
      <div className="c-blogDetail-root">
        <BlogDetailHeader
          title={announcementDetail?.fields.title}
          slug={announcementDetail?.fields.slug}
          description={announcementDetail?.fields.description}
          date={announcementDetail?.fields.date}
          coverImage={announcementDetail?.fields.coverImage.fields.file.url}
        />
        <BlogDetailBody content={announcementDetail?.fields.content} />
        <BlogDetailFooter morePosts={moreAnnouncements} />
      </div>
      <NewsLetter />
      <SocialLinkBlock />
      <Footer />
    </>
  );
}
