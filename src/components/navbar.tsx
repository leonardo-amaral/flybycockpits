function Navbar() {
  return (
    <div
      data-aos="fade-down"
      data-aos-anchor-placement="top-center"
      style={{
        position: 'fixed',
        backgroundColor: 'white',
        width: '100vw',
        height: '12vh',
        boxShadow: '1px 1px 5px rgba(0,0,0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          gap: '35vw'
        }}
      >
        <img src="" alt="FlyByCockPits" />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1vw',
            fontSize: '20px'
          }}
        >
          <a>Simulators</a>
          <a>Support</a>
          <a>Contact Us</a>
          <a>Cart</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
