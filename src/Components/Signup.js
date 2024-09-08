

const Signup = () => {
    
   
  
    return(
        <>
       <div className=" w-[full] p-[5%] pt-[4%] flex items-center justify-center">
       <div className={` w-[30%] p-[5%] bg-[black] flex flex-col  rounded-xl`}>
        <h5 className="pl-6 text-blue-300 IBM text-2xl">Signup</h5>
                <div className="w-full p-6 pb-16 pt-[8%] flex flex-col items-center justify-center">
                    <div class="w-full ">
                        <label class="block uppercase tracking-wide text-white text-xs 2xl:text-xl font-bold mb-2" for="grid-first-name">
                            username
                        </label>
                        <input class="appearance-none block w-[90%] 2xl:w-[90%] bg-[#ffffff33] text-sm text-white rounded-3xl p-3 2xl:text-2xl mb-[2rem] leading-tight focus:outline-none " id="grid-first-name" placeholder="Title of Blog" />
                    </div>
                    <div class="w-full ">
                        <label class="block uppercase tracking-wide text-white text-xs 2xl:text-xl font-bold mb-2" for="grid-first-name">
                            email
                        </label>
                        <input class="appearance-none block w-[90%] 2xl:w-[90%] bg-[#ffffff33] text-sm text-white rounded-3xl p-3 2xl:text-2xl mb-[2rem] leading-tight focus:outline-none " id="grid-first-name" placeholder="Title of Blog" />
                    </div>
                    <div class="w-full ">
                        <label class="block uppercase tracking-wide text-white text-xs 2xl:text-xl font-bold mb-2" for="grid-first-name">
                            create password
                        </label>
                        <input class="appearance-none block w-[90%] 2xl:w-[90%] bg-[#ffffff33] text-sm  text-white rounded-3xl p-3 2xl:text-2xl mb-[2rem] leading-tight focus:outline-none " id="grid-first-name" placeholder="Title of Blog" />
                    </div>
                    <div class="w-full ">
                        <label class="block uppercase tracking-wide text-white text-xs 2xl:text-xl font-bold mb-2" for="grid-first-name">
                            DOB
                        </label>
                        <input type="date" class="appearance-none block w-[90%] 2xl:w-[90%] bg-[#ffffff33] text-sm text-white rounded-3xl p-3 2xl:text-2xl mb-[2rem] leading-tight focus:outline-none " id="grid-first-name" placeholder="Title of Blog" />
                    </div>
                    <div className="w-full flex justify-end ">
                    <button className=" bg-blue-600 hover:bg-blue-500 w-[160px] 2xl:w-[170px] text-white font-bold 2xl:text-2xl rounded h-[40px] 2xl:h-[50px]">
                        Next
                    </button>
                    </div>
                </div>
            </div>
       </div>
        </>
    )
}
export default Signup