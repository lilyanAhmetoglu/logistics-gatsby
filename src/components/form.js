import React, { Component } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Bootstrap, { Button } from "react-bootstrap"
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

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
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      name="Contact"
      method="post"
      action="/thank-you"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-contact" value="Contact" />
      <TextField id="standard-secondary" label="Full Name" color="secondary" name="name" />
      <TextField id="Email" label="Email" color="secondary" name="email" />
      <TextField id="Phone-Number" label="Phone Number" color="secondary" name="phone"/>
      <TextField
        className="margintop20"
        id="outlined-secondary"
        label="About Project"
        multiline
        rows="4"
        variant="outlined"
        color="secondary"
        name="about"
      />
      <Button  className="ctrl-standard fx-sliderIn" type="submit">Send</Button>
    </form>
  )
}
