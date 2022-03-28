import { Grid } from "@material-ui/core";
import ArticleCard from "../../ArticleCard/ArticleCard";
import CommonBtn from "../../Base/CommonBtn";
import { useState, useEffect } from "react";
import { initCount, showmoreCount } from '../../../config/constant'

export default function AuthorDetail({ authorDetail, allAuthorsArticle }) {
    const [showCount, setShowCount] = useState(0);
    const [ismoreOrless, setIsmoreOrless] = useState("more");
    const totalAuthorArticleCount = allAuthorsArticle?.length;

    const [shown, setShown] = useState(true);

    useEffect(() => {
        if (totalAuthorArticleCount <= initCount) {
            setShowCount(totalAuthorArticleCount);
            setShown(false);
        } else {
            setShown(true);
            if (ismoreOrless === "more") {
                setShowCount(initCount);
            } else {
                setShowCount(totalAuthorArticleCount)
            }
        }
    }, [totalAuthorArticleCount])

    const handleLoadMore = () => {
        if (showCount + showmoreCount >= totalAuthorArticleCount)
            setIsmoreOrless("less");
        setShowCount(showCount + showmoreCount);

    }
    const handleLoadLess = () => {
        setShowCount(initCount);
        setIsmoreOrless("more");
    }
    // console.log("authorDetail", authorDetail);

    return (
        <>
            <div className="c-authorDetailsRoot">
                <div className="c-authorInfo-root">
                    <div className="c-authorInfo-container">
                        <img src={authorDetail?.fields?.image.fields.file.url} className="c-authorInfo-avatarContainer" />
                        <div className="c-authorInfo-authorName">{authorDetail?.fields?.name}</div>
                        <div className="c-authorInfo-authorDescription">{authorDetail?.fields?.description}</div>
                    </div>
                </div>
                <div className="c-authorDetail-photoesContainer">
                    <Grid container spacing={4}>
                        {allAuthorsArticle?.slice(0, showCount).map((authorArticle, key) => (
                            <Grid item xs={12} sm={6} md={4} key={key}>
                                <ArticleCard
                                    contentType={authorArticle.sys.contentType.sys.id}
                                    title={authorArticle.fields?.title}
                                    slug={authorArticle.fields?.slug}
                                    date={authorArticle.fields?.date}
                                    coverImage={authorArticle.fields?.coverImage.fields.file.url}
                                />
                            </Grid>
                        ))}

                    </Grid>
                </div>
                <div className="c-authorDetail-loadMoreBtnRoot">
                    {shown && (
                        ismoreOrless === "more" ? (
                            <div className="c-allArticles-loadMoreBtnContainer">
                                <CommonBtn letter="LOAD MORE"
                                    onClick={handleLoadMore}
                                >
                                    <i className="far fa-arrow-right c-base-rightArrow"></i>
                                </CommonBtn>
                            </div>
                        ) : (
                            <div className="c-allArticles-loadMoreBtnContainer">
                                <CommonBtn letter="LOAD LESS"
                                    onClick={handleLoadLess}
                                >
                                    <i className="far fa-arrow-right c-base-rightArrow"></i>
                                </CommonBtn>
                            </div>
                        )
                    )}

                </div>
            </div>
        </>
    );
}
