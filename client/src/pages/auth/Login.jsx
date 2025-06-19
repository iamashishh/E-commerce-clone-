import CommonForm from '@/components/common/Form'
import { loginFormControls } from '@/config'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Authlogin = () => {

    const [formData, setformData] = useState({
        userName:"",
        email:"",password:""
    })

    const onSubmit = (e) => {

    }

  return (
    <div className='mx-auto w-full max-w-md space-y-6' >
        <div className='text-center ' >
            <h1 className='text-3xl font-bold tracking-tight text-foreground' >Sign in to your account</h1>
            <p className='mt-2 ' >Don't have an account?
            <Link className='font-medium text-primary hover:underline ml-2' to="/auth/register" >Register</Link>
            </p>
            </div>
            <CommonForm
                formData={formData}
                setFormData={setformData}
                formControls={loginFormControls}
                buttonText={"Sign In"}
                onSubmit={onSubmit}
            />
    </div>
  )
}

// const Authlogin = () => {
//     return <div>hel</div>
// }

export default Authlogin