import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

class GRecaptcha extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonEnabled: false
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        this.setState({buttonEnabled:true})
    }



    render () {
        return (
            <div>
               <form
                   onSubmit={e => {
                       console.log('button submitted', this.state)
                   }}>
                   <input
                       type='text'
                       value='sometext'
                   />
                    <ReCAPTCHA
                        ref="recaptcha"
                        sitekey="6Lefg0cUAAAAALkdvIltlcXeqawGV-NQpqdF3aRN"
                        onChange={this.onChange}
                    />
                   <button
                       type='submit'
                       disabled={!this.state.buttonEnabled}
                   >submit</button>
               </form>
            </div>
        )
    }
}

export default GRecaptcha;