import Image from "next/image";

export default function Home() {
  return (
    <main className="  ">
      <div className="flex justify-center items-center bg-black">
        <img className="lg:h-[78vh] h-[62vh] w-full opacity-25" src="https://cdn.prod.website-files.com/66a0bca9e37503b81a7be8c1/66a0bca9e37503b81a7be8fd_familyhome-p-800.jpg" alt=""></img>

        <div className="lg:w-[39vw] w-[80%] absolute top-[16%] bg-slate-300 lg:left-[9%] rounded-lg p-7">
          <p className="font-bold font-sans lg:text-5xl sm:text-2xl text-[#0f3833]">Get Matched With Local Cash Buyers Fast. <span className="text-[#107365]"> Sell Your House Fast For
            Cash!</span></p>

          <p className="text-sm font-semibold mt-2">Enter your property address below to get a cash offer with<span className="text-md text-[#107365] font-black"> NO
            REALTOR FEES </span> attached.</p>

          <button className="w-full bg-[#107366] p-2 text-white font-black text-[11px] mt-3 rounded-lg">
            Get a Cash Offer  
          </button>
        </div>
      </div>

      <div className=" lg:flex justify-around items-center sm:block p-10 gap-5 bg-white">
        <div className="w-[35vw bg-blue-300]">
          <svg className="h-9 w-9 text-slate-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M3.00488 4.00293H21.0049C21.5572 4.00293 22.0049 4.45064 22.0049 5.00293V19.0029C22.0049 19.5552 21.5572 20.0029 21.0049 20.0029H3.00488C2.4526 20.0029 2.00488 19.5552 2.00488 19.0029V5.00293C2.00488 4.45064 2.4526 4.00293 3.00488 4.00293ZM6.50037 6H4.00037V8.5C5.38108 8.5 6.50037 7.38071 6.50037 6ZM17.5004 6C17.5004 7.38071 18.6197 8.5 20.0004 8.5V6H17.5004ZM4.00037 15.5V18H6.50037C6.50037 16.6193 5.38108 15.5 4.00037 15.5ZM17.5004 18H20.0004V15.5C18.6197 15.5 17.5004 16.6193 17.5004 18ZM12.0004 16C14.2095 16 16.0004 14.2091 16.0004 12C16.0004 9.79086 14.2095 8 12.0004 8C9.79123 8 8.00037 9.79086 8.00037 12C8.00037 14.2091 9.79123 16 12.0004 16Z"></path>
          </svg>
          <h1 className="text-2xl  font-bold text-[#107375]">
            No Hidden Fees or Commission
          </h1>
          <p className="text-[11px] font-semibold">
            Experience a transparent and straightforward selling process with a
            local cash buyer.
          </p>
        </div>

        <div className="w-[35vw bg-red-400]">
          <svg className="h-9 w-9 text-slate-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM13 19H18V9.15745L12 3.7029L6 9.15745V19H11V13H13V19Z"></path>
          </svg>
          <h1 className="text-2xl font-bold text-[#107375]">
            No Repairs Needed... Sell Your House As-Is
          </h1>
          <p className="text-[11px] font-semibold">
            You don’t have to make any repairs at all – our cash buyers buy as
            is!
          </p>
        </div>

        <div className="w-[35vw bg-slate-400]">
          <svg className="h-9 w-9 text-slate-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M12.0001 22.0001C7.02956 22.0001 3.00012 17.9707 3.00012 13.0001C3.00012 8.02956 7.02956 4.00012 12.0001 4.00012C16.9707 4.00012 21.0001 8.02956 21.0001 13.0001C21.0001 17.9707 16.9707 22.0001 12.0001 22.0001ZM12.0001 20.0001C15.8661 20.0001 19.0001 16.8661 19.0001 13.0001C19.0001 9.13412 15.8661 6.00012 12.0001 6.00012C8.13412 6.00012 5.00012 9.13412 5.00012 13.0001C5.00012 16.8661 8.13412 20.0001 12.0001 20.0001ZM13.0001 13.0001H16.0001V15.0001H11.0001V8.00012H13.0001V13.0001ZM1.74707 6.2826L5.2826 2.74707L6.69682 4.16128L3.16128 7.69682L1.74707 6.2826ZM18.7176 2.74707L22.2532 6.2826L20.839 7.69682L17.3034 4.16128L18.7176 2.74707Z"></path>
          </svg>
          <h1 className="text-2xl  font-bold text-[#107375]">
            We can close fast… or on your timeline
          </h1>
          <p className="text-[11px] font-semibold">
            Close on your terms: as fast or as slow as you prefer.
          </p>
        </div>
      </div>

      <div className=" bg-[#107366] text-center pt-12 pb-10">
        <h1 className="text-5xl font-semibold leading-tight mb-4 text-white ">
          Sell Your Home Faster{" "}
        </h1>
        <h1 className="text-5xl font-semibold text-white mt-4">
          {" "}
          & Easier With HomeMatch.
        </h1>
        <p className="text-white py-3">
          We'll instantly help you find a cash buyer in your local area.
        </p>
        <button className="text-[11px] font-black w-96 p-2 mt-3 text-[#107366] bg-white rounded-lg">
          Get a Cash Offer
        </button>
      </div>

      <div className="lg:flex sm:block justify-center">
        <div className="lg:h-[75vh] w-full flex flex-col justify-center items-center p-12 lg:sticky top-[50px]">
          <div className="p-10">
            <h1 className="font-bold text-2xl text-[#107176] mt-5">
              The simple solution to sell your house hassle-free
            </h1>
            <h6 className="text-sm font-semibold text-[#107966] mt-2">HomeMatch simplifies property selling like never before. No need
              to worry about repairs, cleaning, or agent fees. We buy houses in
              as-is condition, delivering you a smooth and effortless selling
              journey. Discover the simplicity of selling with HomeMatch today.
            </h6>
            <button className="text-[11px] font-black w-36 p-2  text-white bg-[#107366] rounded-lg mt-4">Get a Cash Offer
            </button>
          </div>
        </div>

        <div className="w-full bg-sky-100 p-5 ">
          <div className="p-5 pb-16 sticky top-[50px] bg-sky-100">
            <Image className="lg:w-[36vw] w-full rounded-lg" width={100} height={100} src="/home test.jpg" alt=""/>
            <svg className="h-10 w-10 mt-6 text-[#107366]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
              <path fill="currentColor" d="M16.5 14H20v-2h-2v-1h-2v1.05a2.5 2.5 0 0 0 .5 4.95h1a.5.5 0 0 1 0 1H14v2h2v1h2v-1.05a2.5 2.5 0 0 0-.5-4.95h-1a.5.5 0 0 1 0-1"/> <path fill="currentColor" d="M29 13h-2.02A5.78 5.78 0 0 0 25 8.852V5a1 1 0 0 0-1.6-.8L19.667 7H15c-5.51 0-9.463 3.241-9.948 8H5a1 1 0 0 1-1-1v-2H2v2a3.003 3.003 0 0 0 3 3h.07A9.17 9.17 0 0 0 9 23.557V27a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2h3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3.363A5.1 5.1 0 0 0 26.819 20H29a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1m-1 5h-2.876c-.305 2.753-.823 3.485-3.124 4.315V26h-2v-3h-7v3h-2v-3.622A7.01 7.01 0 0 1 7 16c0-4.835 4.018-7 8-7h5.334L23 7v2.776c2.418 1.86 1.913 3.186 2.018 5.224H28Z"/>
            </svg>
            <h1 className="font-bold text-xs mt-5 text-[#107371]">Quick Cash offers No Matter The Condition
            </h1>
            <p className="font-semibold text-[11px] mt-5">Say goodbye to the hassle of traditional home selling with fast
              and fair cash offers from HomeMatch buyers. Our buyer don't care
              what condition your house is in!
            </p>
          </div>

          <div className="p-5 pb-16 sticky top-[50px] bg-sky-100">
            <img className="lg:w-[38vw] w-full rounded-lg" src="/log1.jpg" alt=""></img>
            <svg className="h-10 w-10 mt-6 text-[#107366]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM12 3.04879L5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879ZM16.4524 8.22183L17.8666 9.63604L11.5026 16L7.25999 11.7574L8.67421 10.3431L11.5019 13.1709L16.4524 8.22183Z"></path>
            </svg>
            <h1 className="font-bold text-xs mt-5 text-[#107371]">Local Cash buyers
            </h1>
            <p className="font-semibold text-[11px] mt-5 ">Choose HomeMatch for local and trusted buyers who understand your
              unique needs and the local real estate market. With our
              experienced investors, we match you with by your side, you can
              confidently sell your property with ease and trust.
            </p>
          </div>

          <div className="p-5 pb-16 sticky top-[50px] bg-sky-100">
            <img className="lg:w-[38vw] w-full rounded-lg" src="/log3.jpg" alt=""></img>
            <svg className="h-10 w-10 mt-6 text-[#107366]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M10.9042 2.10025L20.8037 3.51446L22.2179 13.414L13.0255 22.6063C12.635 22.9969 12.0019 22.9969 11.6113 22.6063L1.71184 12.7069C1.32131 12.3163 1.32131 11.6832 1.71184 11.2926L10.9042 2.10025ZM11.6113 4.22157L3.83316 11.9997L12.3184 20.485L20.0966 12.7069L19.036 5.28223L11.6113 4.22157ZM13.7327 10.5855C12.9516 9.80448 12.9516 8.53815 13.7327 7.7571C14.5137 6.97606 15.78 6.97606 16.5611 7.7571C17.3421 8.53815 17.3421 9.80448 16.5611 10.5855C15.78 11.3666 14.5137 11.3666 13.7327 10.5855Z"></path>
            </svg>
            <h1 className="font-bold text-xs mt-5 text-[#107371]">
              No hidden fees or commissions
            </h1>
            <p className="font-semibold text-[11px] mt-5 ">
              Rest assured, there are no hidden fees when you choose HomeMatch.
              Experience a transparent and straightforward process that
              prioritizes your peace of mind. We will find a buyer for you!
            </p>
          </div>

          <div className="p-5 pb-16 sm:w-full sticky top-[50px] bg-sky-100">
            <img className=" lg:w-[38vw] w-full rounded-lg" src="/log4.jpg" alt=""></img>
            <svg className="h-10 w-10 mt-6 text-[#107366]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 13H9C9 14.6569 10.3431 16 12 16C13.6569 16 15 14.6569 15 13H17C17 15.7614 14.7614 18 12 18C9.23858 18 7 15.7614 7 13ZM8 11C7.17157 11 6.5 10.3284 6.5 9.5C6.5 8.67157 7.17157 8 8 8C8.82843 8 9.5 8.67157 9.5 9.5C9.5 10.3284 8.82843 11 8 11ZM16 11C15.1716 11 14.5 10.3284 14.5 9.5C14.5 8.67157 15.1716 8 16 8C16.8284 8 17.5 8.67157 17.5 9.5C17.5 10.3284 16.8284 11 16 11Z"></path>
            </svg>
            <h1 className="font-bold text-xs mt-5 text-[#107371]">Effortless for you</h1>
            <p className="font-semibold text-[11px] mt-5 ">We handle the details, so you can focus on what matters most. Experience a hassle-free property sale that puts your convenience first
            </p>
          </div>

          <div className="p-5 pb-16 sticky top-[50px] bg-sky-100">
            <img className="lg:w-[38vw] w-full rounded-lg" src="/log2.jpg" alt=""></img>
            <svg className="h-10 w-10 mt-6 text-[#107366]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M20 2C20.5523 2 21 2.44772 21 3V6.757L19 8.757V4H5V20H19V17.242L21 15.242V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20ZM21.7782 8.80761L23.1924 10.2218L15.4142 18L13.9979 17.9979L14 16.5858L21.7782 8.80761ZM13 12V14H8V12H13ZM16 8V10H8V8H16Z"></path>
            </svg>
            <h1 className="font-bold text-xs mt-5 text-[#107371]">No obligation, no pressure.
            </h1>
            <p className="font-semibold text-[11px] mt-5 ">Catch your breath and explore your options with HomeMatch. Our commitment to no obligation and no pressure means you're in control of your property journey, every step of the way.
            </p>
          </div>

          <div className="p-5 pb-16 sticky top-[50px] bg-sky-100">
            <img className="lg:w-[38vw] w-full rounded-lg" src="/log6.jpg" alt=""></img>
            <svg className="h-10 w-10 mt-6 text-[#107366]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M19.9381 8H21C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8ZM3 10V14H4V10H3ZM20 10V14H21V10H20ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z"></path> </svg>
            <h1 className="font-bold text-xs mt-5 text-[#107371]">Expert guidance and support
            </h1>
            <p className="font-semibold text-[11px] mt-5">Our dedicated team is here to navigate your property journey, ensuring a seamless experience from start to finish.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:h-[100vh] w-full p-16 mt-10 lg:flex justify-center sm:block transform hover:scale-y-110 transition duration-700 ease-in-out opacity-5 hover:opacity-100">
        <div className="h-full w-full">
          <img className="h-full w-full" src="https://cdn.prod.website-files.com/66a0bca9e37503b81a7be8c1/66a0bca9e37503b81a7be909_elise%20howard.webp" alt=""></img>
        </div>

        <div className="h-full w-full bg-sky-200 grid justify-items-center">
          <div className="p-10 flex flex-col justify-center items-start">
            <p className="text-sm font-bold text-[#107375]">We’ve helped hundreds of happy sellers (even with beat up
              properties) get their house sold with no hassles and no fees!
            </p>

            <img className="h-10 mt-4" src="https://cdn.prod.website-files.com/66a0bca9e37503b81a7be8c1/66a0bca9e37503b81a7be916_homematch%20green.webp" alt=""></img>
          </div>
        </div>
      </div>

      <div className="w-full lg:flex relative justify-center sm:block pt-20 p-10">
        <div className="p-14 w-full">
          <h1 className="text-3xl font-mono font-bold mt-3">
            Our HomeMatch Promise
          </h1>
          <p className="text-sm font-medium mt-1 ">We’ll match you with cash buyers that we trust. When you have
            questions or concerns take the time to answer. Your
            needs come first you have our word on that. If you don't like the
            buyer let us know.
          </p>

          <div className="flex gap-2 ">
           <svg className="h-5 w-5 font-medium mt-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path></svg>
          <p className="text-[11px] font-medium flex gap-2 mt-4">We do what's best for you
          </p>
          </div>


          <div className="flex gap-2">
          <svg className="h-5 w-5 mt-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path></svg>
          <p className="text-[11px] flex font-medium gap-2 mt-4"> We treat you like a person
          </p>
          </div>

          <div className="flex gap-2">
          <svg className="h-5 w-5 mt-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path></svg>
          <p className="text-[11px] font-medium flex gap-2 mt-4">We are here when you need us
          </p>
          </div>

        </div>
        <div className="p-10 w-full">
          <img className="lg:h-82 w-full rounded-lg" src="/log4.jpg" alt=""></img>
        </div>
      </div>

      <div className="w-full flex-col gap-5 p-20 ">
        <div className="w-full">
          <h1 className="font-semibold text-2xl text-slate-700 text-center">
            Customer testimonials
          </h1>
          <h4 className="text-sm font-semibold text-slate-600 text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h4>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 pt-16 transform hover:scale-y-110 transition duration-300 ease-in-out opacity-5 hover:opacity-100">
          <div className=" w-full bg-sky-100 rounded-md p-5 transform hover:scale-110 transition duration-700 ease-in-out opacity-25 hover:opacity-100">
            <span className="flex">
              <svg
                className="h-6 w-6 text-[#107371]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              <svg
                className="h-6 w-6 text-[#107371]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              <svg
                className="h-6 w-6 text-[#107371]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              <svg
                className="h-6 w-6 text-[#107371]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              <svg
                className="h-6 w-6 text-[#107371]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>

            </span>
            <p className="text-sm font-medium text-[#107371] mt-3">"HomeMatch was a lifesaver for us. We had to relocate for work and
              had no endless showings and negotiations. They
              found us a cash buyer quickly and handled all the paperwork."
            </p>
            <div className="flex gap-3 mt-4">
              <img
                className="h-9 w-9 rounded-full"
                src="https://cdn.prod.website-files.com/66a0bca9e37503b81a7be8c1/66a0bca9e37503b81a7be910_patricia%2520s-p-500.jpg"
                alt=""
              ></img>
              <h2 className="text-xs text-[#106276]">
                Patricia S.
                <br></br>
                <p className="text-xs">Jacksonville, FL</p>
              </h2>
            </div>
          </div>

          <div className="w-full bg-sky-100 rounded-md p-5 transform hover:scale-110 transition duration-700 ease-in-out opacity-25 hover:opacity-100">
            <span className="flex">
              <svg
                className="h-6 w-6 text-[#107371]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              <svg
                className="h-6 w-6 text-[#107371]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              <svg
                className="h-6 w-6 text-[#107371]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              <svg
                className="h-6 w-6 text-[#107371]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              <svg
                className="h-6 w-6 text-[#107371]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
            </span>
            <p className="text-sm font-medium text-[#107371] mt-3">
              "I inherited a house from my great uncle and the condition of the
              house was so bad I had no idea I could not list
              it. I contacted HomeMatch and they found a cash buyer instantly! "
            </p>
            <div className="flex gap-3 mt-4">
              <img
                className="h-9 w-9 rounded-full"
                src="https://cdn.prod.website-files.com/66a0bca9e37503b81a7be8c1/66a0bca9e37503b81a7be90d_kyle%2520v-p-500.jpg"
                alt=""
              ></img>
              <h2 className="text-xs text-[#106276]">
                Kyle J.
                <br></br>
                <p className="text-xs ">Canonsburg, PA</p>
              </h2>
            </div>
          </div>

          <div className="w-full bg-sky-100 rounded-md p-5 transform hover:scale-110 transition duration-700 ease-in-out opacity-25 hover:opacity-100">
            <span className="flex">
              <svg className="h-6 w-6 text-[#107371]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              <svg className="h-6 w-6 text-[#107371]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              <svg className="h-6 w-6 text-[#107371]"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              <svg className="h-6 w-6 text-[#107371]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path> 
              </svg>
              <svg className="h-6 w-6 text-[#107371]"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
            </span>
            <p className="text-sm font-medium text-[#107371] mt-3">"If you want to sell your house without the headache, HomeMatch is
              the way to go.cash buyer who was just as
              eager to close the deal as I was. It was so nice dealing with a
              true cash buyer."
            </p>
            <div className="flex gap-3 mt-4">
              <img
                className="h-9 w-9 rounded-full"
                src="https://cdn.prod.website-files.com/66a0bca9e37503b81a7be8c1/66a0bca9e37503b81a7be90f_amber%2520l-p-500.jpg"
                alt=""
              ></img>
              <h2 className="text-xs text-[#106276]">
                Amber L<br></br>
                <p className="text-xs">Los Angeles, CA</p>
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-5 transform hover:scale-y-110 transition duration-300 ease-in-out opacity-5 hover:opacity-100">
          <div className=" w-full bg-sky-100 rounded-md p-5 transform hover:scale-110 transition duration-700 ease-in-out opacity-25 hover:opacity-100">
            <span className="flex">
              <svg
                className="h-6 w-6 text-[#107371]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              <svg
                className="h-6 w-6 text-[#107371]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              <svg
                className="h-6 w-6 text-[#107371]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              <svg className="h-6 w-6 text-[#107371]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              <svg className="h-6 w-6 text-[#107371]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
            </span>
            <p className="text-sm font-medium text-[#107371] mt-3">
              "I was skeptical about using a service like this, but HomeMatch
              was professional and efficient. They helped me get rid of a beat
              up properly that I couldn't afford fix up. "
            </p>
            <div className="flex gap-3 mt-4">
              <img
                className="h-9 w-9 rounded-full"
                src="https://cdn.prod.website-files.com/66a0bca9e37503b81a7be8c1/66a0bca9e37503b81a7be90c_greg%2520m-p-500.jpg"
                alt=""
              ></img>
              <h2 className="text-xs text-[#106276]">
                Greg M<br></br>
                <p className="text-xs">Columbus, Oh</p>
              </h2>
            </div>
          </div>

          <div className="w-full bg-sky-100 rounded-md p-5 transform hover:scale-110 transition duration-700 ease-in-out opacity-25 hover:opacity-100">
            <span className="flex">
              <svg className="h-6 w-6 text-[#107371]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              <svg className="h-6 w-6 text-[#107371]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              <svg className="h-6 w-6 text-[#107371]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              <svg className="h-6 w-6 text-[#107371]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              <svg className="h-6 w-6 text-[#107371]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              
           </span>
            <p className="text-sm font-medium text-[#107371] mt-3">
              "HomeMatch made selling my home so much easier than I ever thought
              possible. They found a cash buyer quickly, and the transaction was
              seamless."
            </p>
            <div className="flex gap-3 mt-4">
              <img
                className="h-9 w-9 rounded-full"
                src="https://cdn.prod.website-files.com/66a0bca9e37503b81a7be8c1/66a0bca9e37503b81a7be911_rachetl%2520t-p-500.jpg"
                alt=""
              ></img>
              <h2 className="text-xs text-[#106276]">
                Rachel T.
                <br></br>
                <p className="text-xs">Dallas, TX</p>
              </h2>
            </div>
          </div>

          <div className="w-full bg-sky-100 rounded-md p-5 transform hover:scale-110 transition duration-700 ease-in-out opacity-25 hover:opacity-100">
            <span className="flex">
              <svg
                className="h-6 w-8 text-[#107371]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              <svg
                className="h-6 w-6 text-[#107371]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              <svg
                className="h-6 w-6 text-[#107371]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              <svg className="h-6 w-6 text-[#107371]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
              <svg className="h-6 w-6 text-[#107371]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
            </span>
            <p className="text-sm font-medium text-[#107371] mt-3">
              "I went through a tough period in my life where I had no choice
              but to sell my house or lose it. I knew I was going to have to
              sell cheaper than I wanted but HomeMatch made it easy."
            </p>
            <div className="flex gap-3 mt-4">
              <img
                className="h-9 w-9 rounded-full"
                src="https://cdn.prod.website-files.com/66a0bca9e37503b81a7be8c1/66a0bca9e37503b81a7be90e_diego-p-500.jpg"
                alt=""
              ></img>
              <h2 className="text-xs text-[#106276]">
                Diego V.
                <p className="text-xs">Phoenix, AZ</p>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-20 gap-[0.1vw] lg:flex justify-center sm:block transform hover:scale-y-125 transition duration-700 ease-in-out opacity-5 hover:opacity-100">
        <div className="h-full w-full ">
          <img className="h-full w-full" src="https://cdn.prod.website-files.com/66a0bca9e37503b81a7be8c1/66a0bca9e37503b81a7be925_dance%2520in%2520the%2520kitchen-p-800.jpg" alt=""></img>
        </div>

        <div className=" w-full bg-[#107366] grid justify-items-center">
          <div className="p-8 lg:flex flex-col justify-center items-start sm:block">
            <h1 className="lg:text-3xl text-xl font-semibold text-sky-200 ">
              Find a cash buyer fast.No realtor needed.
            </h1>
            <p className="text-sm font-semibold text-white mt-2">
              Effortlessly connect with local cash buyers with Homematch. Click
              the button below to get started.
            </p>

            <button className="w-full bg-white p-2 text-[#107366] font-black text-[11px] mt-5 rounded-lg">
              Get a Cash Offer
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
