import {CreateClient} from './supabase/authconfig'
import Cookies from 'js-cookie';
import React from 'react'
import {redirect} from 'react-router-dom'

export const login = () => {
    
    async function signUpNewUser(formData) {
        "use server"
        const origin = response.headers.get('origin');
        const email = formData.get('email')
        const password = formData.get('password')
        const cookieStore = Cookies()
        const supabase = CreateClient(cookieStore)
        const { error } = await supabase.auth.signUp({
          email ,
          password,
          emailRedirectTo:`${origin}/auth/callback`
        })
        if(error){
            return('error signing up user')
        }
      }
      
      async function signInWithEmail(formData) {
        "use server"
        const email = formData.get('email')
        const password = formData.get('password')
       const cookieStore = Cookies()
       const supabase =CreateClient(cookieStore)
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password
        })
        if(error){
            return('could not sign in user, please try again ',error)
        }
        return('/')
      }
      


    


  return (
    <div>
        <form>
            <input name='email' placeholder='email'/>
            <input name='password' placeholder='password'/>
            <button type='button' onClick={signUpNewUser}>Signup</button>
            <button type='button' onClick={signInWithEmail}>Login</button>
        </form>
    </div>
  )
}

