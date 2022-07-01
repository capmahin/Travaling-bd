import React, { useState, useEffect } from "react";

const url = "https://task-server-eight.vercel.app";

const ToDoList = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    fetch(`${url}/bookings`)
      .then((res) => res.json())
      .then((response) => {
        const data = response;
        console.log("data is", data);
        let finalResult = {};
        response.forEach((eachObject) => {
          const { slut, description } = eachObject;
          if (!finalResult[slut]) {
            finalResult[slut] = [description];
          } else {
            finalResult[slut].push(description);
          }
        });
        setState(finalResult);
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-6">
        {Object.keys(state).length !== 0 &&
          Object.keys(state).map((eachTitle) => {
            const currentData = state[eachTitle];
            return (
              <div className="flex flex-col col-span-1 p-2 border-1 border-gray-400 rounded-lg shadow-lg my-2 mx-4 bg-gray-300">
                <p className="underline text-center">{eachTitle}</p>
                {currentData.map((eachDescription) => (
                  <p>{eachDescription}</p>
                ))}
              </div>
            );
          })}
      </div>
      {Object.keys(state).length === 0 && (
        <p className="text-red-500 underline text-center">
          There is no to-do list
        </p>
      )}
      <button onClick={() => console.log("state is", state)}>
        Click to see state
      </button>
    </div>
  );
};

export default ToDoList;
