// import React from 'react'

const Button = (props) => {
  return (
    <div className="button bg-white">
        <button className="text-[2.5vh] border-[1px] border-black bg-transparent rounded-[25px] font-normal px-[2.5vh] py-[1vh]">{props.text}</button>
    </div>
  )
}

export default Button