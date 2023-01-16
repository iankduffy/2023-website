const imageURL = '/me.webp'

export function AboutSection({ }) {
  return (
    <section className='container grid min-h-screen gap-10 py-5 mx-auto lg:grid-cols-2'>
      <div className='px-3 mb-10'>
        <h2 className='my-2 text-3xl font-bold text-white uppercase lg:text-5xl'>About me.</h2>
        <p className=' text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <img src={imageURL} loading='lazy' width='500' height='500' alt='me' />
    </section>
  )
}