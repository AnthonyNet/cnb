
import { Inter } from 'next/font/google'

import GetData from './GetData'

const inter = Inter({ subsets: ['latin'] })

const Home: React.FC = () => {

  return (
    <section className='w-screen h-screen'>
     <h2>df</h2>

		<GetData />
    </section>
  )
}

export default Home
