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
    getPlatformBySlug,
    getMorePlatform,
    getAllPlatformWithSlug
} from "../../lib";

export async function getStaticPaths() {
    const allPlatforms = await getAllPlatformWithSlug();
    return {
        paths: allPlatforms?.map(({ slug }) => `/platform/${slug}`) ?? [],
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    // console.log("params", params);
    const platformDetail = await getPlatformBySlug(params.slug);
    const morePlatforms = await getMorePlatform(params.slug);
    return {
        props: {
            platformDetail: platformDetail ? platformDetail : null,
            morePlatforms: morePlatforms ? morePlatforms : null,
        },
        revalidate: 1,
    };
}

export default function PlatformDetail({ platformDetail, morePlatforms }) {

    return (
        <>
            <Header />
            <TopTab />
            <div className="c-blogDetail-root">
                <BlogDetailHeader
                    contentType="PLATFORM"
                    title={platformDetail?.fields.title}
                    slug={platformDetail?.fields.slug}
                    description={platformDetail?.fields.description}
                    date={platformDetail?.fields.date}
                    coverImage={platformDetail?.fields.coverImage.fields.file.url}
                />
                <BlogDetailBody content={platformDetail?.fields.content} />
                <BlogDetailFooter morePosts={morePlatforms} />
            </div>
            <NewsLetter />
            <SocialLinkBlock />
            <Footer />
        </>
    );
}
