import './Signup.css'
function Signup() {
    return (<div className='signup'>
        <div className='signup-photo'></div>
        <div className='signup-tabs'>
            <div className='signup-tab'>Login</div>
            <div className='signup-tab signup-tab-active'>Sign up</div>
        </div>
        <form className='signup-sheet'>
            <h1 className='signup-heading'>Hello newbie,</h1>
            <div className='signup-subtext'>Enter your information below</div>
            <input className='signup-field' type='email' placeholder='Email' required />
            <input className='signup-field' type='password' placeholder='Password again' required />
            <input className='signup-field' type='password' placeholder='Password' required />
            <div className='signup-actions'>
                <div className='signup-social'>
                    <button type='button'></button>
                    <button type='button'>G</button>

                </div>

                <button type='submit' className='signup-cta'>Sign up ›</button>


            </div>

        </form>

    </div>);

}
        export default Signup
