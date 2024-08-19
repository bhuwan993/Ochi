// import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed= '-0.1' className="aboutContainer h-fit w-screen bg-[#cdea68]">
      <div className="h-[100%] w-[100%] bg-[#cdea68]">
        <div className="bg-transparent py-[12vh] px-[6vh]">
          <h3 className="bg-[#cdea68] leading-[8vh] text-[8vh]  font-lighter ">
            Ochi is a strategic presentation agency for forward-thinking
            business that need to raise funds,sell products,explain complex
            ideas, and hire hreat people .
          </h3>
        </div>
        <hr className="border-black mb-[5vh]" />
        <div className="bg-transparent grid grid-cols-3 px-[8vh] ">
          <h4 className="bg-transparent text-[2.7vh]">What you can expect:</h4>
          <div className="bg-transparent flex flex-col gap-[3vh] relative left-[22vh]">
            <p className="bg-transparent text-[2.6vh] px-[10vh] ">
              We create tailorec presentation to help you persuade your
              colleagurs,clients,or investors.Wheather it`s live or digital
              delivered for one or a hundred people.
            </p>
            <p className="bg-transparent text-[2.6vh] px-[10vh]">
              We believe the mix of strategy and design(with a bit of coffe) is
              what makes your message clear,convincing,and captivating.
            </p>
          </div>
          <div className="bg-transparent relative top-[50%] left-[60%]">
            <h5 className="bg-transparent">S:</h5>
            <li className="bg-transparent flex flex-col">
              <a className="bg-transparent" href="#">
                Instagram
              </a>
              <a className="bg-transparent" href="#">
                Facebook
              </a>
              <a className="bg-transparent" href="#">
                Linkedin
              </a>
              <a className="bg-transparent" href="#">
                Whatsapp
              </a>
            </li>
          </div>
        </div>
      </div>
      <hr  className = "border-black mt-[4vh]"/>
      <div className="bottomSection bg-[#cdea68] flex justify-between py-[6vh] px-[8vh]">
        <div className="bg-transparent flex flex-col gap-[2vh]">
            <h1 className="bg-transparent text-[8vh]">Our approach:</h1>
            <button className="bg-black text-white py-[2.5vh] rounded-[25px] flex text-center items-center px-[4vh] gap-[5vh] w-fit"> <h4>READ MORE</h4> <div className="h-[2vh] w-[2vh] bg-white rounded-full"></div></button>
        </div>
        <div className="bg-transparent">
            <img className="rounded-3xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="about photo" />
        </div>
      </div>
    </div>
  );
};

export default About;
