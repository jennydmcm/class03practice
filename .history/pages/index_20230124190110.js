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
        <title>Raccoon City Institute of Technology</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div class="nav-bar">
          <div class="nav-title">Raccoon City Institute of Technology</div>
          <div class="nav-button">
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
                  colourCard="#f7b32b"
                  colourInfo="#efca08" 
                  font="20px"
                  fontColour="#2b4570"
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
                  colourCard="#f7b32b"
                  colourInfo="#efca08" 
                  font="20px"
                  fontColour="#2b4570"
                />
              )
            }
          })
        }
      </main>
    </>
  )