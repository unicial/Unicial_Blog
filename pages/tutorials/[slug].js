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
    getAllTutorialWithSlug
} from "../../lib";

export async function getStaticPaths() {
    const allTutorials = await getAllTutorialWithSlug();
    return {
        paths: allTutorials?.map(({ slug }) => `/tutorials/${slug}`) ?? [],
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const tutorialDetail = await getTutorialsBySlug(params.slug);
    const moreTutorials = await getMoreTutorials(params.slug);
    return {
        props: {
            tutorialDetail: tutorialDetail ? tutorialDetail : null,
            moreTutorials: moreTutorials ? moreTutorials : null,
        },
        revalidate: 1,
    };
}

export default function ProjectDetail({ tutorialDetail, moreTutorials }) {

    return (
        <>
            <Header />
            <TopTab />
            <div className="c-blogDetail-root">
                <BlogDetailHeader
                    contentType="TUTORIAL"
                    title={tutorialDetail?.fields.title}
                    slug={tutorialDetail?.fields.slug}
                    description={tutorialDetail?.fields.description}
                    date={tutorialDetail?.fields.date}
                    coverImage={tutorialDetail?.fields.coverImage.fields.file.url}
                />
                <BlogDetailBody content={tutorialDetail?.fields.content} />
                <BlogDetailFooter morePosts={moreTutorials} />
            </div>
            <NewsLetter />
            <SocialLinkBlock />
            <Footer />
        </>
    );
}
