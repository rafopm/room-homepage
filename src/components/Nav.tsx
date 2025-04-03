'use client'
import useBaseUrl from '@/Hooks/useBaseUrl'
import { useState, useEffect } from 'react'

const Nav = () => {
    const baseUrl = useBaseUrl();
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        console.log('Estado del menú:', openMenu);
      }, [openMenu]);

    return (
        <div className='absolute z-10  w-full '>

            <div className={`relative px-[24px] mt-[24px] text-white flex flex-row items-center w-full ${openMenu ? 'hidden' : 'block'}`}>
                <button
                    className='focus:outline-none'
                    onClick={(e) => {
                        console.log('Botón hamburguesa pulsado');
                        e.stopPropagation();
                        setOpenMenu(true);
                    }}
                    aria-label="Abrir menú"
                >
                    <img
                        className='h-[14px] w-[20px] cursor-pointer hover:opacity-80 transition-opacity'
                        src={`${baseUrl}/images/icon-hamburger.svg`}
                        alt="Abrir menú"
                    />
                </button>
                <span className='text-[32px] w-full text-center'>room</span>
            </div>
            <div
                className={`absolute bg-white px-[24px] w-full mt-0 flex flex-row h-[110px] items-center transition-all duration-300 ease-in-out ${openMenu ? 'block' : 'hidden'}`}
            >
                <button
                    className='focus:outline-none h-[16px] w-[16px] mr-[56px]'
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpenMenu(false);
                    }}
                    aria-label="Cerrar menú"
                >
                    <img
                        className='h-full w-full cursor-pointer hover:opacity-80 transition-opacity'
                        src={`${baseUrl}/images/icon-close.svg`}
                        alt="Cerrar menú"
                    />
                </button>
                <ul className='flex flex-row gap-[24px] font-semibold text-[16px]'>
                    <li>home</li>
                    <li>shop</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
            </div>


        </div>
    )
}

export default Nav