import Image from 'next/image'
const tenant = () => {
  return (
    <div className='flex items-center justify-center m-auto'>
      {/* <object
        data={'/2022TennantApp.pdf'}
        type='application/pdf'
        width='100%'
        height='800px'
      ></object> */}
      <div className='p-2'>
        <Image
          src={'/2022TennantAppjpg.jpg'}
          width={800}
          height={1000}
          alt='tenant application'
        />
      </div>
    </div>
  )
}

export default tenant
