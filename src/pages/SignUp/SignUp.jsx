import { useEffect, useState } from 'react';
import loginImage from '../../assets/image/login.svg';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import GoggleLogin from '../../Components/GoogleLogin/GoogleLogin';




const SignUp = () => {

    const { handleSubmit, register, control } = useForm();
    const password = useWatch({ control, name: 'password' });
    const confirmPassword = useWatch({ control, name: 'confirmPassword' });
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true);


    useEffect(() => {
        if (
            password !== undefined &&
            password !== '' &&
            confirmPassword !== undefined &&
            confirmPassword !== '' &&
            password === confirmPassword
        ) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [password, confirmPassword]);

    const onSubmit = ({ name, email, password }) => {
        // Email Password signup


        console.log(name, email, password);
    };



    return (
        <div className="flex max-w-7xl mx-auto md:h-screen items-center">
            <div className="hidden md:block md:w-1/2">
                <img src={loginImage} className="md:h-3/4 md:w-3/4" alt="" />
            </div>
            <div className="w-full md:w-1/2  grid place-items-center">
                <div className="bg-primary/5 w-full max-w-sm rounded-lg grid place-items-center p-5">
                    <h1 className="mb-6 font-medium text-2xl">Sign up</h1>
                    <form className="space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col items-start">
                            <label htmlFor="email">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full rounded-md"
                                {...register('name')}
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full rounded-md"
                                {...register('email')}
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="image">Image</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full rounded-md"
                                {...register('image')}
                            />
                        </div>
                        <div className=' flex flex-col md:flex-row md:gap-2 '>
                            <div className="flex flex-col items-start">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full rounded-md"
                                    {...register('password')}
                                />
                            </div>
                            <div className="flex flex-col items-start">
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    className="w-full rounded-md"
                                    {...register('confirmPassword')}
                                />
                            </div>
                        </div>
                        <div className="mt-3 ">
                            <button
                                type="submit"
                                className="btn bg-orange-500 w-full disabled:text-orange-500 disabled:cursor-not-allowed"
                                disabled={disabled}
                            >
                                Sign up
                            </button>
                        </div>
                        <div>
                            <p>
                                Already have an account?{' '}
                                <span
                                    className="text-orange-500 hover:underline cursor-pointer"
                                    onClick={() => navigate('/signin')}
                                >
                                    Sign-in
                                </span>
                            </p>
                        </div>
                        <GoggleLogin />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;