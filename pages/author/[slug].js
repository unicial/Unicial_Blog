import AuthorDetail from "../../components/Layout/AuthorDetail/AuthorDetail"
import Header from "../../components/Header/Header";
import TopTab from "../../components/TopTab/TopTab";
import Footer from "../../components/Footer/Footer";

import { getAuthorBySlug, getAllAuthorWithSlug, getAllAuthorArticle } from "../../lib";
import { useEffect, useState } from "react";

export async function getStaticPaths() {
    const allAuthors = await getAllAuthorWithSlug();
    return {
        paths: allAuthors?.map(({ slug }) => `/author/${slug}`) ?? [],
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const authorDetail = await getAuthorBySlug(params.slug);
    return {
        props: {
            authorDetail: authorDetail ? authorDetail : null,
        },
        revalidate: 1,
    };
}

export default function Author({ authorDetail }) {
    const [allAuthorsArticle, setAllAuthorsArticle] = useState();

    useEffect(() => {
        getAllAuthorArticle(authorDetail?.fields?.name).then((e) => {
            if (e?.length > 0) {
                setAllAuthorsArticle(e);
            }
        });
    }, [authorDetail?.fields?.name]);

    return (
        <>
            <Header />
            <TopTab />
            <AuthorDetail authorDetail={authorDetail} allAuthorsArticle={allAuthorsArticle} />
            <Footer />
        </>
    )
}