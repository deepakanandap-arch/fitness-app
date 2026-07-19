import './Login.css'
function Login() {
return <div className='login'><div className='login-photo'></div>
<div className='login-tabs'>
    <div className='login-tab login-tab-active'>Login</div>
    <div className='login-tab'>Sign up</div>
</div>
    <form className='login-sheet'>
    <h1 className='login-heading'>Welcome back, Julietta</h1>
    <input className='login-field' type='email' placeholder='Email' required />
    <input className='login-field' type='password' placeholder='Password' required />
    <a className='login-forgot' href='#'>Forgot Password</a>
    <div className="login-actions">
        <div className="login-social">
            <button type='button'></button>
            <button type='button'>G</button>
        </div>
        <button className='login-cta' type='submit'>Login ›</button>
    </div>

    </form>
</div>;

}

export default Login
