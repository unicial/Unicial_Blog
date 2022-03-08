import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
import clsx from "clsx";

interface Props {
  rows?: any;
  columns?: any;
}

export default function BaseTable({ rows, columns }: Props) {
  const tableColumns = columns?.map((column: any, key: any) => (
    <TableCell
      key={column}
      className={clsx("c-baseTable-tableHeaderCell", {
        ["c-baseTable-center"]: column === "Status",
      })}
    >
      {column}
    </TableCell>
  ));

  return (
    <>
      <TableContainer className="c-baseTable-tableContainer">
        <Table aria-label="simple table" className="c-baseTable-tableContent">
          <TableHead>
            <TableRow>{tableColumns}</TableRow>
          </TableHead>
          <TableBody>{rows}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
