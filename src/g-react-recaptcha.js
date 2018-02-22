import Recaptcha from 'react-grecaptcha';

const verifyCallback = response => console.log(response);
const expiredCallback = () => {...};


class GReactRecaptcha {
    render () {
        return (
            <Recaptcha
                sitekey={RECAPTCHA_SITE_KEY}
                callback={verifyCallback}
                expiredCallback={expiredCallback}
                locale="zh-TW"
                className="customClassName"

                // Other props will be passed into the component.
                data-theme="dark"
            />
        )
    }
}
