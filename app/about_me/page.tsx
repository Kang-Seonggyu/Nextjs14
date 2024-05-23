import { redirect } from 'next/navigation'

export default function AboutMe() {
  const flag = false

  if (flag) {
    redirect('/')
  } else {
    return <h1>About ME!</h1>
  }
}
