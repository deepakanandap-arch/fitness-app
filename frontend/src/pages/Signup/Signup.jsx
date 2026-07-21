import {useState} from 'react'
import './Signup.css'
function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    function handleSubmit(event) {
        event.preventDefault()
        if (password !== confirmPassword) {
            console.log('Password dosent match')
        }
        else {
            console.log(email, password)
        }

    }

    return (<div className='signup'>
        <div className='signup-photo'></div>
        <div className='signup-tabs'>
            <div className='signup-tab'>Login</div>
            <div className='signup-tab signup-tab-active'>Sign up</div>
        </div>
        <form onSubmit={handleSubmit} className='signup-sheet'>
            <h1 className='signup-heading'>Hello newbie,</h1>
            <div className='signup-subtext'>Enter your information below</div>
            <input value={email} onChange={(event) => setEmail(event.target.value)} className='signup-field' type='email' placeholder='Email' required />
            <input value={password} onChange={(event) => setPassword(event.target.value)} className='signup-field' type='password' placeholder='Password' required />
            <input value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} className='signup-field' type='password' placeholder='Password again' required />
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
