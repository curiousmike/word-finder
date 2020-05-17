import React from "react";
import TextField from "@material-ui/core/TextField";

function WordInput(props) {
  console.log("wordInput render.");
  return (
    <TextField
      id="filled-basic"
      label="Enter letters"
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
    />
  );
}

export default WordInput;
