import React from 'react';
import { motion } from "motion/react"
import SignUpForm from './SignUpForm';

const SignUp = () => {
     return (
          
          <div className='pt-20'>
               <motion.div
               initial={{ opacity: 0, scale: 0.5}}
               animate={{opacity: 1, scale: 1}}
               className='rounded-2xl'
               >
                    <SignUpForm></SignUpForm>
               </motion.div>
          </div>
     );
};

export default SignUp;