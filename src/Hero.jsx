import './App.css'

export default function Hero() {
  return (
    <>
      <div className="w-full">
        <div className="text-center flex flex-col lg:gap-0 gap-5">
          <p className="lg:text-5xl text-3xl font-medium head lg:leading-[5rem] leading-[2.5rem]">Make your home an ode to joy</p>
          <p className="lg:text-2xl md:text-xl text-sm lg:w-[80%] mx-auto font-light">We turn your empty house to a lovely home, making the compact spaces with sapce saving furnitures. Making the unique tastes of yours into reality!</p>
        </div>
        <div className="w-full pt-10">
          <img src="hero-image.png" className="w-full"></img>
        </div>
      </div>

    </>
  )
}
