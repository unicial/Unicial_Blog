import Header from "../../components/Header/Header";
import TopTab from "../../components/TopTab/TopTab";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import SocialLinkBlock from "../../components/SocialLinkBlock/SocialLinkBlock";
import Footer from "../../components/Footer/Footer";
// -----------
import BlogDetailHeader from "../../components/BlogDetail/BlogDetailHeader/BlogDetailHeader";
import BlogDetailBody from "../../components/BlogDetail/BlogDetailBody/BlogDetailBody";
import BlogDetailFooter from "../../components/BlogDetail/BlogDetailFooter/BlogDetailFooter";

import {
  getTutorialsBySlug,
  getMoreTutorials,
  getAllTutorialWithSlug,
} from "../../lib";
import { getAllArticle } from "../../lib";
import { useAppDispatch } from "../../store/hooks";
import { fetchAllData } from "../../store/AllArticles";
import Alert from "../../components/Base/Alert";

export async function getStaticPaths() {
  const allTutorials = await getAllTutorialWithSlug();
  return {
    paths: allTutorials?.map(({ slug }) => `/tutorials/${slug}`) ?? [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let promises = [],
    entrieRes = [];
  let RestutorialDetail = [],
    Resmoretutorial = [],
    ResallArticle = [];

  const tutorialDetail = getTutorialsBySlug(params.slug);
  const moreTutorials = getMoreTutorials(params.slug);
  const allArticle = getAllArticle();

  promises.push(tutorialDetail, moreTutorials, allArticle);
  entrieRes = await Promise.all(promises);
  RestutorialDetail = entrieRes[0];
  Resmoretutorial = entrieRes[1];
  ResallArticle = entrieRes[2];

  return {
    props: {
      RestutorialDetail: RestutorialDetail ? RestutorialDetail : null,
      Resmoretutorial: Resmoretutorial ? Resmoretutorial : null,
      ResallArticle: ResallArticle ? ResallArticle : null,
    },
    revalidate: 1,
  };
}

export default function ProjectDetail({
  RestutorialDetail,
  Resmoretutorial,
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
          contentType="TUTORIAL"
          title={RestutorialDetail?.fields.title}
          slug={RestutorialDetail?.fields.slug}
          description={RestutorialDetail?.fields.description}
          date={RestutorialDetail?.fields.date}
          coverImage={RestutorialDetail?.fields.coverImage.fields.file.url}
        />
        <BlogDetailBody content={RestutorialDetail?.fields.content} />
        <BlogDetailFooter morePosts={Resmoretutorial} />
      </div>
      <NewsLetter />
      <SocialLinkBlock />
      <Footer />
      <Alert />
    </>
  );
}
