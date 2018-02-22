import React from 'react';
// import Recaptcha from 'react-google-invisible-recaptcha';
import axios from 'axios'

class InvisibleRecaptcha extends React.Component {
    constructor( props ) {
        super( props );
        this.state = { value: '' };
        this.onSubmit = this.onSubmit.bind( this );
        // this.onResolved = this.onResolved.bind( this );
    }

    onSubmit(value) {
        alert( 'Recaptcha resolved with response: ', value);

    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    value={ this.state.value }
                    onChange={ event => this.setState( { value: event.target.value } ) }
                />
                <button
                    className="g-recaptcha"
                    data-sitekey="6LcQCkgUAAAAAMaeVLPW9RSdc38OY1eO9QzTc4DU"
                    data-callback={this.onSubmit}>
                    Submit
                </button>

            </form>
        );
    }


}

export default InvisibleRecaptcha;