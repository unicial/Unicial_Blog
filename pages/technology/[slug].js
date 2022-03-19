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
import { getAllArticle } from "../../lib";
import { useAppDispatch } from "../../store/hooks";
import { fetchAllData } from "../../store/AllArticles";

export async function getStaticPaths() {
    const allTechnology = await getAllTechnologyWithSlug();
    return {
        paths: allTechnology?.map(({ slug }) => `/technology/${slug}`) ?? [],
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    let promises = [], entrieRes = [];
    let RestechnologyDetail = [], ResmoreTechnology = [], ResallArticle = [];

    const technologyDetail = getTechnologyBySlug(params.slug);
    const moreTechnology = getMoreTechnology(params.slug);
    const allArticle = getAllArticle();

    promises.push(technologyDetail, moreTechnology, allArticle);
    entrieRes = await Promise.all(promises);
    RestechnologyDetail = entrieRes[0];
    ResmoreTechnology = entrieRes[1];
    ResallArticle = entrieRes[2];

    return {
        props: {
            RestechnologyDetail: RestechnologyDetail ? RestechnologyDetail : null,
            ResmoreTechnology: ResmoreTechnology ? ResmoreTechnology : null,
            ResallArticle: ResallArticle ? ResallArticle : null,
        },
        revalidate: 1,
    };
}

export default function TechnologyDetail({ RestechnologyDetail, ResmoreTechnology, ResallArticle }) {

    const dispatch = useAppDispatch();
    dispatch(fetchAllData(ResallArticle?.all));
    return (
        <>
            <Header />
            <TopTab />
            <div className="c-blogDetail-root">
                <BlogDetailHeader
                    contentType="TECHNOLOGY"
                    title={RestechnologyDetail?.fields.title}
                    slug={RestechnologyDetail?.fields.slug}
                    description={RestechnologyDetail?.fields.description}
                    date={RestechnologyDetail?.fields.date}
                    coverImage={RestechnologyDetail?.fields.coverImage.fields.file.url}
                />
                <BlogDetailBody content={RestechnologyDetail?.fields.content} />
                <BlogDetailFooter morePosts={ResmoreTechnology} />
            </div>
            <NewsLetter />
            <SocialLinkBlock />
            <Footer />
        </>
    );
}
