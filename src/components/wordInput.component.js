import React from "react";
import TextField from "@material-ui/core/TextField";

function WordInput(props) {
  return (
    <TextField
      id="filled-basic"
      label="Enter letters"
      defaultValue={props.defaultValue}
      onChange={props.onChange}
    />
  );
}

export default WordInput;
