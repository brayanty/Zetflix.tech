import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faLinkedin,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons'

function Contacts() {
  return (
    <section className='mt-10 mb-10 pt-5 pb-5 container m-0-auto flex justify-center items-center gap-4 flex-wrap'>
      <div className='flex gap-3 flex-col flex-wrap font-poppins text-white items-center mx-3'>
        <header className='flex gap-2 flex-col text-center text-black dark:text-white'>
          <h5 className='font-primarybold text-4xl'>Social Media</h5>
          <p className='font-primaryMedium text-wrap'>
            If you wish to hire my services, please contact me via the following channels:
          </p>
        </header>
        <ul className='flex gap-6 flex-wra text-black dark:text-slate-300'>
          <li>
            <a
              href='https://x.com/ElBrayanP21'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Go to X'
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                className='hover:scale-125 transition-transform'
                size='2xl'
              />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/el-brayan-p-4b9210261/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Go to Linkedin'
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className='hover:scale-125 transition-transform'
                size='2xl'
              />
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/elbrayanp2003/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Go to Instagram'

            >
              <FontAwesomeIcon
                icon={faInstagram}
                className='hover:scale-125 transition-transform'
                size='2xl'
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contacts
