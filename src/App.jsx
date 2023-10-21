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
        completed: false, 
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
          completed: false,
        };
        setTasks([...tasks, newTask]);
        setInputValue('');
      }
    };

    const filteredTasks = tasks.filter((task) => {
      if (filter === "All") {
        return true;
      } else if (filter === "Active") {
        return !task.completed;
      } else if (filter === "Completed") {
        return task.completed; 
      }
    });
    // filter

    const countUncheckedTasks = () => {
      return tasks.filter(task => !task.completed).length;
    };


  return (
    <>
      <div className={`w-full min-h-screen  ${theme === 'light' ? 'bg-backgroundWhite' : 'bg-backgroundBlack'}` }>
        {theme === 'light' ? (
          <div className="absolute top-0 left-0 z-0 w-full h-[200px] bg-img1 bg-cover sm:bg-img3 sm:h-[300px]"></div>
          ) : (
          <div className="absolute top-0 left-0 z-0 w-full h-[200px] bg-img2 bg-cover sm:bg-img4 sm:h-[300px]"></div>
          )
        }
    
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

            <label className={`flex w-full h-[64px] items-center pl-[20px] pr-[20px] mt-[45px] rounded-[5px] shadow-shadowConts ${theme === 'light' ? 'bg-[#FFF]' : 'bg-darkModeMain'}`}>
              
              <input type="checkbox"/>
              <input type="text" placeholder='Create a new todo…' className={`outline-none ml-[12px] text-12px font-josefin h-[48px] sm:w-[350px] sm:text-18px sm:h-[64px] ${theme === 'light' ? 'bg-[#FFF] text-taskCOlor' : 'bg-darkModeMain text-darkTaskColor'}`} value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyPress} />
              <button onClick={addTask} className={`show-on font-josefin text-12px ml-[35px] sm:text-18px ${theme === 'light' ? "text-taskCOlor" : "text-darkModeDrag"}`}>Add Task</button>

            </label>

          <div className={`relative w-full h-[368px] mt-[16px] rounded-[5px] overflow-auto sm:h-[439px] ${theme === 'light' ? 'bg-[#FFF] shadow-shadowConts' : 'bg-darkModeMain'}`}>

            <div>
              {filteredTasks.map((task, index) => (
                <div key={index} className={`flex flex-col items-center justify-between ${theme === 'light' ? 'bg-[#FFF] shadow-shadowConts' : 'bg-darkModeMain'}`}>
                  <label className={`flex w-full h-[48px] bg-[#FFF] justify-between items-center pl-[20px] pr-[20px] rounded-[5px] ${task.completed ? 'completed-task' : 'active-task'} ${theme === 'light' ? 'bg-[#FFF] shadow-shadowConts' : 'bg-darkModeMain'}`}>
                    <div className={`flex items-center ${theme === 'light' ? 'bg-[#FFF] shadow-shadowConts' : 'bg-darkModeMain'}`}>
                      <input type="checkbox" checked={task.completed} onChange={() => toggleTaskCompletion(index)} />
                      <span className={`${task.completed ? 'completed-task ml-[12px] sm:text-18px' : 'isnot-complete ml-[12px] sm:text-18px'} ${theme === 'light' ? 'text-taskCOlor' : 'text-addedTaskColor' }`}>{task.text}</span>
                    </div>
                    <img src="./images/icon-cross.svg" alt="Cross" onClick={() => removeTask(index)} />
                  </label>
                  <hr className='w-full h-[2px]' />
                </div>
              ))}
            </div>
      
          </div>
          <div className={`absolute w-full h-[48px] bottom-[128px] left-0 bg-[#FFF] flex items-center flex-col sm:h-[69px] sm:bottom-[64px] ${theme === 'light' ? 'bg-[#FFF] shadow-shadowConts' : 'bg-darkModeMain'}`}>
              <hr className='w-full h-[2px]'/>
              <div className="w-full h-[48px] flex items-center justify-between px-[20px] sm:h-full">
                <span className=' text-active font-josefin text-12px sm:text-14px'>{countUncheckedTasks()} items left</span>
                <div className="filter-windows bg-[#FFF] shadow-shadowConts flex justify-between items-center">
                  <div className={`w-[166px] h-[18px] flex justify-between items-center mx-auto ${theme === 'light' ? 'bg-[#FFF] shadow-shadowConts' : 'bg-darkModeMain'} `}>

                  <button className={`font-josefin text-14px ${activeButton === "All" ? "text-clickedBlue" : "text-active"}`} 
                    onClick={() => {
                      setFilter("All");
                      setActiveButton("All");
                    }}>
                    All
                  </button>
                  <button className={`font-josefin text-14px ${activeButton === "Active" ? "text-clickedBlue" : "text-active "}`} 
                    onClick={() => {
                      setFilter("Active");
                      setActiveButton("Active");
                    }}>
                    Active
                  </button>
                  <button className={`font-josefin text-14px ${activeButton === "Completed" ? "text-clickedBlue" : "text-active"}`}
                    onClick={() => {
                      setFilter("Completed");
                      setActiveButton("Completed");
                    }}>
                    Completed
                  </button>

                  </div>

                </div>
                <button onClick={clearAllTasks} className='text-active font-josefin text-12px sm:text-14px'>Clear Completed</button>
              </div>
          </div>

          <div className={`w-full h-[48px] mt-[16px] flex justify-between items-center filter-mobile ${theme === 'light' ? 'bg-[#FFF] shadow-shadowConts' : 'bg-darkModeMain'}`}>

            <div className='w-[166px] h-[18px] flex justify-between items-center mx-auto'>

            <button className={`font-josefin text-14px ${activeButton === "All" ? "text-clickedBlue" : "text-active"}`} 
              onClick={() => {
                setFilter("All");
                setActiveButton("All");
              }}>
              All
            </button>
            <button className={`font-josefin text-14px ${activeButton === "Active" ? "text-clickedBlue" : "text-active"}`} 
              onClick={() => {
                setFilter("Active");
                setActiveButton("Active");
              }}>
              Active
            </button>
            <button className={`font-josefin text-14px ${activeButton === "Completed" ? "text-clickedBlue" : "text-active"}`}
              onClick={() => {
                setFilter("Completed");
                setActiveButton("Completed");
              }}>
              Completed
            </button>

            </div>

          </div>

          <p className={`font-normal font-josefin text-center mt-[40px] ${theme === 'light' ? 'text-active' : 'text-darkModeDrag'}`}>Drag and drop to reorder list</p>

          </div>
      </div>
    </>
  )
}

export default App
