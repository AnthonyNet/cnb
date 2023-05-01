
import { Inter } from 'next/font/google'

import GetData from './getdata'

const inter = Inter({ subsets: ['latin'] })

const Home: React.FC = () => {

  return (
    <section className='w-screen h-screen'>
     <h2>Main Page</h2>

		<GetData />
    </section>
  )
}

export default Home
