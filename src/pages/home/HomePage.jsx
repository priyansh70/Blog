import React from 'react'
import MainLayout from "../../components/MainLayout"
import Hero from './container/Hero'
import Aricles from "./container/Articles";
import CTA from './container/CTA';

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Aricles />
      <CTA />
    </MainLayout>
  )
}

export default HomePage