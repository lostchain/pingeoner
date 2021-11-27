import React from 'react';
import './Login.css'

const Login = ({setShowLogin}) => {

    return(
        <div className="loginBackground">
            <div className="loginBox">
            <img className="pigeonLogo" src="https://s3-alpha-sig.figma.com/img/ecbb/9dcb/500050bad1d2b01a4bf059dc2292aad2?Expires=1638748800&Signature=eaGc0VN1slg0O3ytNNiH85nSvYxQF7moY6KYX0~pyj6lG~afaL8qCkx7vpNwVv7uV-AJC2q3cL8kG9ro-AxZh9pXI8eembVhbfPVbpCZU4HkQF3T9sbSOfBqr80Q6bNeHs1fE9I5Cq367g-CVWK7FFtfOGDUEvQXERQEYhwBIO7dor4HkEWFT8MKSLQihMd58v5tfRuKbNzGIl7KOtVcYxj9kqjSJN1rIWseg~Nop1QYkezArdJArrYplkr-tD-0aS~7Nl57u5pO9si~tS7uM6HtQT6JTULcKaerhwQK-lpF~l7A~i4vhkaOGkM824d2VjVQk0lvPM9TFiIjkrHYcg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
                <h1 className="loginHeader">LOGIN</h1>
                <i class="closeIcon fas fa-times" onClick={() => setShowLogin(false)}></i>
                <form action="" className="loginForm">
                    <div className="usernameBox">
                        <label htmlFor="" className="loginLabel userLabel">USERNAME</label>
                        <input type="text" className="loginInput userInput" />
                    </div>
                    <div className="passwordBox">
                        <label htmlFor="" className="loginLabel passLabel">PASSWORD</label>
                        <input type="password" className="loginInput passInput" />
                    </div>
                    <button className="loginBtn" type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;