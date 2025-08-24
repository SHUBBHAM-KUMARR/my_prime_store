import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faS } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
     <header className='bg-blue-950 h-16 flex items-center space-x-66 overflow-x-hidden px-1 '>
       <div id="brand">
        <h1 className='text-2xl text-amber-300 font-extrabold tracking-wide '>Notes&nbsp;Safe</h1>
       </div>
        <nav className="flex justify-between items-center space-x-18">
          <div id="search" className="  rounded ">
            <form action="" method="GET" className="flex items-center gap-6 relative">
              <label htmlFor="search">
                <input type="search" name="search" id="search" className="p-2  bg-amber-300 opacity-60 w-72 rounded-4xl rounded-r-4xl : outline-[3px] outline-amber-500"/>
              </label>
              <button type="submit" className="bg-orange-700  rounded-full  absolute right"><FontAwesomeIcon icon={faMagnifyingGlass}className="p-[0.5em] text-2xl text-amber-300" /></button>
            </form>
          </div>
          <ul className="flex space-x-12 text-xl font-semibold text-amber-200">
          <li>Notes</li>
          <li>Tasks</li>
          <li>Archive</li>
          <li>Libraries</li>
          <li>More</li>
        </ul>
        </nav>
        
      </header> 
    </>
  )
}
