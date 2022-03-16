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
    getTechnologyBySlug,
    getMoreTechnology,
    getAllTechnologyWithSlug
} from "../../lib";

export async function getStaticPaths() {
    const allTechnology = await getAllTechnologyWithSlug();
    return {
        paths: allTechnology?.map(({ slug }) => `/technology/${slug}`) ?? [],
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const technologyDetail = await getTechnologyBySlug(params.slug);
    const moreTechnology = await getMoreTechnology(params.slug);
    return {
        props: {
            technologyDetail: technologyDetail ? technologyDetail : null,
            moreTechnology: moreTechnology ? moreTechnology : null,
        },
        revalidate: 1,
    };
}

export default function TechnologyDetail({ technologyDetail, moreTechnology }) {
    return (
        <>
            <Header />
            <TopTab />
            <div className="c-blogDetail-root">
                <BlogDetailHeader
                    contentType="TECHNOLOGY"
                    title={technologyDetail?.fields.title}
                    slug={technologyDetail?.fields.slug}
                    description={technologyDetail?.fields.description}
                    date={technologyDetail?.fields.date}
                    coverImage={technologyDetail?.fields.coverImage.fields.file.url}
                />
                <BlogDetailBody content={technologyDetail?.fields.content} />
                <BlogDetailFooter morePosts={moreTechnology} />
            </div>
            <NewsLetter />
            <SocialLinkBlock />
            <Footer />
        </>
    );
}
