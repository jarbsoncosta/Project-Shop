
import { Footer, HomeContainer, Product } from '../styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'


import 'keen-slider/keen-slider.min.css'
import { stripe } from '../lib/stripe'
import { GetStaticProps } from 'next'
import Stripe from 'stripe'

interface Props {
  products:
  {
    id: string
    name: string,
    description: string,
    imageUrl: string,
    price: number
  }[]

}

export default function Home({ products }: Props) {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((p) => {
        return (
          <Product key={p.id} className='keen-slider__slide'>
            <Image src={p.imageUrl} alt="" width={520} height={480} />
            <Footer>
              <strong>{p.name} </strong>
              <span>
                {p.price}
              </span>
            </Footer>
          </Product>
        )
      })}

    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })


  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    const priceFormatted = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(Number(price.unit_amount) / 100)

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.images[0],
      price:priceFormatted

    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, //2horas
  }
} 
