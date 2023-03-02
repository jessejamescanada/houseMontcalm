import Image from 'next/image'
import Link from 'next/link'
import { FaArrowDown, FaInstagram, FaFacebookSquare } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Banner = () => {
  const arrowStyle = { fontSize: '3rem', color: 'white', opacity: '0.9' }
  const socialStyle = { fontSize: '3rem' }
  return (
    <div>
      <div className='relative w-full h-[30rem]'>
        <Image
          className='object-cover opacity-80'
          src={'/montcalm.jpg'}
          alt='montcalm'
          priority
          fill
        />
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 140,
            delay: 0.5,
            duration: 0.5,
          }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className='absolute m-auto left-0 right-0 top-1/3 w-auto mt-5 lg:w-[60rem]'
        >
          <h1 className={`text-5xl text-white text-center font-serif`}>
            Montcalm Property Management2
          </h1>
          <p className='text-2xl text-white text-center font-semibold font-serif'>
            Serving Investors Within The Niagara Region
          </p>
          <div className='flex justify-center mt-2'>
            <Link href={'https://www.instagram.com/montcalmpm/'}>
              <FaInstagram
                style={socialStyle}
                className='fill-white hover:fill-[#f7ab0a] hover:ease-in-out'
              />
            </Link>
            <Link href={'https://www.facebook.com/MontcalmPM/'}>
              <FaFacebookSquare
                style={socialStyle}
                className='fill-white hover:fill-[#f7ab0a] hover:ease-in-out'
              />
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{
            delay: 1,
            duration: 0.7,
          }}
          whileInView={{ opacity: 1 }}
        >
          <Link href={'#properties'}>
            <FaArrowDown
              style={arrowStyle}
              className='absolute m-auto left-0 right-0 top-3/4 mt-9 md:mt-3'
            />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Banner
