import backgroundImg from './imagenes/background.png'
export default (theme) => { //theme nos los da material design //se exportala funcion por defecto
    return{
            wrapper:{
            backgroundImage: `url(${backgroundImg})`
            },
            container: {
            width: '500px',
            margin: '0 auto',
            padding: theme.spacing.unit * 2
            },
            TextField: {
                marginBottom: theme.spacing.unit * 2
            },
    }
}