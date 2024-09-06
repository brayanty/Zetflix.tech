import './index.css'
import MeIMG from '../../assets/logo.png'

function Presentation() {
  return (
    <section className='mx-auto container py-20 md:py-24 scroll-m-20 w-full lg:max-w-4xl md:max-w-2xl'>
      <div className='max-w-xl m-4'>
        <div className='flex gap-4 mb-4'>
          <img
            className='rounded-full shadow-lg size-16'
            src={MeIMG}
            alt='Logo de Zetflix'
          />
          <a
            href='https://www.linkedin.com/in/el-brayan-p-4b9210261/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center transition md:justify-center md:hover:scale-105'
          >
            <div className='flex items-center'>
              <span className='relative inline-flex overflow-hidden rounded-full p-[1px]'>
                <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]' />
                <div className='inline-flex items-center justify-center w-full px-3 py-1 text-sm text-white rounded-full cursor-pointer bg-gray-700 backdrop-blur-3xl whitespace-nowrap'>
                  Disponible para trabajar
                </div>
              </span>
            </div>
          </a>
        </div>
        <h1 className='text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white'>
          Hola, soy Brayan Palacios
        </h1>
        <p className='mt-6 text-xl text-gray-800 dark:text-gray-300'>
          +2 años aprendiendo.{' '}
          <strong className='text-yellow-400'>
            Desarrollo de Software de manera autonoma
          </strong>{' '}
          de Aragua, Venezuela. Empeze con C++, y ahora estoy enfocado en,
          Desarrollo Web Front-end.
        </p>{' '}
        <nav className='flex flex-wrap gap-4 mt-8'>
          {' '}
          <a
            href='mailto:2003brayan2@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            role='link'
            className='inline-flex bg-gray-100 text-gray-950 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition  dark:text-white dark:bg-gray-700 border border-slate-800 dark:border-slate-300 focus-visible:ring-yellow-500/80 text-md hover:bg-slate-800 dark:hover:bg-slate-300 max-w-fit rounded-xl hover:text-zinc-200 dark:hover:text-black focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black'
          >
            {' '}
            <svg
              className='size-4'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5' />
              <path d='M3 6l9 6l9 -6' />
              <path d='M15 18h6' />
              <path d='M18 15l3 3l-3 3' />
            </svg>
            Contáctame
          </a>{' '}
          <a
            href='https://www.linkedin.com/in/el-brayan-p-4b9210261/'
            target='_blank'
            rel='noopener noreferrer'
            role='link'
            className='inline-flex bg-gray-100 text-gray-950 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition  dark:text-white dark:bg-gray-700 border border-slate-800 dark:border-slate-300 focus-visible:ring-yellow-500/80 text-md hover:bg-slate-800 dark:hover:bg-slate-300 max-w-fit rounded-xl hover:text-zinc-200 dark:hover:text-black focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black'
          >
            {' '}
            <svg
              className='size-4'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' />
              <path d='M8 11l0 5' />
              <path d='M8 8l0 .01' />
              <path d='M12 16l0 -5' />
              <path d='M16 16v-3a2 2 0 0 0 -4 0' />
            </svg>
            LinkedIn
          </a>
        </nav>
      </div>
    </section>
  )
}

export default Presentation
