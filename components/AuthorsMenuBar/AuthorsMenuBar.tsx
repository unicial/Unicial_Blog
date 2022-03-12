import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { Popover, MenuItem } from "@material-ui/core";
import clsx from "clsx";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { getAllPosts } from "../../lib";

export default function AuthorsMenuBar() {
  const [itemName, setitemName] = React.useState(null);
  const [allAuthors, setAllAuthors] = useState<any[] | undefined>();

  useEffect(() => {
    getAllPosts().then((e: any) => {
      if (e?.length > 0) {
        setAllAuthors(e);
        setitemName(e[0]?.fields.author.fields.name);
      }
    });
  }, []);

  console.log("allAuthors", allAuthors);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItem = (index: number) => {
    alert(index);
    setitemName(allAuthors[index]?.fields.author.fields.name);
    handleClose();
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
        {allAuthors?.map((item: any, index: any) => (
          <MenuItem
            onClick={() => handleItem(index)}
            key={index}
            className="c-author-menuItem"
          >
            <Box className="c-author-listContainer">
              <img
                src={item.fields.author.fields.image.fields.file.url}
                className="c-author-imgContainer"
              />
              <Box
                className={clsx("c-author-listLabel", {
                  ["c-author-activeListLabel"]: itemName === item.name,
                })}
              >
                {item.fields.author.fields.name}
              </Box>
            </Box>
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
