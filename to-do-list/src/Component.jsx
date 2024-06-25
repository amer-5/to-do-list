import { useState } from "react";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addToDo() {
    // add task to array
    if (newTask.trim() !== "") {
      setToDoList((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function removeToDo(index) {
    // remove task from array
    setToDoList((t) => t.filter((t, i) => i !== index));
  }
  function markAsDone(index) {
    // add done class to task
    document.getElementById(`todo-${index}`).classList.add("done");
  }

  return (
    <>
      <div className="toDoList">
        <div className="inputField">
          <input
            type="text"
            value={newTask}
            placeholder="Enter To-Do"
            onChange={handleInputChange}
          />
          <button onClick={addToDo} className="addButton">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 12C24 12.2652 23.8946 12.5196 23.7071 12.7071C23.5196 12.8946 23.2652 13 23 13H13V23C13 23.2652 12.8946 23.5196 12.7071 23.7071C12.5196 23.8946 12.2652 24 12 24C11.7348 24 11.4804 23.8946 11.2929 23.7071C11.1054 23.5196 11 23.2652 11 23V13H1C0.734784 13 0.48043 12.8946 0.292893 12.7071C0.105357 12.5196 0 12.2652 0 12C0 11.7348 0.105357 11.4804 0.292893 11.2929C0.48043 11.1054 0.734784 11 1 11H11V1C11 0.734784 11.1054 0.48043 11.2929 0.292893C11.4804 0.105357 11.7348 0 12 0C12.2652 0 12.5196 0.105357 12.7071 0.292893C12.8946 0.48043 13 0.734784 13 1V11H23C23.2652 11 23.5196 11.1054 23.7071 11.2929C23.8946 11.4804 24 11.7348 24 12Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <p className="tasksToDo">Tasks to do - {toDoList.length}</p>
        <ul>
          {toDoList.map((task, index) => (
            <li key={index} id={`todo-${index}`}>
              {task}
              <div className="buttons">
                <button
                  onClick={() => markAsDone(index)}
                  className="markAsDoneButton"
                >
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.7851 6.67391L8.78513 17.6739C8.72128 17.7378 8.64546 17.7885 8.56199 17.8231C8.47853 17.8577 8.38907 17.8755 8.29872 17.8755C8.20837 17.8755 8.11891 17.8577 8.03545 17.8231C7.95199 17.7885 7.87617 17.7378 7.81232 17.6739L2.99982 12.8614C2.87081 12.7324 2.79834 12.5574 2.79834 12.375C2.79834 12.1926 2.87081 12.0176 2.99982 11.8886C3.12882 11.7596 3.30378 11.6871 3.48622 11.6871C3.66866 11.6871 3.84363 11.7596 3.97263 11.8886L8.29872 16.2155L18.8123 5.70109C18.9413 5.57209 19.1163 5.49962 19.2987 5.49962C19.4812 5.49962 19.6561 5.57209 19.7851 5.70109C19.9141 5.8301 19.9866 6.00506 19.9866 6.1875C19.9866 6.36994 19.9141 6.5449 19.7851 6.67391Z"
                      fill="#9E78CF"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => removeToDo(index)}
                  className="markAsDoneButton"
                >
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.6112 4.125H3.48622C3.30388 4.125 3.12902 4.19743 3.00009 4.32636C2.87115 4.4553 2.79872 4.63016 2.79872 4.8125C2.79872 4.99484 2.87115 5.1697 3.00009 5.29864C3.12902 5.42757 3.30388 5.5 3.48622 5.5H4.17372V17.875C4.17372 18.2397 4.31859 18.5894 4.57645 18.8473C4.83431 19.1051 5.18405 19.25 5.54872 19.25H16.5487C16.9134 19.25 17.2631 19.1051 17.521 18.8473C17.7789 18.5894 17.9237 18.2397 17.9237 17.875V5.5H18.6112C18.7936 5.5 18.9684 5.42757 19.0974 5.29864C19.2263 5.1697 19.2987 4.99484 19.2987 4.8125C19.2987 4.63016 19.2263 4.4553 19.0974 4.32636C18.9684 4.19743 18.7936 4.125 18.6112 4.125ZM16.5487 17.875H5.54872V5.5H16.5487V17.875ZM6.92372 2.0625C6.92372 1.88016 6.99615 1.7053 7.12509 1.57636C7.25402 1.44743 7.42888 1.375 7.61122 1.375H14.4862C14.6686 1.375 14.8434 1.44743 14.9724 1.57636C15.1013 1.7053 15.1737 1.88016 15.1737 2.0625C15.1737 2.24484 15.1013 2.4197 14.9724 2.54864C14.8434 2.67757 14.6686 2.75 14.4862 2.75H7.61122C7.42888 2.75 7.25402 2.67757 7.12509 2.54864C6.99615 2.4197 6.92372 2.24484 6.92372 2.0625Z"
                      fill="#9E78CF"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
