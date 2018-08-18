import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import MomentUtils from "material-ui-pickers/utils/moment-utils";
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";

import moment from "moment";
import "moment/locale/es";

//Los de Abajo son secundarios
import Form from "./Form";
import styles from "./styles";

moment.locale("es"); //moment parsea lenguajes

class App extends Component { 
  render() {
    const classes=this.props.classes  //los this,props es como decir entrar a todas las propiedades que tiene el constexto
    //los estilos que vamos a apsar los tradusca y lo meta en la variable classes
    return (  //los providers se usan para poder darle funcionalidad a nuestros selectores de fecha y hora
      <MuiPickersUtilsProvider utils={MomentUtils} locale="es" moment={moment}> 
          <div className={classes.wrapper}>
            <Form estilos={classes} /> 
          </div>
      </MuiPickersUtilsProvider>
    );
  }
}

App = withStyles(styles)(App);  //withStyles(styles)(App)  recive la funcion stryles(todos sus datos y los emtemos arriba) y devuelve la funcion app

ReactDOM.render(<App />, document.getElementById("root"));
