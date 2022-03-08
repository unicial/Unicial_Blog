import BaseTable from "../Base/BaseTable";
import { TableRow, TableCell } from "@material-ui/core";
import clsx from "clsx";

interface BlogTableProps {
  rows?: any;
  columns?: any;
}

export default function BlogTable({ rows, columns }: BlogTableProps) {
  const tableRows = rows?.map((row: any, key: any) => (
    <TableRow key={key}>
      <TableCell
        className={clsx("c-blogTable-tableCell", "c-blogTable-tableDateCell")}
      >
        {row.date}
      </TableCell>
      <TableCell
        className={clsx("c-blogTable-tableCell", "c-blogTable-tableTitleCell")}
      >
        {row.title}
      </TableCell>
      <TableCell
        className={clsx("c-blogTable-tableCell", "c-blogTable-tableImageCell")}
      >
        {
          <div className="c-blogTable-imgContainer">
            <img src={row.img_src} className="c-blogTable-img" />
          </div>
          //   <div
          //     className="c-blogTable-imgContainer"
          //     style={{ backgroundImage: `url("/images/article_bg4.png")` }}
          //   >
          //     dfdf
          //   </div>
        }
      </TableCell>
    </TableRow>
  ));
  return (
    <>
      <BaseTable columns={columns} rows={tableRows} />
    </>
  );
}
