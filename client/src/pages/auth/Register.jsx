import CommonForm from '@/components/common/Form'
import { registerFormControls } from '@/config'
import { registerUser } from '@/store/auth-slice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const AuthRegister = () => {

    const [formData, setformData] = useState({
        userName:"",
        email:"",password:""
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = (e) => {
      e.preventDefault(); 

      dispatch(registerUser(formData)).then(() =>{
        navigate("/auth/login");
      })
      
      
    }
    console.log(formData);
    
  return (
    <div className='mx-auto w-full max-w-md space-y-6' >
        <div className='text-center ' >
            <h1 className='text-3xl font-bold tracking-tight text-foreground' >Create new account</h1>
            <p className='mt-2 ' >Already have an account
            <Link className='font-medium text-primary hover:underline ml-2' to="/auth/login" >Login</Link>
            </p>
            </div>
            <CommonForm
                formData={formData}
                setFormData={setformData}
                formControls={registerFormControls}
                buttonText={"Sign Up"}
                onSubmit={onSubmit}
            />
    </div>
  )
}

export default AuthRegister