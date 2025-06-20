import CommonForm from '@/components/common/Form'
import { loginFormControls } from '@/config'
import { loginUser } from '@/store/auth-slice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const Authlogin = () => {

    const [formData, setformData] = useState({
        userName:"",
        email:"",password:""
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (e) => {
      e.preventDefault();

      dispatch(loginUser(formData)).then((data) =>{
        if(data?.payload?.success) {
          toast("Login successful");
          // navigate("/shop");
        }
        else {
          toast(data?.payload?.message || "Login failed or user not found", { variant: "destructive" });
          console.log(data?.payload?.message || "Login failed or user not found");
        }        
      })

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