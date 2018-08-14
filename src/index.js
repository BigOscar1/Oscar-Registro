import React, { Component } from "react";
import ReactDOM from "react-dom"
import { withStyles } from "@material-ui/core/styles"
import MomentUtils from "material-ui-pickers/utils/moment-utils"
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider"

import moment from "moment"
import "moment/locale/es"

//Los de Abajo son secundarios
import Form from './Form'
import styles from './styles'

moment.locale('es') //moment parsea lenguajes

class App extends Component {
  render() {
    return (
    <MuiPickersUtilsProvider utils={MomentUtils} locale='es' moment={moment}>
        <Form classes={this.props.classes}/>
      </MuiPickersUtilsProvider>
    );
  }
}

App = withStyles(styles)(App)

ReactDOM.render(<App />, document.getElementById("root"));
