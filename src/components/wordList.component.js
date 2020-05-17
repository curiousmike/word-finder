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
  tableContainer: { maxHeight: "500px", maxWidth: "750px" },
  table: { minWidth: 500 },
});

function WordList(props) {
  const classes = useStyles();
  const [words, setWords] = useState([]);
  const [sortDir, setSortDir] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  React.useEffect(() => {
    setWords(props.words);
  }, [props.words]);

  const sortWords = () => {
    if (words) {
      if (sortDir === "asc") {
        words.sort((a, b) => b.length - a.length); // sort long to short
        setSortDir("desc");
      } else {
        words.sort((a, b) => a.length - b.length); // sort short to long
        setSortDir("asc");
      }
    }
    setWords(
      words.map((word) => {
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
      <Table className={classes.table} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Word (total = {words ? words.length : 0})</TableCell>
            <TableCell>
              <TableSortLabel
                direction={sortDir}
                hideSortIcon={words.length === 0}
                active={words.length > 0}
                onClick={sortWords}
              >
                Length
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {words &&
            (rowsPerPage > 0
              ? words.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : words
            ).map((word) => (
              <TableRow key={word}>
                <TableCell component="th" scope="row">
                  {word}
                </TableCell>
                <TableCell align="right">{word.length}</TableCell>
              </TableRow>
            ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={words.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            ></TablePagination>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default WordList;
