import React from 'react'

export default function Footer() {
  return (
    <div className="w-full pb-14">
      <div className="grid justify-items-center bg-sky-100 p-14">
      <div className="w-full flex flex-col md:flex-row justify-around gap-16 p-10">
        <img className="h-7 w-32" src="https://cdn.prod.website-files.com/66a0bca9e37503b81a7be8c1/66a0bca9e37503b81a7be916_homematch%20green.webp" alt=""></img>
        <div className="lg:flex justify-center sm:block gap-5">
          <h4 className="text-xs font-semibold text-[#107365]">About</h4>
          <h4 className="text-xs font-semibold text-[#107365]">How it works</h4>
          <h4 className="text-xs font-semibold text-[#107365]">Why HomeMatch?</h4>
          <h4 className="text-xs font-semibold text-[#107365]">Investors</h4>
          <h4 className="text-xs font-semibold text-[#107365]">Contact Us</h4>
      
       </div>
        
        <div className="lg:w-44 w-full justify-center items-center gap-2 flex">
        <svg className="h-5 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path></svg>

        <svg className="h-6 w-6 text-[#107365]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8.24537V15.5C16 19.0899 13.0899 22 9.5 22C5.91015 22 3 19.0899 3 15.5C3 11.9101 5.91015 9 9.5 9C10.0163 9 10.5185 9.06019 11 9.17393V12.3368C10.5454 12.1208 10.0368 12 9.5 12C7.567 12 6 13.567 6 15.5C6 17.433 7.567 19 9.5 19C11.433 19 13 17.433 13 15.5V2H16C16 4.76142 18.2386 7 21 7V10C19.1081 10 17.3696 9.34328 16 8.24537Z"></path></svg>
        </div>

      </div>

      <div className="w-full flex flex-col md:flex-row justify-center p-8  gap-6">
          <h4 className="text-[11px] font-semibold text-[#107365]">© 2023 HomeMatch. All rights reserved.</h4>
          <h4 className="text-[11px] font-semibold text-[#107365]">Privacy Policy</h4>
          <h4 className="text-[11px] font-semibold text-[#107365]">Terms Of Services</h4>
          <h4 className="text-[11px] font-semibold text-[#107365]">Cookies Policy</h4>
         
      
       </div>
       </div>
    </div>
  )
}
