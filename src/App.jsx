import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };




  return (
    <>
      <div className="w-[327px] mx-auto mt-[48px]">

        <div className="flex w-full h-[20px] items-center justify-between">

          <h1 className="text-20px text-[#FFF]">TODO</h1>
          <img src="./images/icon-moon.svg" alt="Moon" />

        </div>

        <label className="flex w-full h-[64px] bg-[#FFF] justify-between items-center pl-[20px] pr-[20px] mt-[40px] rounded-[5px] shadow-shadowConts">
          
          <input type="checkbox"/>
          <input type="email" placeholder='Create a new todo…' className=' outline-none' value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyPress} />

        </label>

        <div className="relative w-full h-[368px] bg-[#FFF] mt-[16px] shadow-shadowConts rounded-[5px] overflow-auto">
          <div>
            {tasks.map((task, index) => (
                <div key={index} className="flex flex-col items-center justify-between">
                  <label className="flex w-full h-[48px] bg-[#FFF] justify-between items-center pl-[20px] pr-[20px] rounded-[5px] shadow-shadowConts">
                    <input type="checkbox"/>
                    <span>{task}</span>
                    <img src="./images/icon-cross.svg" alt="Cross" onClick={() => removeTask(index)}/>
                </label>
                <hr className='w-full h-[2px]'/>
                </div>
              ))}
          </div>
        </div>
        <div className="absolute w-[327px] h-[48px] bottom-[110px] bg-[#FFF]">
            <hr className='w-full h-[2px]'/>
            <div className="w-full h-[48px] flex items-center justify-between px-[20px]">
              <span>items left</span>
              <span>Clear Completed</span>
            </div>
          </div>

        <div className="w-full h-[48px] bg-[#FFF] shadow-shadowConts mt-[16px] flex justify-between items-center">

          <div className="w-[166px] h-[18px] flex justify-between items-center mx-auto">
            <span className=' font-josefin text-active text-14px font-bold'>All</span>
            <span className='font-josefin text-active text-14px font-bold'>Active</span>
            <span className='font-josefin text-active text-14px font-bold'>Completed</span>
          </div>

        </div>

      </div>

    </>
  )
}

export default App
