import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

const Register = ({setShowReg}) => {
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ passwordRpt, setPasswordRpt ] = useState("");
    const [ error, setError ] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post('/auth/register', {
                username: username,
                email: email,
                password: password,
                passwordRpt: passwordRpt
            });
            res.data && window.location.replace('/login'); // redirect to login page after registering
        } catch(err) {
            setError(true);
        }
    }

    return (
        <div className="registerBackground">
            <div className="registerBox">
            <img className="pigeonLogo" src="https://s3-alpha-sig.figma.com/img/ecbb/9dcb/500050bad1d2b01a4bf059dc2292aad2?Expires=1638748800&Signature=eaGc0VN1slg0O3ytNNiH85nSvYxQF7moY6KYX0~pyj6lG~afaL8qCkx7vpNwVv7uV-AJC2q3cL8kG9ro-AxZh9pXI8eembVhbfPVbpCZU4HkQF3T9sbSOfBqr80Q6bNeHs1fE9I5Cq367g-CVWK7FFtfOGDUEvQXERQEYhwBIO7dor4HkEWFT8MKSLQihMd58v5tfRuKbNzGIl7KOtVcYxj9kqjSJN1rIWseg~Nop1QYkezArdJArrYplkr-tD-0aS~7Nl57u5pO9si~tS7uM6HtQT6JTULcKaerhwQK-lpF~l7A~i4vhkaOGkM824d2VjVQk0lvPM9TFiIjkrHYcg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
                <h1 className="registerHeader">REGISTER</h1>
                <i class="closeIcon fas fa-times" onClick={() => setShowReg(false)}></i>
                <form action="" className="regForm" onSubmit={handleSubmit}>
                    <div className="regUsernameBox">
                        <label htmlFor="" className="registerLabel regUserLabel">USERNAME</label>
                        <input type="text" 
                        className="registerInput regUserInput"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="regEmailBox">
                        <label htmlFor="" className="registerLabel regEmailLabel">E-MAIL</label>
                        <input type="email" 
                        className="registerInput regEmailInput"
                        required
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="regPasswordBox">
                        <label htmlFor="" className="registerLabel regPassLabel">PASSWORD</label>
                        <input type="password" 
                        className="registerInput regPassInput"
                        required
                        value={username}
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="regPasswordConfirmBox">
                        <label htmlFor="" className="registerLabel regPassConfirmLabel">PASSWORD CONFIRM</label>
                        <input type="password" className="registerInput regPassConfirmInput" 
                        required
                        value={username}
                        onChange={(e) => setPasswordRpt(e.target.value)} />
                    </div>
                    <Link><button className="regBtn" type="submit" to="/register">Register</button></Link>
                </form>
                {error===true && <span className="errorNot">Something went wrong...</span>}
            </div>
        </div>
    )
}

export default Register;
