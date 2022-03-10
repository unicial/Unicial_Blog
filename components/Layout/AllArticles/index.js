import { Grid } from "@material-ui/core";
import LatestArticle from "../../LatestArticle/LatestArticle";
import ArticleCard from "../../ArticleCard/ArticleCard";
import CommonBtn from "../../Base/CommonBtn";

export default function AllArticles({ posts }) {
  return (
    <>
      <div className="c-allArticlesRoot">
        <LatestArticle />
        <div className="c-allArticles-photoesContainer">
          <Grid container spacing={4}>
            {posts?.map(({ fields }) => (
              <Grid item xs={12} sm={6} md={4}>
                <ArticleCard
                  slug={fields.slug}
                />
              </Grid>
            ))}

          </Grid>
        </div>
        <div className="c-allArticles-loadMoreBtnRoot">
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
