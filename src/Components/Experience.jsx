import { Icon } from '@iconify/react';

function Experience( ) {
  return (
    <>
    <div className="md:h-screen mt-40 md:mt-20 font-bold" id="Experience">
    <h1 className="text-3xl font-bold text-center underline text-white" id="experience"><b className="text-[#0ef] text-5xl">E</b>xperience</h1>
    <p className="mt-2 text-center">There are the technology i have worked with</p>
    <div className="border shadow-xl shadow-[#0ef] mx-7 space-y-6 mt-4 py-4 md:mx-96 text-center">
      <div className="flex justify-center items-center text-3xl shadow-md border-[#0ef] dark:shadow-white border-2 rounded-full mx-28 h-20 w-20 sm:ml-[44%] ml-32"><Icon icon="vaadin:paintbrush" /></div>
      <h1 className="text-2xl font-bold">Front-End</h1>
      <ul className="space-y-2 font-bold font-mono">
        <li>Html</li>
        <li>Tainwindcss</li>
        <li>React</li>
        <li>Npm</li>
        <li>Git</li>
      </ul>
    </div>
    </div>
    </>
  )
}

export default Experience;