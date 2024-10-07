import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='items-center justify-center flex flex column h-screen'>
        <SignIn />
    </div>
  )
}