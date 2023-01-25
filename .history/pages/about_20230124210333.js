import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import data from '../data/employee.json'
import Link from 'next/link'
import { useState } from 'react'
import Card from '@/components/Card/about'
import styles from '@/styles/About.module.css'

export default function About() {
    const [information, setInformation] = useState([...data])

    return (
        <>
            <Head>
                <title>About Us</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
        <div className={styles.navbar}>
          <div className={styles.navtitle}>JDM Institute</div>
          <div className={styles.navbutton}>
            <Link className={styles.link} href="about">Our Staff</Link>
          </div>
        </div>

      <div className={styles.cards}>
        {
         information && information.map((info, index) => {
            if(info.department.toLowerCase() === "science"){
              return (
                <Card
                  key={index} 
                  name={info.name}
                  department={info.department}
                  colourCard="#BABD8D"
                  colourInfo="#31572C"
                  font="50px"
                  fontColour="#132A13"
                />
              )
            }
          })
        }

        {
          information && information.map((info, index) => {
            if(info.department.toLowerCase() === "science"){
              return (
                <Card
                  key={index} 
                  name={info.name}
                  department={info.department}
                  colourCard="#BABD8D"
                  colourInfo="#31572C"
                  font="50px"
                  fontColour="#132A13"
  
                />
              )
            }
          })
        }
        </div>
      </main>
    </>
  )
      }