import { useState } from "react";
import { Grid } from "@material-ui/core";
import LatestArticle from "../../LatestArticle/LatestArticle";
import ArticleCard from "../../ArticleCard/ArticleCard";
import CommonBtn from "../../Base/CommonBtn";
export default function AllArticles({ posts }) {
  const [showMoreCount, setShowMoreCount] = useState(3);
  const handleLoadMore = () => {
    setShowMoreCount(showMoreCount + 3)
  }
  return (
    <>
      <div className="c-allArticlesRoot">
        <LatestArticle />
        <div className="c-allArticles-photoesContainer">
          <Grid container spacing={4}>
            {posts?.slice(0, showMoreCount)?.map((post) => (
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
        </div>
        <div className="c-allArticles-loadMoreBtnRoot">
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
