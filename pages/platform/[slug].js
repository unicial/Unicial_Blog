import Header from "../../components/Header/Header";
import TopTab from "../../components/TopTab/TopTab";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import SocialLinkBlock from "../../components/SocialLinkBlock/SocialLinkBlock";
import Footer from "../../components/Footer/Footer";
// -----------
import BlogDetailHeader from "../../components/BlogDetail/BlogDetailHeader/BlogDetailHeader";
import BlogDetailBody from "../../components/BlogDetail/BlogDetailBody/BlogDetailBody";
import BlogDetailFooter from "../../components/BlogDetail/BlogDetailFooter/BlogDetailFooter";
import { getAllArticle } from "../../lib";

import {
  getPlatformBySlug,
  getMorePlatform,
  getAllPlatformWithSlug,
} from "../../lib";
import { useAppDispatch } from "../../store/hooks";
import { fetchAllData } from "../../store/AllArticles";
import Alert from "../../components/Base/Alert";

export async function getStaticPaths() {
  const allPlatforms = await getAllPlatformWithSlug();
  return {
    paths: allPlatforms?.map(({ slug }) => `/platform/${slug}`) ?? [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let promises = [],
    entrieRes = [];
  let ResplatformDetail = [],
    ResmorePlatforms = [],
    ResallArticle = [];

  const platformDetail = getPlatformBySlug(params.slug);
  const morePlatforms = getMorePlatform(params.slug);
  const allArticle = getAllArticle();

  promises.push(platformDetail, morePlatforms, allArticle);
  entrieRes = await Promise.all(promises);

  ResplatformDetail = entrieRes[0];
  ResmorePlatforms = entrieRes[1];
  ResallArticle = entrieRes[2];

  return {
    props: {
      ResplatformDetail: ResplatformDetail ? ResplatformDetail : null,
      ResmorePlatforms: ResmorePlatforms ? ResmorePlatforms : null,
      ResallArticle: ResallArticle ? ResallArticle : null,
    },
    revalidate: 1,
  };
}

export default function PlatformDetail({
  ResplatformDetail,
  ResmorePlatforms,
  ResallArticle,
}) {
  const dispatch = useAppDispatch();
  dispatch(fetchAllData(ResallArticle?.all));
  return (
    <>
      <Header />
      <TopTab />
      <div className="c-blogDetail-root">
        <BlogDetailHeader
          contentType="PLATFORM"
          title={ResplatformDetail?.fields.title}
          slug={ResplatformDetail?.fields.slug}
          description={ResplatformDetail?.fields.description}
          date={ResplatformDetail?.fields.date}
          coverImage={ResplatformDetail?.fields.coverImage.fields.file.url}
        />
        <BlogDetailBody content={ResplatformDetail?.fields.content} />
        <BlogDetailFooter morePosts={ResmorePlatforms} />
      </div>
      <NewsLetter />
      <SocialLinkBlock />
      <Footer />
      <Alert />
    </>
  );
}
