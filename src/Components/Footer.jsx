import { Icon } from '@iconify/react';

function Footer() {
  return ( 
    <>
    <div className='mt-[30%] sm:mt-20 py-6 dark:text-white bg-transparent bg-tr text-white'>
    <h1 className='text-4xl text-center'>FIND ME ON</h1>
    <p className='text-center'>Feel free to <b className='text-[#0ef]'>connect</b> with me</p>
    <div className='flex justify-center space-x-10 flex-row mt-4 sm:text-5xl'>
        <a href="https://github.com/isaacdaniel4"><Icon className='bg-white rounded-lg' icon="devicon:github" /></a>
        <a href="https://twitter.com/DanielI91636538"><Icon icon="line-md:twitter-x-alt" /></a>
       <a href="https://www.linkedin.com/in/daniel-isaac-353bb917b/"><Icon icon="bi:linkedin" /></a>
       <a href="https://www.instagram.com/di917470/"><Icon icon="mdi:instagram" /></a>
       <a href="mailto:ayomidesamson111@gmail.com"><Icon icon="octicon:mail-24" /></a>
    </div>
    <div className='main mt-5 text-xs text-center'>
      <p>Copyright &copy; 2023 All right researved</p>
    </div>
    </div>
    </>
  )
}


export default Footer;