/* eslint-disable @typescript-eslint/await-thenable */
import React, { useState, lazy } from 'react'
import { Formik } from 'formik'

// --------------------------------------style
import './verification.css'

// ---------------------------------------icons
import { AiOutlineClose } from 'react-icons/ai'

// ---------------------------------------components
const OtpInput = lazy(() => import('../../components/otpInput/otpInput'))

const Verification = () => {
    const [otp, setOtp] = useState('')
    const onChange = (value: string) => { setOtp(value) }

    const setVerificationCode = (value: string) => {
        console.log(otp)
    }

    return <Formik
        initialValues={{
            code: ''
        }}
        enableReinitialize
        onSubmit={async (values) => {
            await setVerificationCode(values.code)
        }}

    >
        {({
            values,
            errors,
            touched,
            handleSubmit,
            setFieldValue,
            handleChange
        }) => (
            <form
                onSubmit={handleSubmit}
                className='verification-container'>
                <h3>Enter your 4 digits verification code</h3>
                <OtpInput value={otp} valueLength={4} onChange={onChange} />
                <div className='verification-buttons-container col-12'>
                    <button
                        onClick={() => setOtp('')}
                        className='verification-cancle-btn'>
                        <AiOutlineClose className='close-icon' color='red' fill='red' />
                        CLEAR
                    </button>
                    <button
                        className='verification-submit-btn'>VERIFY CODE</button>
                </div>
            </form>
        )}
    </Formik>
}

export default Verification