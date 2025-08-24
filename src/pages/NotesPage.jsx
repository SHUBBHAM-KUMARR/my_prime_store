import React from 'react'

const NotesPage = () => {
  return (
   <>
   <div className='w-1/2 bg-blue-600 h-content flex flex-col p-1 mx-8 mt-4 rounded-md'>
     <input type="text" title='tilte' placeholder="Notes's title" className=' w-full p-3  bg-slate-300 border  border-amber-300' />
     <textarea name="notes" id="notes"  autoCorrect='off' placeholder='Write your notes here....' className='bg-slate-300 text-2xl text-black  h-72 max-h-96  w-full' ></textarea>
   </div>
   </>
  )
}

export default NotesPage
