import React, { useState } from 'react';

function App() {
  const [theme, setTheme] = useState("light");
 
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  console.log(theme)


  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const [activeButton, setActiveButton] = useState("All");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      const newTask = {
        text: inputValue,
        completed: false, // Initially, the task is not completed
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const clearAllTasks = () => {
    const remainingTasks = tasks.filter(task => !task.completed);
    setTasks(remainingTasks);
  };
    // filter
    const [filter, setFilter] = useState("All");
    const addTask = () => {
      if (inputValue.trim() !== '') {
        const newTask = {
          text: inputValue,
          completed: false, // Initially, the task is not completed
        };
        setTasks([...tasks, newTask]);
        setInputValue('');
      }
    };

    const filteredTasks = tasks.filter((task) => {
      if (filter === "All") {
        return true; // Show all tasks
      } else if (filter === "Active") {
        return !task.completed; // Show active tasks (not checked)
      } else if (filter === "Completed") {
        return task.completed; // Show completed tasks (checked)
      }
    });
    // filter

    const countUncheckedTasks = () => {
      return tasks.filter(task => !task.completed).length;
    };


  return (
    <>
    {/* <div className="w-full h-[100vh] bg-black z-0 mt-0" > */}
      <div className="relative w-[327px] mx-auto mt-[48px] sm:w-[540px]">

        <div className="flex w-full h-[20px] items-center justify-between">

        <h1 className="text-20px text-[#FFF] sm:text-40px">TODO</h1>

        {theme === 'dark' ? (
          <img src="./images/icon-sun.svg" alt="Sun" onClick={changeTheme} />
        ) : (
          <img src="./images/icon-moon.svg" alt="Moon" onClick={changeTheme} />
        )
        }

        </div>

        <label className="flex w-full h-[64px] bg-[#FFF] items-center pl-[20px] pr-[20px] mt-[45px] rounded-[5px] shadow-shadowConts">
          
          <input type="checkbox"/>
          <input type="text" placeholder='Create a new todo…' className=' outline-none ml-[12px] text-taskCOlor text-12px font-josefin h-[48px] sm:w-[350px] sm:text-18px sm:h-[64px]' value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyPress} />
          <button onClick={addTask} className=' show-on text-taskCOlor font-josefin text-12px ml-[35px] sm:text-18px'>Add Task</button>

        </label>

        <div className="relative w-full h-[368px] bg-[#FFF] mt-[16px] shadow-shadowConts rounded-[5px] overflow-auto sm:h-[439px]">

          <div>
            {filteredTasks.map((task, index) => (
              <div key={index} className="flex flex-col items-center justify-between">
                <label className={`flex w-full h-[48px] bg-[#FFF] justify-between items-center pl-[20px] pr-[20px] rounded-[5px] shadow-shadowConts ${task.completed ? 'completed-task' : 'active-task'}`}>
                  <div className="flex items-center">
                    <input type="checkbox" checked={task.completed} onChange={() => toggleTaskCompletion(index)} />
                    <span className={task.completed ? 'completed-task ml-[12px] sm:text-18px' : 'isnot-complete ml-[12px] sm:text-18px'}>{task.text}</span>
                  </div>
                  <img src="./images/icon-cross.svg" alt="Cross" onClick={() => removeTask(index)} />
                </label>
                <hr className='w-full h-[2px]' />
              </div>
            ))}
          </div>
    
        </div>
        <div className="absolute w-full h-[48px] bottom-[128px] left-0 bg-[#FFF] flex items-center flex-col sm:h-[69px] sm:bottom-[64px]">
            <hr className='w-full h-[2px]'/>
            <div className="w-full h-[48px] flex items-center justify-between px-[20px] sm:h-full">
              <span className=' text-active font-josefin text-12px sm:text-14px'>{countUncheckedTasks()} items left</span>
              <div className="filter-windows bg-[#FFF] shadow-shadowConts flex justify-between items-center">
                <div className="w-[166px] h-[18px] flex justify-between items-center mx-auto ">

                  <button className={activeButton === "All" ? "text-clickedBlue font-josefin text-14px" : "text-active font-josefin text-12px"}
                    onClick={() => {
                      setFilter("All");
                      setActiveButton("All");
                    }} >
                    All
                  </button>
                  <button className={activeButton === "Active" ? "text-clickedBlue font-josefin text-14px" : "text-active font-josefin text-14px"} 
                      onClick={() => {
                      setFilter("Active");
                      setActiveButton("Active");
                    }} >
                    Active
                  </button>
                  <button className={activeButton === "Completed" ? "text-clickedBlue font-josefin text-14px" : "text-active font-josefin text-14px"}
                    onClick={() => {
                      setFilter("Completed");
                      setActiveButton("Completed");
                    }} >
                    Completed
                  </button>

                </div>

              </div>
              <button onClick={clearAllTasks} className='text-active font-josefin text-12px sm:text-14px'>Clear Completed</button>
            </div>
        </div>

        <div className="w-full h-[48px] bg-[#FFF] shadow-shadowConts mt-[16px] flex justify-between items-center filter-mobile">

          <div className="w-[166px] h-[18px] flex justify-between items-center mx-auto ">

            <button className={activeButton === "All" ? "text-clickedBlue font-josefin text-14px" : "text-active font-josefin text-12px"}
                onClick={() => {
                  setFilter("All");
                  setActiveButton("All");
                }} >
                All
              </button>
              <button className={activeButton === "Active" ? "text-clickedBlue font-josefin text-14px" : "text-active font-josefin text-14px"} 
                onClick={() => {
                  setFilter("Active");
                  setActiveButton("Active");
                }} >
                Active
              </button>
              <button className={activeButton === "Completed" ? "text-clickedBlue font-josefin text-14px" : "text-active font-josefin text-14px"}
                onClick={() => {
                  setFilter("Completed");
                  setActiveButton("Completed");
                }} >
                Completed
              </button>

          </div>

        </div>

        <p className="text-active font-normal font-josefin text-center mt-[40px]">Drag and drop to reorder list</p>

      </div>
    
    {/* </div> */}

    </>
  )
}

export default App
