import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  tableContainer: { maxHeight: "500px", maxWidth: "750px" },
  table: { minWidth: 500 },
});

function WordList(props) {
  const classes = useStyles();
  const [words, setWords] = useState([]);
  const [sortDir, setSortDir] = useState("asc");

  React.useEffect(() => {
    setWords(props.words);
  }, [props.words]);

  const sortWords = (property) => (event) => {
    let newwords;
    if (words) {
      if (sortDir === "asc") {
        newwords = words.sort((a, b) => b.length - a.length); // sort long to short
        setSortDir("des");
      } else {
        newwords = words.sort((a, b) => a.length - b.length); // sort short to long
        setSortDir("asc");
      }
    }
    setWords(newwords);

    setWords(
      words.map((word) => {
        return word;
      })
    );
  };

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Word (total = {words ? words.length : 0})</TableCell>
            <TableCell>
              <TableSortLabel
                active={true}
                direction={"asc"}
                onClick={sortWords()}
              >
                Length
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {words &&
            words.map((word) => (
              <TableRow key={word}>
                <TableCell component="th" scope="row">
                  {word}
                </TableCell>
                <TableCell align="right">{word.length}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default WordList;
