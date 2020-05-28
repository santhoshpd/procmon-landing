import React from "react"
import Layout from "../components/Layout/layout"
import './page.css'

const Pricing = () => (
  <Layout>
   <section id="pricing" className="pt-10 md-pt-15">
    <div className="container">
      <div className="title-block lg-text-4xl">
        <h2>Plans and Pricing</h2>
        <p>Simple, honest pricing. Powerful features.<br/>Find the right plan and payment for your project.</p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="pricing-box shadow">
            <h3 className="demo">Demo Version</h3>
            <h6>Free</h6>
            <small>forever</small>
            <p>Demo gives you full access to all features for 7 days</p>
            <div className="divider-light"></div>
            <ul>
              <li>Marketing plan</li>
              <li>Seo reporting tool</li>
              <li>Keywords explorer</li>
              <li>Competitive analysis</li>
              <li>Five projects - <span className="demo">New!</span></li>
            </ul>
            <div className="text-center">
              <a href="/signup" className="btn btn-demo">Demo version</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="pricing-box shadow">
            <h3>Standard Version</h3>
            <h6>$9</h6>
            <small>per month</small>
            <p>Outrank your competitors with this amazing software</p>
            <div className="divider-light"></div>
            <ul>
              <li>Marketing plan</li>
              <li>Seo reporting tool</li>
              <li>Keywords explorer</li>
              <li>Competitive analysis</li>
              <li>Unlimited projects - <span>New!</span></li>
            </ul>
            <div className="text-center">
              <a href="/signup" className="btn btn-buy">Buy now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="pricing-box shadow">
            <h3>Agency Version</h3>
            <h6>$29</h6>
            <small>per month</small>
            <p>For agencies and businesses with web presence</p>
            <div className="divider-light"></div>
            <ul>
              <li>Marketing plan</li>
              <li>Seo reporting tool</li>
              <li>Keywords explorer</li>
              <li>Competitive analysis</li>
              <li>Unlimited projects - <span>New!</span></li>
            </ul>
            <div className="text-center">
              <a href="/signup" className="btn btn-buy">Buy now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   
  </Layout>
)

export default Pricing
