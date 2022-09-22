import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "../DataCenterPage/DataCenterPage.css";
import { CommonBanner } from "../OrganisationalChartPage/OrganisationalChartPage";

const DataCenterSection = () => {
  let dataPara =
    "GECPKD Data Centre providing following services such as Campus Networking and Management ,Management of Digital Library Server , Management of Language Lab Server,Managemenet of local Web Server ,Management of DHCP and DNS servers , Management and maintenance of Campus WIFI Network , IP-PBX Controller Installation and Management For IP Phone conectivity throughout in Campus ,Design, coding and updation of college website and also college Intranet website (www.gecpkd.edu).Datacentre is a rendezvous place for Centralised distribution and servicing of digital data and Software .";
  return (
    <>
      <div className="data_center_section mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 datacenter_para">
              <p>{dataPara}</p>
            </div>
            <div className="col-lg-12 col-md-12 col-12 datacenter_heading mt-4">
              <h3>Architecture and Layouts</h3>
            </div>
            <div className="col-lg-6 col-md-6 col-12 col-sm-12 datacenter_details mt-3">
              <img src="/images/datacenter/data1.jpg" alt="" />
              <h3 className="mt-4">Campus Networking</h3>
              <p className="mt-4">
                Data Centre is maintaining and managing the Campus networking
                and Internet connectivity of the College. College campus is
                fully networked with OFC backbone and both wired and wireless
                connectivity. 100 Mbps bandwidth NKN (National Knowledge
                Network) internet connectivity is available with a backup
                support of 10 Mbps NMEICT connection.It offers services of
                secure data communication through the implementation of Firewall
                and hosting and managemnet of AAA server such as LDAP and Radius
                servers.The avilable two ISP’s Connection are configured as
                Failover and Load balencing concept.
              </p>
              <img className="mt-3" src="/images/datacenter/d3.jpg" alt="" />
              <h3 className="mt-3">Connectivity Details</h3>
              <div className="connection_details">
                <div className="mt-4">
                  <h3>NKN (National Knowledge Network)</h3>
                  <p>Band Width : 100 mbps</p>
                  <p>Provider : BSNL</p>
                  <p>Media : Optic Fiber</p>
                </div>
                <div className="mt-4">
                  <h3>NKN (National Knowledge Network)</h3>
                  <p>Band Width : 100 mbps</p>
                  <p>Provider : BSNL</p>
                  <p>Media : Optic Fiber</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 col-sm-12 datacenter_details mt-3">
              <img src="/images/datacenter/data2.jpg" alt="" />
              <h3 className="mt-4">GEC WIFI</h3>
              <p className="mt-4">
                College WiFi (‘GECPKDWIFI‘) is available in the whole campus and
                ladies hostel.The access to college Wifi restricted to
                registered users and registered device only. The one who wants
                to avail the WiFi facility, has submit an application in the
                prescribed format and the personally bring the device to
                register at DataCenter.Usage of college Wifi in an unregistered
                device by spoofing/tethering will be treated as violation of
                this policy.Even if the access id is different, the registered
                Wifi user is the sole responsible person for all the
                communications originated from the registered device
              </p>
              <img className="mt-4" src="/images/datacenter/d4.jpg" alt="" />
              <h3 className="mt-3">Data Center Staff Charges</h3>
              <div className="connection_details">
                <div className="mt-4">
                  <h3>Data Centre Coordinator</h3>
                  <p>Sri. Sumesh E.</p>
                  <p>Computer Programmer (IT)</p>
                  <p>sumeshe@gecskp.ac.in</p>
                  <p>9495634774</p>
                </div>
                <div className="mt-4">
                  <h3>Asst. Coordinator</h3>
                  <p>Sri. Suresh Kumar K.C.</p>
                  <p>System Analyst (Adhoc) (CSE)</p>
                  <p>sureshkc1209@gmail.com</p>
                  <p>9846436300</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function DataCenterPage() {
  return (
    <div>
      <Header />
      <CommonBanner title={"Data Centre @ GECPKD"} />
      <DataCenterSection />
      <Footer />
    </div>
  );
}

export default DataCenterPage;
