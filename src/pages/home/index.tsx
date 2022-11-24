import AOS from 'aos'
import { useEffect } from 'react'
import Navbar from '../../components/navbar'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  })

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Image First Content */}
      <FirstContentLoad />
      {/* About Us */}
      <AboutUsHome />
      {/* Products */}
      <ProductHome />
    </>
  )
}

function FirstContentLoad() {
  return (
    <div
      style={{
        backgroundColor: 'black',
        height: '80vh',
        width: '100vw'
      }}
    >
      <div
        data-aos="zoom-in"
        style={{
          color: 'white',
          fontSize: '32px',
          position: 'absolute',
          top: '270px',
          left: '400px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1vh'
        }}
      >
        <h1>A True</h1>
        <h1>Flight Simulator</h1>
        <h1>Cockpit Environment</h1>
        <button style={{ width: '10vw', height: '5vh', borderRadius: '10px' }}>
          See more
        </button>
      </div>
    </div>
  )
}

function AboutUsHome() {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      style={{ backgroundColor: '#b9b9b9', width: '100vw', height: '70vh' }}
    >
      <div
        style={{
          paddingTop: '10vh',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2vw'
        }}
      >
        <div
          style={{
            height: '50vh',
            width: '30vw',
            backgroundColor: '#808080',
            marginLeft: '3vw'
          }}
        ></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4vh' }}>
          <div
            data-aos="flip-right"
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '32px'
            }}
          >
            <h1>About Us</h1>
            <div
              style={{
                width: '20vw',
                height: '0.5vh',
                backgroundColor: 'black'
              }}
            ></div>
          </div>
          <div
            style={{
              width: '30vw',
              display: 'flex',
              flexDirection: 'column',
              gap: '4vh',
              fontSize: '18px'
            }}
          >
            <p>
              FlybyCockpits is a young and enthusiast Engineer and aeronautical
              technical designer’s team, we are creating the most realistic
              Cockpits Environment to simulate your favourite aircraft and bring
              you an exciting experience.
            </p>
            <p>
              FlybyCockpits have more then 10 years of experience in
              Development, Manufacture and Build Flight Simulator Systems either
              for entertainment, educational/ instruction or training purposes
              according with JAR-FCL requirements.
            </p>
            <p>
              All Products shown are Developed and Manufactured by Flybycockpits
              we use hi technology techniques and modern fabrication process
              that results in a Hi Quality products, extremely easy and fast way
              to assemble all them.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductHome() {
  function ProductCard({ name }: any) {
    return (
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        style={{
          width: '15vw',
          height: '40vh',
          backgroundColor: '#bdbdbd',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2vw',
          borderRight: '1px solid #969696',
          fontSize: '24px',
          gap: '2vh'
        }}
      >
        <div
          style={{
            width: '15vw',
            height: '30vh',
            backgroundColor: 'black'
          }}
        ></div>
        <h1>{name}</h1>
        <button
          style={{
            width: '10vw',
            height: '5vh',
            borderRadius: '10px',
            border: 'none'
          }}
        >
          See More
        </button>
      </div>
    )
  }

  const listProducts = [
    { name: 'Simulator 1' },
    { name: 'Simulator 2' },
    { name: 'Simulator 2' }
  ]

  return (
    <div
      style={{
        width: '100vw',
        height: '80vh',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '32px',
        justifyContent: 'center',
        gap: '5vh'
      }}
    >
      <h1 data-aos="flip-left" style={{ color: 'white', marginLeft: '22vw' }}>
        Products
      </h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {listProducts.map(item => (
          <ProductCard name={item.name} />
        ))}
      </div>
      <button
        style={{
          width: '10vw',
          height: '5vh',
          borderRadius: '10px',
          border: 'none',
          marginLeft: '45vw'
        }}
      >
        See Others
      </button>
    </div>
  )
}
