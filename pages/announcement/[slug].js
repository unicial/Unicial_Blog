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
import { getAllArticle } from "../../lib";

import { useAppDispatch } from "../../store/hooks";
import { fetchAllData } from "../../store/AllArticles";

export async function getStaticPaths() {
  const allAnnouncements = await getAllAnnouncementWithSlug();
  return {
    paths: allAnnouncements?.map(({ slug }) => `/announcement/${slug}`) ?? [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  console.log("params", params);
  let promises = [], entrieRes = [];
  let ResannouncementDetail = [], ResmoreAnnouncements = [], ResallArticle = [];

  const announcementDetail = getAnnouncementBySlug(params.slug);
  const moreAnnouncements = getMoreAnnouncement(params.slug);
  const allArticle = getAllArticle();
  promises.push(announcementDetail, moreAnnouncements, allArticle);
  entrieRes = await Promise.all(promises);

  ResannouncementDetail = entrieRes[0];
  ResmoreAnnouncements = entrieRes[1];
  ResallArticle = entrieRes[2];

  return {
    props: {
      ResannouncementDetail: ResannouncementDetail ? ResannouncementDetail : null,
      ResmoreAnnouncements: ResmoreAnnouncements ? ResmoreAnnouncements : null,
      ResallArticle: ResallArticle ? ResallArticle : null,
    },
    revalidate: 1,
  };
}

export default function BlogDetail({ ResannouncementDetail, ResmoreAnnouncements, ResallArticle, }) {
  console.log("slug_allarticle", ResallArticle);

  const dispatch = useAppDispatch();

  dispatch(fetchAllData(ResallArticle?.all));
  return (
    <>
      <Header />
      <TopTab />
      <div className="c-blogDetail-root">
        <BlogDetailHeader
          contentType="ANNOUNCEMENT"
          title={ResannouncementDetail?.fields.title}
          slug={ResannouncementDetail?.fields.slug}
          description={ResannouncementDetail?.fields.description}
          date={ResannouncementDetail?.fields.date}
          coverImage={ResannouncementDetail?.fields.coverImage.fields.file.url}
        />
        <BlogDetailBody content={ResannouncementDetail?.fields.content} />
        <BlogDetailFooter morePosts={ResmoreAnnouncements} />
      </div>
      <NewsLetter />
      <SocialLinkBlock />
      <Footer />
    </>
  );
}