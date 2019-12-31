import React, { Component } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Bootstrap, { Button } from "react-bootstrap"
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}))
export default function ColorTextFields() {
  const classes = useStyles()
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-secondary" label="Full Name" color="secondary" />
      <TextField id="Email" label="Email" color="secondary" />
      <TextField id="Phone-Number" label="Phone Number" color="secondary" />
      <TextField
      className="margintop20"
        id="outlined-secondary"
        label="About Project"
        multiline
        rows="4"
        variant="outlined"
        color="secondary"
      />
      <Button className="ctrl-standard fx-sliderIn">Send</Button>
    </form>
  )
}
