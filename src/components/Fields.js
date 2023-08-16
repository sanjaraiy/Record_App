import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
export const Fields = ({ name, email }) => {
  return (
    <div className="datapart">
      <h5>{name}</h5>
      <h5>{email}</h5>
      <Button variant="outlined" color="error">
        <DeleteIcon></DeleteIcon>
      </Button>
    </div>
  );
};
