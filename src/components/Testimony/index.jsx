import './index.css'

function Testimony ({ users, ratings }) {
  if (!users) return

  return (
    <section className='container m-0-auto flex gap-6 flex-col flex-wrap mt-4 font-poppins'>
      <h4 className='font-primarybold text-teal-100 text-4xl text-center'>
        Testimonios
      </h4>
      <div className='flex flex-row justify-center gap-4 flex-wrap'>
        {users.map((user, index) => {
          return (
            <article
              key={index}
              className='flex items-center pr-2 pl-2 gap-2 w-[350px] h-20  border rounded-md border-gray-400'
            >
              <figure className='rounded-full h-15 w-15 overflow-hidden'>
                <img
                  className='h-full w-full'
                  src={user.picture.medium}
                  alt='imagen de una persona'
                />
              </figure>
              <header className='text-white'>
                <h3 className='text-md font-primarybold'>
                  {user.name.first + ' ' + user.name.last}
                </h3>
                <p className='text-base font-primaryMedium'>
                  Lorem ipsum dolor, sit amet ddasd d ads d dsad...
                </p>

                {/* <a href="#" aria-description={user.email}>
                  {user.email.length <= 23
                    ? user.email
                    : user.email.substring(0, 23) + "..."}
                </a> */}
              </header>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Testimony
