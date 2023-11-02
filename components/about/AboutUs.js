import React, { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import AOS from "aos";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
        duration:1000,
    });
    AOS.refresh();
});
  return (
    <div>
      <div className="about-banner"></div>
      <div className="aboutHead">
        <h1>
          {" "}
          <span> To be</span> Continued...
        </h1>
      </div>

      <div className="aboutBody">
        <Row className="justify-content-md-center mx-0">
          <Col className="d-flex justify-content-center" md="auto">
            <Card className="about-body-card">
              <p>
                With a vision to serve the Digital Bangladesh in a better way we
                have started our journey back in January 2020 with only 5 core
                team members and a single room. With our promoters and leaders
                experience and expertise we have reached to 100+ team members
                within just 2 years. Salextra is now a company of 100+ employee
                serving across the country and abroad.
              </p>
              <p>
                In 2020 we stepped into trading business with world renowned
                brand Motorola mobile and Motorola lifestyle products. In just
                two years we have launched Lenovo, Amazfit, Dizo, ZTE and our
                own brand XTRA as a National Distributor for Bangladesh Market.
                Our target to introduce more than 50 global top brands to serve
                our customers through our nationwide distribution and online
                platforms.
              </p>
              <p>
                We are now number 1 supplier and seller for 4G modem and router
                in Bangladesh market through the best partnership with countries
                giant telecom operators like Grameenphone, Robi Axiata,
                Banglalink Digital.
              </p>
              <p>
                We have launched country’s most trusted e-commerce platform
                www.salextra.com.bd back in January 2021. We have served more
                that 20,000+ happy customers within a short span of time with
                97% successful delivery. We are providing best online shopping
                experience in Bangladesh for official and original mobile,
                watch, smart watch, lifestyle gadgets, lifestyle accessories,
                consumer electronics, consumer goods, health and beauty products
                buy offering 0% interest on both card and cardless EMI, COD,
                Discount, Cashback with easy return and refund policy along with
                hassle free warranty policy.
              </p>
              <p>
                In 2022 we have launched our lifestyle retail chain in Dhaka and
                Chittagong. Where we bring Salextra Lifestyle{" "}
                <a
                  style={{ color: "blue" }}
                  href="https://www.facebook.com/salextralifestyle"
                >
                  <u>(Salextra Lifestyle | Facebook)</u>
                </a>{" "}
                as a solution to lifestyle change. With this we can bring the
                authorized products of global brands to consumers
              </p>
              <p>
                We have achieved milestone in 2022 with a 220%+ revenue growth
                compare to our starting year 2021. With a vision to create
                thousand plus job, export to global market we are expanding our
                business in manufacturing focused on mobile, tablets, lifestyle
                products by 2025.
              </p>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="mx-1 mb-5">
        <div className="mission-card"></div>
      </div>
    </div>
  );
}
