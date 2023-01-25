import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import data from '../data/education.json'
import { useState } from 'react'
import Card from '@/components/Card/index'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [information, setInformation] = useState([...data])

  return (
    <>
      <Head>
        <title>JDM Institute</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={nav-bar}
          <div className={nav-title}>JDM Institute</div>
          <div className={nav-button}>
            <Link className={styles.link} href="about">Our Staff</Link>
          </div>
        </div>
        {
          information && information.map((info, index) => {
            if(info.department.toLowerCase() === "business"){
              return (
                <Card 
                  key={index} 
                  degree={info.degree} 
                  gpa={info.gpa}
                  colourCard="#BABD8D"
                  colourInfo="#31572C"
                  font="20px"
                  fontColour="#132A13"
                />
              )
            }
          })
        }

        {
          information && information.map((info, index) => {
            if(info.department.toLowerCase() === "computing"){
              return (
                <Card
                  key={index} 
                  degree={info.degree} 
                  gpa={info.gpa}
                  colourCard="#BABD8D"
                  colourInfo="#31572C"
                  font="20px"
                  fontColour="#132A13"
                />
              )
            }
          })
        }
      </main>
    </>
  )
      }