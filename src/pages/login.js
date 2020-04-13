import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/ape.png';

// MUI Stuff
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
    form : {
        textAlign: 'center'
    },
    image : {
        width : '25%',
        margin: '20px auto 20px auto'
    }
}


export class Login extends Component {
    constructor(){
        super();
        this.state ={
            email : '',
            password : '',
            loading : false,
            error : {}
        }
    }

    render() {
        const { classes } = this.props;

        // eslint-disable-next-line no-undef
        handleSubmit = (event)=>{
            console.log("hi");
        }

        return (
            <Grid container className={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    <img src={AppIcon} alt="monkey" className={classes.image}/>
                    <Typography variant="h2" className={classes.pageTitle}>
                        Login
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField id="email" label="Email" name="email" type="email" className={classes.textField}
                        value={this.state.email} />
                    </form>

                </Grid>
                <Grid item sm/>
            </Grid>

        )
    }
}

Login.propTypes ={
    classes : PropTypes.object.isRequired
}

export default withStyles(styles)(Login);
