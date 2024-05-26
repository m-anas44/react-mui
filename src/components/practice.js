import React, { useState } from "react";
import { MenuItem, Select, Slider, Switch, TextField } from "@mui/material";

const Practice = () => {
  const [range, setRange] = useState([30, 50]);
  const [course, setCourse] = useState(2);
  const mark = [
    { value: 0, label: "Start" },
    { value: 50, label: "Mid" },
    { value: 100, label: "End" },
  ];
  const updateVal = (e, val) => {
    setRange(val);
  };
  const updatedSelect = (e, val) => {
    setCourse(e.target.value);
  };
  return (
    <div>
      <div style={{ width: "20%" }}>
        <Slider
          max={100}
          color="primary"
          defaultValue={30}
          valueLabelDisplay="auto"
          step={10}
          marks={mark}
          sx={{ margin: "30px" }}
        />
        <Slider
          max={100}
          value={range}
          valueLabelDisplay="auto"
          onChange={updateVal}
        />
      </div>
      <h1>hello</h1>

      <Select value={course} displayEmpty onChange={updatedSelect}>
        <MenuItem value="">Select Course</MenuItem>
        <MenuItem value={1}>Node</MenuItem>
        <MenuItem value={2}>Express</MenuItem>
        <MenuItem value={3}>Java</MenuItem>
        <MenuItem value={4}>JavaScript</MenuItem>
      </Select>
<br/>
      <TextField label="Enter Name" variant="standard"/>
      <Switch color="primary" size="small"/>
    </div>
  );
};

export default Practice;
