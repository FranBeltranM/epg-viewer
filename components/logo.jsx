import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/">
      <a
        className="hover:opacity-90 text-black font-bold text-2xl relative after:content-['-online'] after:text-yellow-500 after:px-1"
      >
        EPG
      </a>
    </Link>
  )
}