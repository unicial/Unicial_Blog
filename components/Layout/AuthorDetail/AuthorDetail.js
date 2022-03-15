import { Grid } from "@material-ui/core";
import ArticleCard from "../../ArticleCard/ArticleCard";
import CommonBtn from "../../Base/CommonBtn";


export default function AuthorDetail({ authorDetail }) {
    console.log("author_detail", authorDetail.name);
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
                {/* <div className="c-authorDetail-photoesContainer">
                    <div>photo test</div>
                    <Grid container spacing={4}>
                        {posts?.map((post) => (
                            <Grid item xs={12} sm={6} md={4}>
                                <ArticleCard
                                    contentType={post.sys.contentType.sys.id}
                                    title={post.fields.title}
                                    slug={post.fields.slug}
                                    date={post.fields.date}
                                    coverImage={post.fields.coverImage.fields.file.url}
                                />
                            </Grid>
                        ))}

                    </Grid>
                </div> */}
                <div className="c-authorDetail-loadMoreBtnRoot">
                    <div className="c-allArticles-loadMoreBtnContainer">
                        <CommonBtn letter="LOAD MORE">
                            <i className="far fa-arrow-right c-base-rightArrow"></i>
                        </CommonBtn>
                    </div>
                </div>
            </div>
        </>
    );
}
