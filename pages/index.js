import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HeaderSlider from '@/components/home/HeaderSlider'
import Categories from '@/components/home/Categories'
import TopSelling from '@/components/home/TopSelling'
import PhoneSection from '@/components/home/PhoneSection'
// import IpadSection from '@/components/home/IpadSection'
import CategorySection from '@/components/home/CategorySection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>XTRA LifeStyle</title>
        <meta name="description" content="Discover the future of technology and elevate your  lifestyle with XTRA! Explore cutting-edge electronics gadgets that redefine innovation and style at xtra.com.bd. XTRA is your ultimate destination for the latest in electronics excellence. Explore a world of innovation and upgrade your everyday experiences with premium lifestyle gadgets. Visit xtra.com.bd today!" />
        <meta name="keywords" content="XTRA - Your one-stop shop for lifestyle gadgets! Discover a wide range of high-quality, affordable, and innovative gadgets, including electronic, smart, durable, stylish, and trending options. We prioritize customer satisfaction with excellent service, warranties, and a hassle-free return policy. Enjoy free shipping, fast delivery, and round-the-clock 24/7 customer support. Shop at XTRA for the best prices and the highest quality in lifestyle gadgets, all backed by our satisfaction guarantee." />
        <meta property="og:image" content="https://xtra-life-style-website.vercel.app/images/banner/metaImage.jpg"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ICON.ico" />
      </Head>
      <main className={styles.main} style={{overflow:"hidden"}}>
        <HeaderSlider />
        <Categories />
        <TopSelling /> 
        {/* <PhoneSection /> */}
        <CategorySection />
      </main>
    </>
  )
}
