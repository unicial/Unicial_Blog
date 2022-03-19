import { TextField } from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect } from "react";
import { SearchBarData } from "../../config/constant";
import { useAppSelector } from "../../store/hooks";
import { selectAllArticle } from "../../store/AllArticles/selectors";
import Link from "../Link/Link";

export default function SearchBar() {
  //data logic
  const allArticle = useAppSelector(selectAllArticle);
  const [keyword, setKeyword] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [noResult, setNoResult] = React.useState(false);

  // console.log("allArticles", allArticle);

  const allData = [];
  const [resultData, setResultData] = React.useState();
  allArticle?.allArticle?.map((data) => {
    allData.push({
      title: data.fields.title,
      desc: data.fields.description,
      contentType: data.sys.contentType.sys.id,
      imgUrl: data.fields.coverImage.fields.file.url,
      slug: data.fields.slug,
    });
  });

  //handle search input
  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };

  const handleErase = () => {
    setKeyword("");
  };

  let temp = [];
  useEffect(() => {
    if (keyword === "") {
      setIsOpen(false);
      setNoResult(false);
    } else {
      for (var i = 0; i < allData?.length; i++) {
        if (
          allData[i]?.title?.toUpperCase().includes(keyword.toUpperCase()) ||
          allData[i]?.desc?.toUpperCase().includes(keyword.toUpperCase())
        ) {
          temp.push({
            title: allData[i].title,
            desc: allData[i].desc,
            contentType: allData[i].contentType,
            imgUrl: allData[i].imgUrl,
            slug: allData[i].slug,
          });
        }
      }

      setResultData(temp);
      if (resultData?.length !== 0) {
      }

      if (temp.length > 0) {
        setIsOpen(true);
        setNoResult(false);
      } else {
        setIsOpen(false);
        setNoResult(true);
      }
    }
  }, [keyword]);

  return (
    <div className="c-searchBar">
      <div className="c-searchBar-inputRoot">
        <div className="c-searchBar-leftPart">
          <i className="fas fa-search c-searchBar-searchicon"></i>
          <TextField
            className="c-searchBar-input"
            onChange={handleSearch}
            placeholder="Search"
            value={keyword}
          />
        </div>
        <div className="c-search-rightPart">
          <i
            className="fas fa-times-circle c-searchBar-closeIcon"
            onClick={handleErase}
          ></i>
        </div>
      </div>
      <div
        className={clsx("c-searchBar-popover", {
          ["displayNone"]: isOpen === false,
        })}
      >
        {resultData?.map((item, index) => (
          <Link
            href="/[contentType]/[slug]"
            as={`/${item.contentType}/${item.slug}`}
            key={index}
          >
            <div className="c-searchBar-listContainer">
              <div className="c-searchBar-ImageContainer">
                <img src={item.imgUrl} className="c-searchBar-Image" />
              </div>
              <div className="c-searchBar-ContentContainer">
                <div className="c-searchBar-title">{item.title}</div>
                <div className="c-searchBar-description">
                  <span>
                    {item.desc.length > 45
                      ? item.desc.substr(0, 45) + "..."
                      : item.desc}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* ---NoResult Part--- */}
      <div
        className={clsx("c-searchBar-noResultRoot", {
          ["displayNone"]: noResult === false,
        })}
      >
        <div className="c-searchBar-noResultContainer">
          <div className="c-searchBar-noResultSearchIconContainer">
            <i className="fas fa-search c-searchBar-noResultSearchIcon"></i>
          </div>
          <div className="c-searchBar-noResultDescription1">
            Sorry, we could not find any matches
          </div>
          <div className="c-searchBar-noResultDescription2">
            Try searching for a different keyword
          </div>
        </div>
      </div>
    </div>
  );
}
