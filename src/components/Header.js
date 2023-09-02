import React from "react";
import { AiOutlinePlus } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';


export default function Header() {
  return (
    <div className="flex w-full justify-between items-center">
    <div className="flex items-center">
    <div>
     <img src="/logo_bird1.svg" alt="logo" className="bg-black p-5" width={80} height={80}/>
     </div>
    <div className="bg-gray w-40 ml-5">
        <div className="flex items-center rounded-3xl bg-blue-600 p-2 pr-5 text-white " >
        <AiOutlinePlus className="mr-2"/>
        <h1 className="tracking-widest">Create Task</h1>
        </div>
    </div>
    <div className="vl"></div>
    <div className="flex items-center m-5">
        <input type="text" className="rounded-l-md p-1 w-52" placeholder="Search your query"/>
        <BiSearch className="bg-blue-600 text-white p-1 text-3xl rounded-r-md"/>
    </div>
    </div>
    <div className="flex items-center">
    <p className="p-1 relative pr-9 pl-4 left-7 rounded-3xl bg-white">Ranjith Rajak | Senior Developer</p>
    <img src="/user1.jpeg" width={50} height={50} alt="user" className="image z-10" />
    <select className="m-3 bg-blue-600 text-white">
    <option ></option>
    <option ></option>
    <option ></option>
    <option ></option>
  </select>
  </div>
    </div>
  );
}
