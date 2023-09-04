"use client";
import React, { useContext, useState, useEffect } from "react";
import { CounterContext } from "@/context/counter.context";

export default function page() {
  const [showModal, setShowModal] = useState(false);
  const { formData, setFormData } = useContext(CounterContext);
  const [desc, setDesc] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState(false);
  const [index, setIndex] = useState();
  const [flipdate, setFlipDate] = useState("");
  const [colorMap, setColorMap] = useState({});

  const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];

  function buttonHandle(item) {
    setDesc(item.description);
    setTask(item.taskStatus);
    setDate(item.dueDate);
    // const data1=(item.dueDate);
    // const parts1=data1.split('-')
    // flipdate(`${parts1[0]}-${parts1[1]}-${parts1[2]}`)
    setShowModal(true);
  }

  function handleDelete() {
    const newData = [...formData];
    newData.splice(index, 1);
    setFormData(newData);
    setShowModal(false);
  }

  function handleSubmit() {
    const parts = date.split("-");
    const newData = [...formData]; // Create a copy of the formData array
    newData[index] = {
      description: desc,
      taskStatus: task,
      dueDate: `${parts[2]}-${parts[1]}-${parts[0]}`,
    };
    setFormData(newData);
    console.log("val", desc, task, date);
    console.log(formData);
    setShowModal(false);
  }

  return (
    <div className="flex min-h-screen flex-col items-start p-5">
      <div className="flex items-center">
        <div className="w-36 h-20 bg-black"></div>
        <div className="v2"></div>
        <p className="text-3xl">Website Development Tracker</p>
      </div>
      <br />
      <br />
      <div className="flex w-full flex-wrap">
        <div className="w-[30%] border-container  p-3 border mr-10">
          <h1 className="ml-2 pb-2">Task to do</h1>
          <hr style={{ border: "1px solid gray" }} />
          {formData
            .filter((item) => item.taskStatus === "To do")
            .map((item, index) => (
              <button
                key={index}
                className={`w-full text-left mt-2 mb-2 p-2 rounded ${
                  colors[Math.floor(Math.random() * colors.length)]
                }`}
                onClick={() => {
                  setDesc(item.description);
                  setTask(item.taskStatus);
                  setDate(item.dueDate);
                  setShowModal(true);
                  setIndex(index);
                }}
              >
                <h1 className="text-xl">{item.description}</h1>
                <p className="text-[12px]">
                  <strong>Due Date :</strong>
                  {item.dueDate}
                </p>
              </button>
            ))}
        </div>
        <div className="w-[30%] border-container p-3 border mr-10">
          <div>
            <h1 className="ml-2 pb-2">In progress</h1>
            <hr style={{ border: "1px solid gray" }} />
            {formData
              .filter((item) => item.taskStatus === "In progress")
              .map((item, index) => (
                <button
                  key={index}
                  className={`w-full text-left mt-2 mb-2 p-2  rounded ${
                    colors[Math.floor(Math.random() * colors.length)]
                  }`}
                  onClick={() => {
                    setDesc(item.description);
                    setTask(item.taskStatus);
                    setDate(item.dueDate);
                    setShowModal(true);
                  }}
                >
                  <h1>{item.description}</h1>
                  <p className="text-[12px]">
                    <strong>Due Date :</strong>
                    {item.dueDate}
                  </p>
                </button>
              ))}
          </div>
        </div>
        <div className="w-[30%] border-container p-3 border ">
          <div>
            <h1 className="ml-2 pb-2">Task done</h1>
            <hr style={{ border: "1px solid gray" }} />
          </div>
          {formData
            .filter((item) => item.taskStatus === "Tasks done")
            .map((item, index) => (
              <button
                key={index}
                className={`w-full text-left mt-2 mb-2 p-2  rounded ${
                  colors[Math.floor(Math.random() * colors.length)]
                }`}
                onClick={(item) => buttonHandle(item)}
              >
                <h1>{item.description}</h1>
                <p className="text-[12px]">
                  <strong>Due Date :</strong>
                  {item.dueDate}
                </p>
              </button>
            ))}
        </div>
      </div>
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
                      value={desc}
                      className="bg-gray-100 "
                      placeholder="feed the task guideline and information"
                      onChange={(e) => setDesc(e.target.value)}
                      style={{
                        WebkitFontStyle: "normal", // Use Webkit prefix for Webkit-specific properties
                        fontStyle: "normal", // Standard property for non-Webkit browsers
                      }}
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
                        checked={task === "To do"}
                        onChange={(e) => setTask(e.target.value)}
                      />
                        <label htmlFor="html">To do</label> {" "}
                      <input
                        type="radio"
                        id="css"
                        name="fav_language"
                        value="In progress"
                        checked={task === "In progress"}
                        onChange={(e) => setTask(e.target.value)}
                      />
                        <label htmlFor="in progress">In progress</label> {" "}
                      <input
                        type="radio"
                        id="javascript"
                        name="fav_language"
                        value="Tasks done"
                        checked={task === "Tasks done"}
                        onChange={(e) => setTask(e.target.value)}
                      />
                        <label htmlFor="task done">Tasks done</label>
                      <br />
                    </div>
                    <p className="mt-2 text-[18px] leading-relaxed text-black">
                      Due date*
                    </p>
                    <input
                      value={date}
                      type="date"
                      id="birthday"
                      name="birthday"
                      onChange={(e) => setDate(e.target.value)}
                    ></input>
                    <br />
                    <div className="flex">
                      <button
                        className="w-1/2 mt-2 p-2.5 mr-1 flex-1 text-white bg-red-500 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
                      <button
                        className="w-1/2 mt-2 p-2.5 flex-1 text-white bg-blue-500 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                        onClick={handleSubmit}
                      >
                        Update Task
                      </button>
                    </div>
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
