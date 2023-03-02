import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

const NavHead = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      transition={{ type: 'spring', stiffness: 300, damping: 140, delay: 0.3 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex px-5 md:flex-row items-center justify-between font-bold px-20 max-w-7xl m-auto '
    >
      <div className='flex items-center'>
        <Link href={'/'}>
          <Image
            src={'/Montcalm_Property.png'}
            alt='montcalm'
            height={175}
            width={175}
          />
        </Link>
      </div>
      <div className='hidden md:block w-1/3'>
        <ul className='flex justify-between font-serif'>
          <Link href={'/'}>
            <li className='text-zinc-600 text-lg hover:underline hover:decoration-[#f7ab0a]'>
              {' '}
              Home{' '}
            </li>
          </Link>
          <Link href={'/#properties'}>
            <li className='text-zinc-600 text-lg hover:underline hover:decoration-[#f7ab0a]'>
              {' '}
              Rentals{' '}
            </li>
          </Link>
          <Link href={'/#services'}>
            <li className='text-zinc-600 text-lg hover:underline hover:decoration-[#f7ab0a]'>
              {' '}
              Services{' '}
            </li>
          </Link>
          <Link href={'/#contact'}>
            <li className='text-zinc-600 text-lg hover:underline hover:decoration-[#f7ab0a]'>
              {' '}
              Contact{' '}
            </li>
          </Link>
        </ul>
      </div>
      {/*  */}
      <section className='MOBILE-MENU flex md:hidden'>
        <div
          onClick={() => setShowNav((prev) => !prev)}
          className='HAMBURGER-ICON space-y-2'
        >
          <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
          <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
          <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
        </div>

        <div className={showNav ? 'showMenuNav' : 'hideMenuNav'}>
          <div
            onClick={() => setShowNav(false)}
            className='absolute top-0 right-0 px-8 py-8'
          >
            <svg
              className='h-8 w-8 text-gray-600'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line
                x1='18'
                y1='6'
                x2='6'
                y2='18'
              />
              <line
                x1='6'
                y1='6'
                x2='18'
                y2='18'
              />
            </svg>
          </div>
          <ul className='NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]'>
            <li className='border-b border-gray-400 my-8 uppercase'>
              <Link
                href={'/#properties'}
                onClick={() => setShowNav(false)}
              >
                <p>Rentals</p>
              </Link>
            </li>
            <li className='border-b border-gray-400 my-8 uppercase'>
              <Link
                href={'/#services'}
                onClick={() => setShowNav(false)}
              >
                <p>Services</p>
              </Link>
            </li>
            <li className='border-b border-gray-400 my-8 uppercase'>
              <Link
                href={'/#contact'}
                onClick={() => setShowNav(false)}
              >
                <p>Contact</p>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: rgba(255, 255, 255, 0.90);
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </motion.nav>
  )
}

export default NavHead
