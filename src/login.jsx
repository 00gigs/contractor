import { createClient } from "@supabase/supabase-js";

import {supabase} from './supabase/supabaseauth'

import React from 'react'

export const login = () => {


const signUp = async()=>{
  let { data, error } = await supabase.auth.signUp({
    email: 'someone@email.com',
    password: 'lnNaTHLBbVMmVKUtnmlt'
  })
}

 


  return (
    <div>
      <button type="button" onClick={signUp}
    </div>
  )
}
