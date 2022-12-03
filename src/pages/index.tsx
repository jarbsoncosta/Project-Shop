import Image from 'next/image'
import { styled } from '../styles'
import { Footer, HomeContainer, Product } from '../styles/pages/home'
import Shirt1 from '../assets/camisetas/shirt-1.png'
import Shirt2 from '../assets/camisetas/shirt-2.png'
import Shirt3 from '../assets/camisetas/shirt-3.png'


export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={Shirt1} alt="" width={520} height={480} />
        <Footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </Footer>
      </Product>
      <Product>
        <Image src={Shirt3} alt="" width={520} height={480} />
        <Footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </Footer>
      </Product>
    </HomeContainer>
  )
}
