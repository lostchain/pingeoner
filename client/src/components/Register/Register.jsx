import React from 'react'
import './Register.css'

const Register = ({setShowReg}) => {

    
    return (
        <div className="registerBackground">
            <div className="registerBox">
            <img className="pigeonLogo" src="https://s3-alpha-sig.figma.com/img/ecbb/9dcb/500050bad1d2b01a4bf059dc2292aad2?Expires=1638748800&Signature=eaGc0VN1slg0O3ytNNiH85nSvYxQF7moY6KYX0~pyj6lG~afaL8qCkx7vpNwVv7uV-AJC2q3cL8kG9ro-AxZh9pXI8eembVhbfPVbpCZU4HkQF3T9sbSOfBqr80Q6bNeHs1fE9I5Cq367g-CVWK7FFtfOGDUEvQXERQEYhwBIO7dor4HkEWFT8MKSLQihMd58v5tfRuKbNzGIl7KOtVcYxj9kqjSJN1rIWseg~Nop1QYkezArdJArrYplkr-tD-0aS~7Nl57u5pO9si~tS7uM6HtQT6JTULcKaerhwQK-lpF~l7A~i4vhkaOGkM824d2VjVQk0lvPM9TFiIjkrHYcg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
                <h1 className="registerHeader">REGISTER</h1>
                <i class="closeIcon fas fa-times" onClick={() => setShowReg(false)}></i>
                <form action="" className="regForm">
                    <div className="regUsernameBox">
                        <label htmlFor="" className="registerLabel regUserLabel">USERNAME</label>
                        <input type="text" className="registerInput regUserInput" />
                    </div>
                    <div className="regEmailBox">
                        <label htmlFor="" className="registerLabel regEmailLabel">E-MAIL</label>
                        <input type="email" className="registerInput regEmailInput" />
                    </div>
                    <div className="regPasswordBox">
                        <label htmlFor="" className="registerLabel regPassLabel">PASSWORD</label>
                        <input type="password" className="registerInput regPassInput" />
                    </div>
                    <div className="regPasswordConfirmBox">
                        <label htmlFor="" className="registerLabel regPassConfirmLabel">PASSWORD CONFIRM</label>
                        <input type="password" className="registerInput regPassConfirmInput" />
                    </div>
                    <button className="regBtn" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register
