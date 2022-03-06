import React from "react";
import { Box } from "@material-ui/core";
import {
  createStyles,
  withStyles,
  Theme,
  Popover,
  MenuItem,
} from "@material-ui/core";
import clsx from "clsx";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export default function AuthorsMenuBar(props: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [itemName, setitemName] = React.useState(props.data[0].name);

  const handleItem = (index: number) => {
    // alert(index + props.data[index - 1].content);
    setitemName(props.data[index - 1].name);
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
            <ArrowDropDownIcon className="c-author-dropdownIcon" />
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
        {props.data.map((item: any, index: any) => (
          <MenuItem
            onClick={() => handleItem(item.index)}
            key={index}
            className="c-author-menuItem"
          >
            <Box className="c-author-listContainer">
              <img
                src="/images/author1.png"
                className="c-author-imgContainer"
              />
              <Box
                className={clsx("c-author-listLabel", {
                  ["c-author-activeListLabel"]: itemName === item.name,
                })}
              >
                {item.name}
              </Box>
            </Box>
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
