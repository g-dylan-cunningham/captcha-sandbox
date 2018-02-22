import React from 'react';
import { withStyles } from 'material-ui/styles';
import Dialog from './dialog';
import { Button, TextField } from 'material-ui';
import ReCaptcha from 'react-google-invisible-recaptcha';
import axios from 'axios';


const styles = theme => ({
    root: {
        padding: '40px 0px 0px 0px;',
    },
    container: {
        width: '50%',
        margin: '0 auto',
        marginTop: '100px'
    },
    title: {
        fontSize: '22px',
        lineHeight: '25px',
        marginBottom: '30px',
    },
    message: {
        fontSize: '16px',
        lineHeight: '19px',
        marginBottom: '30px',
    },
    button: {
        marginTop: '30px',
    },
    links: {
        color: '#1073EE',
        fontSize: '16px',
        lineHeight: '19px',
        cursor: 'pointer',
        marginTop: '30px',
        '&:first-child': {
            marginBottom: '10px',
        },
    },
});

class EnterCode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {textValue:''};
        this.onSubmit = this.onSubmit.bind(this);
        this.onResolved = this.onResolved.bind(this);
    }


    // onSubmit() {
    //     this.props.onVerify(document.getElementById('code').value);
    // }

    onSubmit() {
        if ( '' == this.state.textValue ) {
            alert( 'Validation failed! Input cannot be empty.' );
            this.recaptcha.reset();
        } else {
            alert('executing onSubmit')
            this.recaptcha.execute();
            // this.recaptcha.getResponse()
        }
    }

    onResolved() {
        alert( 'Recaptcha resolved with response: ', this.recaptcha.getResponse() );
        // axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=6LcQCkgUAAAAAM_7RGXSAW8m4h-jSAcL1L0LiP7G&response=${this.recaptcha.getResponse()}`)
        //     .then(function(response){
        //     alert('response', response)
        // })

    }

    render() {
        const {
            cancelAction,
            open,
            classes,
            onMoreOptions,
            onLostAccess,
            maskedPhoneNumber,
        } = this.props;
        return (
            <div className={classes.container}>
                <form
                    className={classes.root}
                >
                    <div className={classes.title}>Codes do not match</div>
                    <div className={classes.message}>
                        For the safety of this account, the account has been locked due to
                        too many failed code attempts. Try your code again and use the
                        captcha to continue.
                    </div>

                    {/*<TextField label="Enter 6-digit code" fullWidth={true} id="code" />*/}
                    <input type='text' value={this.state.textValue} onChange={e=> this.setState({textValue: e.target.value})}/>

                    <ReCaptcha
                        ref={ ref => this.recaptcha = ref }
                        sitekey="6LcQCkgUAAAAAMaeVLPW9RSdc38OY1eO9QzTc4DU"
                        onResolved={ this.onResolved } />

                    <Button
                        className={classes.button}
                        color="primary"
                        onClick={this.onSubmit}
                        type="submit"
                        raised
                    >
                        Verify
                    </Button>
                    <div className={classes.links}>
                        <div className={classes.moreOptions} onClick={onMoreOptions}>
                            More Options
                        </div>
                        <div className={classes.lostAccess} onClick={onLostAccess}>
                            Lost access to your device?
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(EnterCode);
