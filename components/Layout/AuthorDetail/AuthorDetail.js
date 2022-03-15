import { Grid } from "@material-ui/core";
import ArticleCard from "../../ArticleCard/ArticleCard";
import CommonBtn from "../../Base/CommonBtn";
import { useState } from "react";

export default function AuthorDetail({ authorDetail, allAuthorsArticle }) {
    // console.log("author_detail", authorDetail.name);
    const [showMoreCount, setShowMoreCount] = useState(3);
    const handleLoadMore = () => {
        setShowMoreCount(showMoreCount + 3)
    }

    return (
        <>
            <div className="c-authorDetailsRoot">
                <div className="c-authorInfo-root">
                    <div className="c-authorInfo-container">
                        <img src={authorDetail.fields.image.fields.file.url} className="c-authorInfo-avatarContainer" />
                        <div className="c-authorInfo-authorName">{authorDetail.fields.name}</div>
                        <div className="c-authorInfo-authorDescription">{authorDetail.fields.description}</div>
                    </div>
                </div>
                <div className="c-authorDetail-photoesContainer">
                    <Grid container spacing={4}>
                        {allAuthorsArticle?.slice(0, showMoreCount).map((authorArticle) => (
                            <Grid item xs={12} sm={6} md={4}>
                                <ArticleCard
                                    contentType={authorArticle.sys.contentType.sys.id}
                                    title={authorArticle.fields.title}
                                    slug={authorArticle.fields.slug}
                                    date={authorArticle.fields.date}
                                    coverImage={authorArticle.fields.coverImage.fields.file.url}
                                />
                            </Grid>
                        ))}

                    </Grid>
                </div>
                <div className="c-authorDetail-loadMoreBtnRoot">
                    <div className="c-allArticles-loadMoreBtnContainer">
                        <CommonBtn letter="LOAD MORE"
                            onClick={handleLoadMore}
                        >
                            <i className="far fa-arrow-right c-base-rightArrow"></i>
                        </CommonBtn>
                    </div>
                </div>
            </div>
        </>
    );
}
