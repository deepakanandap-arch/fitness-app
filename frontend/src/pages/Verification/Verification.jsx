import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Verification.css'
function Verification() {
    const navigate = useNavigate()
    const [digit1, setDigit1] = useState('')
    const [digit2, setDigit2] = useState('')
    const [digit3, setDigit3] = useState('')
    const [digit4, setDigit4] = useState('')
    function handleVerify(event) {
            event.preventDefault()
            console.log(digit1, digit2, digit3, digit4)
    }

    return ( <div className='verification'>
                <button className='verification-back' onClick={() => navigate(-1)}>‹</button>
                <h1 className='verification-heading'>Verification</h1>
                <div className='verification-subtext'>Check your email. We've sent you the PIN at your email.</div>
            <form className='verification-form' onSubmit={handleVerify} >
                <div className='verification-pins' >
                    <input value={digit1} onChange={(event) => setDigit1(event.target.value)} className='verification-pin' type='text' maxLength={1} />
                    <input value={digit2} onChange={(event) => setDigit2(event.target.value)} className='verification-pin' type='text' maxLength={1} />
                    <input value={digit3} onChange={(event) => setDigit3(event.target.value)} className='verification-pin' type='text' maxLength={1} />
                    <input value={digit4} onChange={(event) => setDigit4(event.target.value)} className='verification-pin' type='text' maxLength={1} />
                </div>
                <a className='verification-resend' href='#'>Did you receive any code?</a>
                <button className='verification-cta' type='submit'>Verify</button>
            </form>


    </div>

    );
}

export default Verification
