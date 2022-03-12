import BaseTable from "../Base/BaseTable";
import { TableRow, TableCell } from "@material-ui/core";
import clsx from "clsx";
import Link from "../Link/Link";
import moment from "moment";

interface BlogTableProps {
  rows?: any;
  columns?: any;
}

export default function BlogTable({ rows, columns }: BlogTableProps) {
  console.log("blogtable", rows);
  const tableRows = rows?.map((row: any, key: any) => (
    <Link href="/announcements/[slug]" as={`/announcements/${row.fields.slug}`}>
      <TableRow key={key} className="c-blogTable-tableRow">
        <TableCell
          className={clsx("c-blogTable-tableCell", "c-blogTable-tableDateCell")}
        >
          {/* {row.fields.date} */}
          {moment(row.fields.date).format("MMMM Do , YYYY")}
        </TableCell>
        <TableCell
          className={clsx(
            "c-blogTable-tableCell",
            "c-blogTable-tableTitleCell"
          )}
        >
          {row.fields.title}
        </TableCell>
        <TableCell
          className={clsx(
            "c-blogTable-tableCell",
            "c-blogTable-tableImageCell"
          )}
        >
          {
            <div className="c-blogTable-imgContainer">
              <img
                src={row?.fields.coverImage?.fields.file.url}
                className="c-blogTable-img"
              />
            </div>
          }
        </TableCell>
      </TableRow>
    </Link>
  ));
  return (
    <>
      <BaseTable rows={tableRows} columns={columns} />
    </>
  );
}
