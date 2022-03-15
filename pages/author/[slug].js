import AuthorDetail from "../../components/Layout/AuthorDetail/AuthorDetail"
import Header from "../../components/Header/Header";
import TopTab from "../../components/TopTab/TopTab";
import Footer from "../../components/Footer/Footer";

import { getAuthorBySlug, getAllAuthorWithSlug } from "../../lib";

export async function getStaticPaths() {
    const allAuthors = await getAllAuthorWithSlug();
    return {
        paths: allAuthors?.map(({ slug }) => `/author/${slug}`) ?? [],
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    console.log("test")
    const authorDetail = await getAuthorBySlug(params.slug);
    return {
        props: {
            authorDetail: authorDetail ? authorDetail : null,
        },
        revalidate: 1,
    };
}

export default function Author({ authorDetail }) {
    console.log("author_Detail##", authorDetail)
    return (
        <>
            <Header />
            <TopTab />
            <AuthorDetail authorDetail={authorDetail} />
            <Footer />
        </>
    )
}