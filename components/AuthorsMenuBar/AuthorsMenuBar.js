import React, { useEffect, useState } from "react";
import Link from "../Link/Link";
import { Box } from "@material-ui/core";
import { Popover, MenuItem } from "@material-ui/core";
import clsx from "clsx";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { getAllArticle } from "../../lib";
import { useRouter } from "next/router";

export default function AuthorsMenuBar() {
  const [itemName, setitemName] = React.useState(null);
  const [allAuthors, setAllAuthors] = useState();
  const [uniqueAuthors, setUniqueAuthors] = useState();
  const router = useRouter();

  useEffect(() => {
    getAllArticle().then((e) => {
      if (e?.all?.length > 0) {

        setAllAuthors(e.all);

        let allAuthorsLength = e?.all?.length !== undefined ? e?.all?.length : 0;
        let uniqueAllAuthors = [];
        let uniqueAllAuthorsSet = new Set();

        for (var i = 0; i < allAuthorsLength; i++) {
          uniqueAllAuthorsSet.add(e?.all[i]?.fields.author.fields.authorId);
        }
        // console.log("uniqueAllAuthorsSet.size", uniqueAllAuthorsSet.size);
        for (var i = allAuthorsLength - 1; i >= 0; i--) {
          if (uniqueAllAuthorsSet.size === 0) break;
          if (uniqueAllAuthorsSet.has(e?.all[i]?.fields.author.fields.authorId)) {
            uniqueAllAuthors.push(e?.all[i]);
          }
          uniqueAllAuthorsSet.delete(e?.all[i].fields.author.fields.authorId);
        }
        setUniqueAuthors(uniqueAllAuthors);
        for (let i = 0; i < uniqueAllAuthors.length; i++) {
          if (router.asPath.includes(uniqueAllAuthors[i]?.fields?.author?.fields?.slug)) {
            setitemName(uniqueAllAuthors[i]?.fields?.author?.fields?.name);
          }
          else {
          }
        }
        // console.log("uniqueallauthorsData", uniqueAllAuthors);
      } else {
        // console.log("no data");
      }
    });
  }, [router]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItem = (index) => {
    if (uniqueAuthors) {
      let selItemName =
        uniqueAuthors[index]?.fields.author.fields.authorId !== undefined
          ? uniqueAuthors[index]?.fields.author.fields.authorId
          : null;
      setitemName(selItemName);
      handleClose();
    }
  };

  return (
    <>
      <Box
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleOpen}
      >
        <Box className="c-author-listRoot">
          <Box className="c-author-listContainer">
            <Box className="c-author-mainLabel">Author</Box>
            {anchorEl ? (
              <ArrowDropUpIcon className="c-author-dropdownIcon" />
            ) : (
              <ArrowDropDownIcon className="c-author-dropdownIcon" />
            )}
          </Box>
        </Box>
      </Box>
      <Popover
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        className="c-author-popover"
        style={{ top: "18px" }}
      >
        {uniqueAuthors?.map((item, index) => (
          <MenuItem
            onClick={() => handleItem(index)}
            key={index}
            className="c-author-menuItem"
          >
            <Link
              href="/author/[slug]"
              as={`/author/${item.fields.author.fields.slug}`}
            >
              <Box className="c-author-listContainer">
                <img
                  src={item.fields.author.fields.image.fields.file.url}
                  className="c-author-imgContainer"
                />
                <Box
                  className={clsx("c-author-listLabel", {
                    ["c-author-activeListLabel"]: itemName === item.fields.author.fields.name,
                  })}
                >
                  {item.fields.author.fields.name}
                </Box>
              </Box>
            </Link>
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}