import Lottie from 'lottie-react';
import errorPage from '../../../public/error.json';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
     return (
          <div className='w-7/12 mx-auto pt-32 h-screen flex flex-col items-center'>
               <div className='w-96'>
                    <Lottie animationData={errorPage} className='text-secondary-color'></Lottie>
               </div>
               <div className='flex flex-col gap-5 text-center'>
                    <h2 className='text-4xl font-bold text-maroon-color'>404 - Page Not Found</h2>
                    <p className='text-gold-color font-semibold text-lg'>
                    We couldn’t find the page you were looking for. Try heading back home.
                    </p>
                    <div>
                    <Link to='/' className='text-white bg-maroon-color py-2 px-8 rounded-3xl '>Go To Homepage</Link>
                    </div>
               </div>
          </div>
     );
};

export default ErrorPage;