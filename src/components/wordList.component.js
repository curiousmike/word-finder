import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";

import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  tableContainer: {
    maxWidth: "375px",
    display: "inline-flex",
    overflow: "hidden",
  },
  // table: { minWidth: 500 },
  activeSortIcon: { opacity: 1, width: "20px" },
  inactiveSortIcon: { opacity: 0.4, width: "20px" },
  MuiTablePaginationSpacer: {
    display: "block",
    padding: "1px",
    overflow: "hidden",
    "margin-left": "1px",
  },
  MuiTablePaginationActions: {
    "margin-left": "1px",
  },
  tableFooter: {
    overflow: "hidden",
    // padding: "0px !important",
  },
  MuiTablePaginationInput: {
    "margin-right": "4px !important",
  },
  MuiTablePaginationSelectRoot: {
    "margin-right": "1px",
    "margin-left": "1px",
    // backgroundColor: "red",
  },
});

const rowsPerPageOptions = [5, 10, 25, { label: "All", value: -1 }];

function WordList(props) {
  const classes = useStyles();
  const [foundWords, setWords] = useState(props.words); // useState ([]);
  const [sortDir, setSortDir] = useState("asc");
  const [isSorted, setSorted] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[1]);

  React.useEffect(() => {
    setWords(props.words);
  }, [props.words]);

  const sortWords = () => {
    setSorted(true);
    if (foundWords) {
      if (sortDir === "asc") {
        foundWords.sort((a, b) => b.length - a.length); // sort long to short
        setSortDir("desc");
      } else {
        foundWords.sort((a, b) => a.length - b.length); // sort short to long
        setSortDir("asc");
      }
    }
    setWords(
      foundWords.map((word) => {
        return word;
      })
    );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: "140px" }}>
              Words {foundWords ? "(" + foundWords.length + ")" : ""}
            </TableCell>
            <TableCell>
              <TableSortLabel
                classes={{
                  root: isSorted
                    ? classes.activeSortIcon
                    : classes.inactiveSortIcon,
                }}
                direction={sortDir}
                hideSortIcon={foundWords.length === 0}
                active={foundWords.length > 0}
                onClick={sortWords}
              >
                Length
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foundWords &&
            (rowsPerPage > 0
              ? foundWords.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : foundWords
            ).map((word) => (
              <TableRow key={word}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ width: "140px" }}
                >
                  {word}
                </TableCell>
                <TableCell align="right" style={{ width: "80px" }}>
                  {word.length}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              style={{ padding: "0px" }}
              rowsPerPageOptions={rowsPerPageOptions}
              colSpan={2}
              count={foundWords.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              labelRowsPerPage={"R/P"}
              className={classes.tableFooter}
            ></TablePagination>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default WordList;
