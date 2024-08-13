import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../services/AuthServices";
import { setToast } from "../redux/slice/toastSlice";
import { useDispatch } from "react-redux";
import { Button } from "../components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { setAuthLogin } from "../redux/slice/authSlice";


type Inputs = {
    email: string
    password: string
};

const Login = () => {


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {register, handleSubmit, watch,formState: { errors }} = useForm<Inputs>();
    const [loading, setLoading] = useState<boolean>(false)
 
    const loginHandler: SubmitHandler<Inputs> = async (payload) => {
        setLoading(true)
        try {
            const auth = await login(payload)
            dispatch(setToast({ message:'Đăng nhập thành công', type:'success' }))
            dispatch(setAuthLogin(auth))
            auth && navigate('/dashboard')
        } catch (error) {
            
        }finally{
            setLoading(false); //Ket thuc loading sau khi dang nhap hoan tat
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-lg font-bold mb-6 text-center">Login</h1>
                <form onSubmit={handleSubmit(loginHandler)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input 
                        type="text" 
                        id="email" 
                        placeholder="" 
                        className="w-full p-3 border border-gray-700 rounded focus:outline-none focus:ring focus-blue-200 h-11"
                        {...register("email", { required: true })}
                        />
                        {errors.email && <span className="text-red-500 text-xs">Bạn phải nhập vào email</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Mật khẩu:</label>
                        <input 
                        type="password" 
                        id="password" 
                        placeholder="" 
                        className="w-full p-3 border border-gray-700 rounded focus:outline-none focus:ring focus-blue-200 h-11"
                        {...register("password", { required: true })}
                        />
                        {errors.password && <span className="text-red-500 text-xs">Bạn phải nhập vào mật khẩu</span>}
                    </div>
                    <div className="md-4">
                        <Button disabled={loading} className="w-full bg-blue-500 text-white hover:bg-blue-700 py-3 rounded-md">
                            { loading ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> :null }
                            { loading ? 'Đang xử lí' : 'Đăng nhập' }
                        </Button>
                    </div>
                    <p className="text-center text-gray-700">
                        <a href="/" className="text-blue-700">Quên mật khẩu</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login