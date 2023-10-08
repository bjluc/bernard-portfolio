// next Image
import Image from 'next/image'

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image
        src={'/avatar.png'}
        width={700}
        height={0}
        alt=''
        className='translate-z-0 h-auto'
      />
    </div>
  )
}

export default Avatar
