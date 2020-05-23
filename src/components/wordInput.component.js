import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  input: {
    background: "#DAF7A6",
    "text-align": "center",
  },
  container: {
    margin: "0px auto 8px",
    textAlign: "center",
  },
});

function WordInput(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <form onSubmit={props.onSubmit}>
        <TextField
          className={classes.input}
          id="filled-basic"
          defaultValue={props.value}
          onChange={props.onChange}
          onKeyUp={props.onKeyPress}
          label="Enter letters here"
        />
      </form>
    </div>
  );
}

export default WordInput;
