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
    getProjectBySlug,
    getMoreProject,
    getAllProjectWithSlug
} from "../../lib";
import { getAllArticle } from "../../lib";
import { useAppDispatch } from "../../store/hooks";
import { fetchAllData } from "../../store/AllArticles";

export async function getStaticPaths() {
    const allProjects = await getAllProjectWithSlug();
    return {
        paths: allProjects?.map(({ slug }) => `/projectUpdates/${slug}`) ?? [],
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    let promises = [], entrieRes = [];
    let ResprojectDetail = [], ResmoreProjects = [], ResallArticle = [];
    const projectDetail = await getProjectBySlug(params.slug);
    const moreProjects = await getMoreProject(params.slug);
    const allArticle = getAllArticle();
    promises.push(projectDetail, moreProjects, allArticle);
    entrieRes = await Promise.all(promises);

    ResprojectDetail = entrieRes[0];
    ResmoreProjects = entrieRes[1];
    ResallArticle = entrieRes[2];

    return {
        props: {
            ResprojectDetail: ResprojectDetail ? ResprojectDetail : null,
            ResmoreProjects: ResmoreProjects ? ResmoreProjects : null,
            ResallArticle: ResallArticle ? ResallArticle : null,
        },
        revalidate: 1,
    };
}

export default function ProjectDetail({ ResprojectDetail, ResmoreProjects, ResallArticle }) {
    const dispatch = useAppDispatch();
    dispatch(fetchAllData(ResallArticle?.all));

    return (
        <>
            <Header />
            <TopTab />
            <div className="c-blogDetail-root">
                <BlogDetailHeader
                    contentType="PROJECT UPDATE"
                    title={ResprojectDetail?.fields.title}
                    slug={ResprojectDetail?.fields.slug}
                    description={ResprojectDetail?.fields.description}
                    date={ResprojectDetail?.fields.date}
                    coverImage={ResprojectDetail?.fields.coverImage.fields.file.url}
                />
                <BlogDetailBody content={ResprojectDetail?.fields.content} />
                <BlogDetailFooter morePosts={ResmoreProjects} />
            </div>
            <NewsLetter />
            <SocialLinkBlock />
            <Footer />
        </>
    );
}
