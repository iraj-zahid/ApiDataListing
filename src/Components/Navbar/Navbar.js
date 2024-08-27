import { useState } from "react"

const Navbar = (prop) => {
    const searchedvalue = (e) => {
        prop.setSearchValue(e.target.value)
    }
    return(
        <>
        <div className="w-full p-[1%] flex items-end justify-center gap-[24rem] border-gray-300 border-3">
          <h1>SMRT</h1>
          <ul className="flex items-center justify-center gap-6 text-blue-600 text-3xl">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <input  className="p-[2px] border-black border-2" onChange={searchedvalue} placeholder="search..."/>
        </div>
        </>
    
    )
}
export default Navbar