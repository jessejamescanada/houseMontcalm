const tenant = () => {
  return (
    <div>
      {/* <iframe
        src={'/2022TennantApp.pdf'}
        frameborder='0'
        width='100%'
        height='500'
        allow='fullscreen'
      ></iframe> */}
      <object
        data={'/2022TennantApp.pdf'}
        type='application/pdf'
        width='100%'
        height='800px'
      ></object>
    </div>
  )
}

export default tenant
