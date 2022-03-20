import AuthorDetail from "../../components/Layout/AuthorDetail/AuthorDetail"
import Header from "../../components/Header/Header";
import TopTab from "../../components/TopTab/TopTab";
import Footer from "../../components/Footer/Footer";

import { getAuthorBySlug, getAllAuthorWithSlug, getAllAuthorArticle } from "../../lib";
import { getAllArticle } from "../../lib";
import { useAppDispatch } from "../../store/hooks";
import { fetchAllData } from "../../store/AllArticles";

import { useEffect, useState } from "react";

export async function getStaticPaths() {
    const allAuthors = await getAllAuthorWithSlug();
    return {
        paths: allAuthors?.map(({ slug }) => `/author/${slug}`) ?? [],
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    let promises = [], entrieRes = [];
    let ResauthorDetail = [], ResallArticle = [];
    const authorDetail = getAuthorBySlug(params.slug);
    const allArticle = getAllArticle();
    promises.push(authorDetail, allArticle);
    entrieRes = await Promise.all(promises);

    ResauthorDetail = entrieRes[0];
    ResallArticle = entrieRes[1];

    return {
        props: {
            ResauthorDetail: ResauthorDetail ? ResauthorDetail : null,
            ResallArticle: ResallArticle ? ResallArticle : null,
        },
        revalidate: 1,
    };
}

export default function Author({ ResauthorDetail, ResallArticle }) {
    const dispatch = useAppDispatch()
    dispatch(fetchAllData(ResallArticle?.all));

    const [allAuthorsArticle, setAllAuthorsArticle] = useState();

    useEffect(() => {
        getAllAuthorArticle(ResauthorDetail?.fields?.name).then((e) => {
            if (e?.length > 0) {
                setAllAuthorsArticle(e);
            }
        });
    }, [ResauthorDetail?.fields?.name]);

    return (
        <>
            <Header />
            <TopTab />
            <AuthorDetail authorDetail={ResauthorDetail} allAuthorsArticle={allAuthorsArticle} />
            <Footer />
        </>
    )
}