import React from 'react'
import styles from '@/styles/Home.module.css'
import Faq from '@/components/faq/FaqSection'



export default function FaqPage() {
  return (
    <div className={styles.main}>
        <Faq />
    </div>
  )
}