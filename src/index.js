import React, { Component } from "react";
import ReactDOM from "react-dom";
import Paper from '@material-ui/core/Paper'
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => {
    return{
            container: {
            width: '500px',
            margin: '0 auto'
            }
    }
}

class App extends Component {
  render() {
    const classes = this.props.classes
    return (
      <Paper className={classes.container}>
        <Typography 
        variant="display1" 
        color="secondary"
        >
          Registor de la Comunidad
        </Typography>
      </Paper>
    );
  }
}

App = withStyles(styles)(App)

ReactDOM.render(<App />, document.getElementById("root"));
