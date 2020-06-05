import React from "react";
import Slider from "@material-ui/core/Slider";
import "./continuousSlider.component.css";

function ContinuousSlider(props) {
  return (
    <div className="continuousSlider">
      <Slider
        onChangeCommitted={(e, v) => props.onSliderChange(e, v)}
        valueLabelDisplay="on"
        min={props.min}
        max={props.max}
        defaultValue={0}
      ></Slider>
    </div>
  );
}

export default ContinuousSlider;
