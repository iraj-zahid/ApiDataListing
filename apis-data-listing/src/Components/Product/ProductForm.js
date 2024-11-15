import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
    const navigate = useNavigate()
    const loginUserData = useSelector((reducers) => reducers.loginData)
    const [error, setError] = useState(false)
    console.log(loginUserData)
    const [productData, setProductData] = useState({
        category: "",
        title: "",
        description: "",
        price: "",
        image: [],
        imageName: [],
        stock: '',
        actualPrice: '',
        rating: '',
        email:loginUserData.email
    })

    const takingImageFunction = (event) => {
        setProductData(prev => ({
            ...prev,
            image: event.target.files
        }))
        const files = Array.from(event.target.files)
        files.map(file => {
            setProductData(prev => ({
                ...prev,
                imageName: [...prev.imageName, file.name]
            }))
        })
        setError(false)
    }
    const submit = async (e) => {
        if(productData.category && productData.title && productData.description && productData.price && productData.actualPrice && productData.stock && productData.imageName.length > 0 && productData.rating){
        e.preventDefault()
        const dataOfProduct = new FormData()
        dataOfProduct.append('category', productData.category)
        dataOfProduct.append('title', productData.title)
        dataOfProduct.append('description', productData.description)
        dataOfProduct.append('price', productData.price)
        dataOfProduct.append('imageName', productData.imageName)
        dataOfProduct.append('stock', productData.stock)
        dataOfProduct.append('actualPrice', productData.actualPrice)
        dataOfProduct.append('rating', productData.rating)
        dataOfProduct.append('email', productData.email)
        Array.from(productData.image).map((file) => {
            dataOfProduct.append('image', file)
        })
        const data = await axios.post('http://localhost:5000/apis/products/create', dataOfProduct)
        navigate("/")
        setError(false)
        }
        else{
            setError(true)
        }
    }
    return (
        <>
            <div className="w-full p-[1%] bg-[#F2F3F2] dark:bg-[#101014]">
                <form class="w-[70%] mx-auto gap-4 pb-[3%]">
                    <div className="w-full p-[1%] mb-[5%] mt-[5%] flex items-center justify-center">
                        <p className="text-4xl IBM font-bold dark:text-white">Create your product</p>
                    </div>
                {error && <p className='text-[#ff1919] hubot text-lg'>Something is Wrong! Try Again</p>}

                    <div class="relative z-0 w-full mb-[7%] group">
                        <input type="text" onChange={(event) => { setProductData(prevValue => ({ ...prevValue, category: event.target.value }))
                    setError(false) }} class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="category" class="peer-focus:font-large absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
                    </div>
                    <div class="relative z-0 w-full mb-[7%] group">
                        <input type="text" onChange={(event) => { setProductData(prevValue => ({ ...prevValue, title: event.target.value })) 
                    setError(false)}} class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="title" class="peer-focus:font-large absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                    </div>
                    <div class="relative z-0 w-full mb-[7%] group">
                        <input type="text" onChange={(event) => { setProductData(prevValue => ({ ...prevValue, description: event.target.value }))
                    setError(false) }} class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="description" class="peer-focus:font-large absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                    </div>
                    <div class="relative z-0 w-full mb-[7%] group">
                        <input type="number" onChange={(event) => { setProductData(prevValue => ({ ...prevValue, price: event.target.value }))
                    setError(false) }} class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="price" class="peer-focus:font-large absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Current Price</label>
                    </div>
                    <div class="relative z-0 w-full mb-[7%] group">
                        <input type="number" onChange={(event) => { setProductData(prevValue => ({ ...prevValue, actualPrice: event.target.value }))
                    setError(false) }} class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="price" class="peer-focus:font-large absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Actual Price</label>
                    </div>
                    <div class="relative z-0 w-full mb-[7%] group">
                        <input type="tel" onChange={(event) => { setProductData(prevValue => ({ ...prevValue, stock: [event.target.value] }))
                    setError(false) }} class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="price" class="peer-focus:font-large absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Stock Left</label>
                    </div>
                    <div class="relative z-0 w-full mb-[7%] group">
                        <input type="tel" onChange={(event) => { setProductData(prevValue => ({ ...prevValue, rating: [event.target.value] })) 
                    setError(false)}} class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="price" class="peer-focus:font-large absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rating</label>
                    </div>
                    <div class="relative z-0 w-full mb-[7%] group">
                        <div class="flex items-center justify-center w-full">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input onChange={takingImageFunction} id="dropzone-file" type="file" multiple class="hidden" />
                            </label>
                        </div>
                        <p className="dark:text-gray-200">{productData.imageName.length > 0 ? productData.imageName.length: "0"} files attached</p>
                    </div>
                    
                    <button onClick={submit} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </div>
        </>)
}

export default ProductForm