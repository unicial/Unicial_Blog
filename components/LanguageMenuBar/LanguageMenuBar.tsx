import React from "react";
import { Box } from "@material-ui/core";
import { Popover, MenuItem } from "@material-ui/core";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { languageData } from "../../config/constant";

export default function LanguageMenuBar(props: any) {
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
        <Box className="c-language-listRoot">
          <Box className="c-language-listContainer">
            {itemName === languageData[0].name ? (
              <img src="/images/England.svg" className="c-language-flag" />
            ) : itemName === languageData[1].name ? (
              <img src="/images/Spain.svg" className="c-language-flag" />
            ) : (
              <img src="/images/China.svg" className="c-language-flag" />
            )}

            <Box className="c-language-mainLabel">{itemName}</Box>
            <ExpandMoreIcon className="c-language-dropdownIcon" />
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
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        className="c-language-popover"
        style={{ top: "18px" }}
      >
        {props.data.map((item: any, index: any) => (
          <MenuItem
            onClick={() => handleItem(item.index)}
            key={index}
            className="c-language-menuItem"
          >
            <Box className="c-language-listContainer">
              {languageData[index].name === languageData[0].name ? (
                <img
                  src="/images/England.svg"
                  className="c-language-flagImgContainer"
                />
              ) : languageData[index].name === languageData[1].name ? (
                <img
                  src="/images/Spain.svg"
                  className="c-language-flagImgContainer"
                />
              ) : (
                <img
                  src="/images/China.svg"
                  className="c-language-flagImgContainer"
                />
              )}

              <Box
                className={clsx("c-language-listLabel", {
                  ["c-language-activeListLabel"]: itemName === item.name,
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
