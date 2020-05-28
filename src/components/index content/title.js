import React from "react"
import HeroImage from '../../images/HeroImage'
const Title = () => (
<div className="pt-5 mb-0 pb-6">
    <section className="pt-10 md-pt-15">
      <div className="container mx-auto px-8 lg-flex">
        <div className="row">
          <div className="text-center lg-text-left mr-5 col-lg-4">
            <div className="title-block">
              <h2>Simple and Effective Cron Job Monitoring</h2>
              <p>Receive alerts when your nightly backups, weekly reports, cron jobs and scheduled tasks don't run on time.</p>
            </div>
            <p className="mt-8 md:mt-12">
              <button className="btn btn-buy" size="lg">Get Started</button>
            </p>
          </div>
        <div className=" col-lg-7">
          <HeroImage />
        </div>
        </div>
      </div>
    </section>
    </div>
)
export default Title;