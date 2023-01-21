const imageURL = '/me.webp'

export function AboutSection({ }) {
  return (
    <section className='container grid min-h-screen gap-10 py-5 mx-auto lg:grid-cols-2'>
      <div className='px-3 mb-10'>
        <h2 className='my-2 mb-4 text-3xl font-bold text-white uppercase lg:text-5xl'>About me.</h2>
        <p className='mb-4 text-light'> I am a web developer from the UK, who strives to build performant, user accessible web sites using modern technology.</p>
        <p className='mb-4 text-light'>In the recent years I have mopre focused on working with e-commerce sites to provide giving customers the best experience possible, using multiple languages ranging from nextjs, rails, astrojs, and nodejs</p>
      </div>
      <img src={imageURL} loading='lazy' width='500' height='500' alt='me' />
    </section>
  )
}