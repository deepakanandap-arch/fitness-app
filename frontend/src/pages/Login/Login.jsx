import {useState} from 'react'
import './Login.css'
function Login() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
function handleSubmit(event) {
    event.preventDefault()
    console.log(email, password)
}
return (<div className='login'>
        <div className='login-photo'></div>
        <div className='login-tabs'>
            <div className='login-tab login-tab-active'>Login</div>
            <div className='login-tab'>Sign up</div>
        </div>
        <form className='login-sheet' onSubmit={handleSubmit}>
                <h1 className='login-heading'>Welcome back, Julietta</h1>
                <input value={email} onChange={(event) => setEmail(event.target.value)} className='login-field' type='email' placeholder='Email' required />
                <input value={password} onChange={(event) => setPassword(event.target.value)} className='login-field' type='password' placeholder='Password' required />
                <a className='login-forgot' href='#'>Forgot Password</a>
                <div className="login-actions">
                    <div className="login-social">
                        <button type='button'></button>
                        <button type='button'>G</button>
                    </div>
                    <button className='login-cta' type='submit'>Login ›</button>
                </div>

        </form>
</div>);

}

export default Login
