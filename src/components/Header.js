"use client";
import React, { useState, useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { CounterContext } from "@/context/counter.context";
export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [desc, setDesc] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState(false);
  const { formData, setFormData } = useContext(CounterContext);

  function handleSubmit() {
    const parts = date.split("-");
    const newTask = {
      description: desc,
      taskStatus: task,
      dueDate: `${parts[2]}-${parts[1]}-${parts[0]}`,
    };
    console.log(desc, task, date);
    setFormData((prev) => [...prev, newTask]);
    console.log(formData);
    console.log(newTask);
    setShowModal(false);
  }
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex items-center">
        <div>
          <img
            src="/logo_bird1.svg"
            alt="logo"
            className="bg-black p-5"
            width={80}
            height={80}
          />
        </div>

        <div className="bg-gray w-40 ml-5">
          <button
            className="flex items-center rounded-3xl bg-blue-600 p-2 pr-5 text-white "
            type="button"
            onClick={() => setShowModal(true)}
          >
            <AiOutlinePlus className="mr-2" />
            <h1 className="tracking-widest">Create Task</h1>
          </button>
        </div>

        <div className="vl"></div>
        <div className="flex items-center m-5">
          <input
            type="text"
            className="rounded-l-md p-1 w-52"
            placeholder="Search your query"
          />
          <BiSearch className="bg-blue-600 text-white p-1 text-3xl rounded-r-md" />
        </div>
      </div>
      <div className="flex items-center">
        <p className="p-1 relative pr-9 pl-4 left-7 rounded-3xl bg-white">
          Ranjith Rajak | Senior Developer
        </p>
        <img
          src="/user1.jpeg"
          width={50}
          height={50}
          alt="user"
          className="image z-10"
        />
        <select className="m-3 bg-blue-600 text-white">
          <option></option>
        </select>
      </div>
      {/* modal */}
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-sm p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="mt-3 sm:flex">
                  <div className="mt-2 text-center sm:ml-4 sm:text-left">
                    <h4 className="text-lg font-medium text-gray-800">
                      Create a Task for the team
                    </h4>
                    <hr style={{ border: "1px solid gray" }}></hr>
                    <p className="mt-2 text-[18px] leading-relaxed text-black">
                      add a description*
                    </p>
                    <textarea
                      id="w3review"
                      name="w3review"
                      rows="4"
                      cols="35"
                      className="bg-gray-100 "
                      placeholder="feed the task guideline and information"
                      onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                    <p className="mt-2 text-[18px] leading-relaxed text-black">
                      Select Task Status*
                    </p>
                    <div className="mt-2 mb-2">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="To do"
                        onChange={(e) => setTask(e.target.value)}
                      />
                        <label htmlFor="html">To do</label> {" "}
                      <input
                        type="radio"
                        id="css"
                        name="fav_language"
                        value="In progress"
                        onChange={(e) => setTask(e.target.value)}
                      />
                        <label htmlFor="css">In progress</label> {" "}
                      <input
                        type="radio"
                        id="javascript"
                        name="fav_language"
                        value="Tasks done"
                        onChange={(e) => setTask(e.target.value)}
                      />
                        <label htmlFor="javascript">Tasks done</label>
                      <br />
                    </div>
                    <p className="mt-2 text-[18px] leading-relaxed text-black">
                      Due date*
                    </p>
                    <input
                      type="date"
                      id="birthday"
                      name="birthday"
                      onChange={(e) => setDate(e.target.value)}
                    ></input>
                    <br />
                    {/* <div className="items-center gap-2 mt-3 sm:flex"> */}
                    <button
                      className="w-1/2 mt-2 p-2.5 flex-1 text-white bg-blue-500 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                      onClick={handleSubmit}
                    >
                      Create task
                    </button>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
