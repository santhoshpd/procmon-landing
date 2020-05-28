import React from "react"
import Layout from '../components/Layout/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import Title from '../components/index content/title'
import Features from '../components/index content/features'
import Api from '../components/index content/api'
import Integrations from '../components/index content/integrations'
import './page.css'
export default function Index() {
  return(
  <div>
      <Layout>
          <Title/>
          <Features/>
          <Api/>
          <Integrations/>
      </Layout>
  </div>
  )
}
