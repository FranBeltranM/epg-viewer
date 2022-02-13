import { Logo } from './logo'
import moment from 'moment'

export default function Header() {
  return (
    <>
      <header
        className="flex items-center justify-between w-full max-w-4xl px-6 py-2 rounded-xl mx-auto m-4 bg-yellow-300"
      >
        <Logo />
        <span>
          {moment().format('DD-MM-YYYY | HH:mm')}
        </span>
      </header>
    </>
  )
}