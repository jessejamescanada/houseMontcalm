const ServicesSingle = ({
  title,
  excerpt,
  list1,
  list2,
  list3,
  list4,
  list5,
  list6,
  list7,
  list8,
  list9,
  list10,
  bg,
}) => {
  return (
    <div className='w-full h-auto m-2'>
      <div className={`h-full rounded-lg p-5 ${bg}`}>
        <h3
          className={`text-center text-3xl mb-4 text-zinc-100 font-bold font-serif`}
        >
          {title}
        </h3>
        <p className='font-semibold mb-2'>{excerpt}</p>
        <ul className='px-3'>
          <li className='list-disc'>{list1}</li>
          <li className='list-disc'>{list2}</li>
          <li className='list-disc'>{list3}</li>
          <li className='list-disc'>{list4}</li>
          <li className='list-disc'>{list5}</li>
          <li className={`${list6 ? 'list-disc' : ''}`}>{list6}</li>
          <li className={`${list7 ? 'list-disc' : ''}`}>{list7}</li>
          <li className={`${list8 ? 'list-disc' : ''}`}>{list8}</li>
          <li className={`${list9 ? 'list-disc' : ''}`}>{list9}</li>
          <li className={`${list10 ? 'list-disc' : ''}`}>{list10}</li>
        </ul>
      </div>
    </div>
  )
}

export default ServicesSingle
