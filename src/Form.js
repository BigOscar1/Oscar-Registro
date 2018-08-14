import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem"
import Button from "@material-ui/core/Button"
import DatePicker from "material-ui-pickers/DatePicker"
import TimePicker from "material-ui-pickers/TimePicker"

export default class Form extends Component{
    render(){
        const classes = this.props.classes
        return(
            <Paper className={classes.container}>
        <Typography 
        variant="display1" 
        color="secondary"
        >
          Registor de la Comunidad
        

        <TextField
            label='Nombre'
            name='firstName'
            fullWidth
            className={classes.TextField}
        />

        <TextField
            label='Apellido'
            name='lastName'
            fullWidth
            className={classes.TextField}
        />

        <TextField
            label='Celular'
            name='phone'
            fullWidth
            className={classes.TextField}
        />

        <TextField
            label='Correo'
            name='email'
            fullWidth
            className={classes.TextField}
        />

        <TextField
            label='FaceBook'
            name='fb'
            fullWidth
            className={classes.TextField}
        />

        <DatePicker
        />

        <TimePicker/>

        <TextField
            label='Fecha Nacimiento'
            defaultValue="1999-01-01"
            name='birthDate'
            type= 'date'
            fullWidth
            className={classes.TextField}
        />

        <TextField
            label='Interes'
            name='interest'
            fullWidth
            select
            className={classes.TextField}
        >
            <MenuItem >JS</MenuItem>
            <MenuItem>FS</MenuItem>
            <MenuItem>HTML5</MenuItem>
            <MenuItem>CSS3</MenuItem>

            className={classes.TextField}
        </TextField>
        

        <Button
        variant="contained" 
        color="secondary"
        >
        Guardar
        </Button>
        </Typography>
      </Paper>
        )
    }
}
