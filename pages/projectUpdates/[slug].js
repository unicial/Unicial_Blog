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

import {
    getProjectBySlug,
    getMoreProject,
    getAllProjectWithSlug
} from "../../lib";

export async function getStaticPaths() {
    const allProjects = await getAllProjectWithSlug();
    return {
        paths: allProjects?.map(({ slug }) => `/projectUpdates/${slug}`) ?? [],
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const projectDetail = await getProjectBySlug(params.slug);
    const moreProjects = await getMoreProject(params.slug);
    return {
        props: {
            projectDetail: projectDetail ? projectDetail : null,
            moreProjects: moreProjects ? moreProjects : null,
        },
        revalidate: 1,
    };
}

export default function ProjectDetail({ projectDetail, moreProjects }) {

    return (
        <>
            <Header />
            <TopTab />
            <div className="c-blogDetail-root">
                <BlogDetailHeader
                    contentType="PROJECT UPDATE"
                    title={projectDetail?.fields.title}
                    slug={projectDetail?.fields.slug}
                    description={projectDetail?.fields.description}
                    date={projectDetail?.fields.date}
                    coverImage={projectDetail?.fields.coverImage.fields.file.url}
                />
                <BlogDetailBody content={projectDetail?.fields.content} />
                <BlogDetailFooter morePosts={moreProjects} />
            </div>
            <NewsLetter />
            <SocialLinkBlock />
            <Footer />
        </>
    );
}
