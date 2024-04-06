import { Icon } from '@iconify/react';

function Skills() {
  return(
    <>
    <div className='mt-32' id='Skills'>
    <h1 className='text-3xl text-center font-bold text-white'><b className='text-[#0ef] text-5xl'>P</b>rofessional Skills</h1>

    <div>
      <div className='skill grid grid-cols-4 p-3 justify-center items-center text-center space-x-4 space-y-4 text-2xl md:ml-[17%] md:w-[68%]'>
        <div className='anime flex border-2 p-4 justify-center text-center mt-4 border-[#0ef] md:p-6 h-20'><Icon icon="icomoon-free:html-five" /></div>
        <div className='anime flex border-2 p-4 justify-center border-[#0ef] md:p-6 h-20'><Icon icon="uiw:css3" /></div>
        <div className='anime flex border-2 p-4 justify-center text-center border-[#0ef] md:p-6 h-20'><Icon icon="simple-icons:tailwindcss" /></div>
        <div className='anime flex border-2 p-4 justify-center text-center border-[#0ef] md:p-6 h-20'><Icon icon="cib:js" /></div>
        <div className='anime flex border-2 p-4 justify-center text-center border-[#0ef] md:p-6 h-20'><Icon icon="uim:react" /></div>
        <div className='anime flex border-2 p-4 justify-center text-center border-[#0ef] md:p-6 h-20'><Icon icon="bi:git" /></div>
      </div>
    </div>

    <h1 className='text-3xl text-center font-bold text-white mt-8'><b className='text-[#0ef]'>T</b>ools I Use</h1>

    <div className='grid grid-cols-3 p-3 md:ml-[17%] text-center space-x-7 space-y-4 md:w-[60%] text-3xl'>
        <div className='anime flex border-2 p-4 justify-center text-center mt-4 border-[#0ef] md:p-6 h-20'><Icon icon="gg:windows" /></div>
        <div className='anime flex border-2 p-4 justify-center border-[#0ef] md:p-6 h-20'><Icon icon="akar-icons:vscode-fill" /></div>
        <div className='anime flex border-2 p-4 justify-center text-center border-[#0ef] md:p-6 h-20'><Icon icon="arcticons:opera-gx" /></div>
        <div className='anime flex border-2 p-4 justify-center text-center border-[#0ef] md:p-6 h-20'><Icon icon="simple-icons:inkscape" /></div>
        
      </div>
    </div>
    </>
  )
}

export default Skills;