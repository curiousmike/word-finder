import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  input: {
    background: "#DAF7A6",
  },
  container: {
    margin: "4px",
  },
});

function WordInput(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TextField
        className={classes.input}
        id="filled-basic"
        label="Enter letters"
        defaultValue={props.value}
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
      />
    </div>
  );
}

export default WordInput;
