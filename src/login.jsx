import {createClient} from './supabase/authconfig'
import Cookies from 'universal-cookie';
import React from 'react'

export const login = () => {
    
    async function signUpNewUser(formData) {
        "use server"
        const email = formData.get('email')
        const password = formData.get('password')
        const { error } = await supabase.auth.signUp({
          email ,
          password,
          Cookies
        })
      }
      
      async function signInWithEmail() {
        "use server"
        const { data, error } = await supabase.auth.signInWithPassword({
          email: 'example@email.com',
          password: 'example-password'
        })
        return('/')
      }
      


    


  return (
    <div>
        <form>
            <input></input>
            <input></input>
        </form>
    </div>
  )
}

