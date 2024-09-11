import React from 'react'

export default function Header() {
  return (
     <nav className="h-16 bg-[#175c53] P-10 flex flex-row justify-around sticky top-0 z-10">

      <div className="lg:w-[60vw] flex flex-col md:flex-row items-center justify-around">
   <img className="h-4 w-30" src="https://cdn.prod.website-files.com/66a0bca9e37503b81a7be8c1/66a0bca9e37503b81a7be8e5_5f98c4573000a6262f89372f1ff30aaf_1200_80.webp" alt=""></img>

       <div className=" lg:flex justify-end hidden gap-10 mx-3">
         <h4 className="text-[11px] font-bold text-white">About</h4>
      
         <h4 className="text-[11px] font-semibold text-white">How it works</h4>
  
         <h4 className="text-[11px] font-semibold text-white">Why HomeMatch?</h4>
 
         <h4 className="text-[11px] font-semibold text-white">Investors</h4>
         </div>
      
        
    </div> 

    <div className="lg:w-[40vw] lg:grid justify-items-end  items-center hidden ">
     <div className="h-[5vh] w-[10vw]  bg-sky-50 rounded-2xl grid justify-items-center items-center mx-12">
        <p className="text-[11px] font-medium  text-center text-[#042017fa]"> Get a Cash Offer</p>
      </div>
        
       </div>

       <svg className="text-white lg:hidden h-8 w-8 mt-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
        


         </nav> 


   
  )
}
