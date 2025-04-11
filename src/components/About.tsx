'use client'
import useBaseUrl from '@/Hooks/useBaseUrl'

const About = () => {
  const baseUrl = useBaseUrl()

  return (
    <div className='flex flex-col xl:flex-row'>
      <img src={`${baseUrl}/images/image-about-dark.jpg`} alt="" />
      <div className='px-[30px] lg:px-[48px] py-6'>
        <h3 className='font-bold tracking-widest mb-4 mt-4   '>ABOUT OUR FURNITURE</h3>
        <p className='tracking-n25 font-semibold text-darkGray'>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
      </div>
      <img src={`${baseUrl}/images/image-about-light.jpg`} alt="" />
    </div>
  )
}

export default About