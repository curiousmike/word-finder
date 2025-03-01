import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import { IconButton, TextField } from "@material-ui/core";
const useStyles = makeStyles({
  input: {
    background: "#DAF7A6",
    // "text-align": "center",
    marginRight: '8px',
  },
  inputText: {
    fontSize: "28px",
  },
  container: {
    // margin: "0px auto 8px",
    // textAlign: "center",
  },
});

function WordInput({onSubmit, theRef, value, onChange, onKeyPress, clearInput}) {
  const classes = useStyles();
  console.log('render -',value);
  return (
    <div className={classes.container}>
      <form onSubmit={onSubmit}>
        <TextField
          inputRef={theRef}
          className={classes.input}
          id="filled-basic"
          defaultValue={value}
          value={value}
          onChange={onChange}
          onKeyUp={onKeyPress}
          label="Enter letters here"
          InputProps={{
            classes: {
              input: classes.inputText,
            },
            endAdornment: 
              <IconButton size="small" onClick={()=>clearInput()}>
                <ClearIcon />
              </IconButton>
          }}
        />
      </form>
    </div>
  );
}

export default WordInput;
