import { useFormik } from "formik"
import MainLogo from "./MainLogo"
import { loginSchema } from "../../schemas"


const Login = () => { 

    const formik = useFormik({
        initialValues: {
            email:'',
            password:''
        },
        validationSchema : loginSchema,
        onSubmit : (values) => {
            console.log(values);      
        }
    })

  return (
    <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
                <div><MainLogo/></div>
                <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Login to your account
                </h2>
            </div>
            <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST" onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                            />
                        </div>
                        <p className="text-red-500">{formik.errors.email}</p>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                            </label>
                            <div className="text-sm">
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                Forgot password?
                            </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                            />
                        </div>
                        <p className="text-red-500">{formik.errors.password}</p>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                            Login
                        </button>
                    </div>
                </form>
                <p className="mt-9 text-center text-sm text-gray-500">Not a member ?</p>
                <button className="flex w-full justify-center rounded-md bg-gray-200 px-3 py-1.5 my-1.5 text-md font-semibold leading-6 text-gray-600 shadow-sm hover:bg-gray-300 hover:text-gray-800"><a href="/create">Create Your Account</a></button>
            </div>
        </div>
    </div>
  )
}

export default Login
