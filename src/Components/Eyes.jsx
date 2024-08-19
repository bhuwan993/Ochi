import React, {useState,useRef,useEffect} from 'react'


const Eyes = () => {
    const [rotate,setRotate] = useState(0);
   useEffect(()=>{
       window.addEventListener('mousemove',(e)=>{
           let x = e.clientX;
           let y = e.clientY;
            let deltaX = x - window.innerWidth/2;
            let deltaY = y - window.innerHeight/2;
            var angle = Math.atan2(deltaY,deltaX)*(180/Math.PI);
            setRotate(angle-180);
   })

      



    })


    
  return (
    <div className=" w-[100vw] flex justify-center items-center h-[100vh] bg-[#f5f5f5] relative overflow-x-hidden">
      <div className=" w-[160vh] h-[90vh]  bg-cover bg-center bg-[url('./assets/eyesBackground.png')] relative">
        <div className="w-[50vw] h-[40vh]  items-center justify-center  bg-transparent absolute top-[37%] left-[17%] flex gap-[3vh]">
          <div className="h-[20vh] w-[40vh] bg-transparent flex items-center justify-center">
            <div className="h-[25vh] w-[25vh] bg-white rounded-full flex items-center justify-center">
              <div className="flex justify-center items-center h-[15vh]  w-[15vh] rounded-full bg-black relative">
                <div style = {{ transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}  className="eyes1   top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-[3.5vh] bg-transparent absolute">
                <div className="h-[3vh] w-[3vh] bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[20vh]  w-[40vh] flex items-center justify-center bg-transparent">
            <div className="h-[25vh]  w-[25vh] bg-white  rounded-full flex justify-center items-center">
              <div className="flex justify-center items-center  h-[15vh]  w-[15vh] rounded-full bg-black relative">
                <div style = {{ transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="eyes2   top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[3.5vh] absolute bg-transparent">
                <div className="h-[3vh] w-[3vh] bg-white rounded-full"></div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
