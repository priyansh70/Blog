import React from 'react'
import MainLayout from "../../components/MainLayout"
import Hero from './container/Hero'
import Aricles from "./container/Articles";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Aricles />
    </MainLayout>
  )
}

export default HomePage