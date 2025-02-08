import React from 'react';
import { motion } from "motion/react"
import LogInForm from './LogInForm';
const LogIn = () => {
     return (
          <div>
               <motion.div
               initial={{ opacity: 0, scale: 0.5}}
               animate={{opacity: 1, scale: 1}}
               className='rounded-2xl'
               >
                    <LogInForm></LogInForm>
               </motion.div>
          </div>
     );
};

export default LogIn;