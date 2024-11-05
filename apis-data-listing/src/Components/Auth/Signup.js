import { useState } from 'react';
import { isLogin } from '../../store/slices/isLoginSlice';
import { isSignup } from '../../store/slices/isSignupSlice';
import { useDispatch } from 'react-redux';
import axios from "axios";

const Signup = () => {
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({
        name:null,
        email:null,
        password:null,
        imageName:null,
        image:null,
    })
    const goToLogin = () => {
        dispatch(isSignup(false))
    }
    const takingImageFunction = (event) => {
        setUserData((e) => ({
            ...e, image: event.target.files[0], imageName: event.target.files[0].name
        }))
    }
    const submit = async (e) => {
        dispatch(isSignup(false))
        e.preventDefault()
        const dataOfUser = new FormData()
        dataOfUser.append('name', userData.name)
        dataOfUser.append('email', userData.email)
        dataOfUser.append('password', userData.password)
        dataOfUser.append('imageName', userData.imageName)
        dataOfUser.append('image', userData.image)
        const data = await axios.post('http://localhost:5000/apis/usersData/create', dataOfUser   )
    }

    return (
        <>
            <div className="max-[700px]:py-[20%] max-[700px]:px-[5%] flex items-center justify-center dark:bg-gray-900">
                <section class="w-full dark:bg-gray-900">
                    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Create an account
                                </h1>
                                <form class="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label for="name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Your name</label>
                                        <input onChange={(event) => {setUserData((prevValue) => ({...prevValue, name:event.target.value}))}} type="name" name="name" id="nail" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name here" required="" />
                                    </div>
                                    <div>
                                        <label for="email" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input onChange={(event) => {setUserData((prevValue) => ({...prevValue, email:event.target.value}))}} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required="" />
                                    </div>
                                    <div>
                                        <label for="password" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Password</label>
                                        <input onChange={(event) => {setUserData((prevValue) => ({...prevValue, password:event.target.value}))}} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div class="relative z-0 w-full mb-[7%] group">
                                        <div class="flex items-center justify-center w-full">
                                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-34 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg class="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                    </svg>
                                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p class="text-xs text-gray-500 dark:text-gray-400">Your Profile Picture</p>
                                                </div>
                                                <input onChange={takingImageFunction} id="dropzone-file" type="file" class="hidden" />
                                            </label>
                                        </div>
                                    </div>
                                    <button onClick={submit} class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account? <a onClick={goToLogin} class="font-medium cursor-pointer text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Signup