import React from 'react'
import { Container } from 'react-bootstrap'

export default function Policy() {
  return (
    <Container>
      <h2 className='text-center'>Return, Refund & Replacement</h2>
      <hr />
      <p>Thank you for shopping with us. salextra.com.bd believes in service and customer satisfaction. If you have any problem related to your purchase please feel free to call us at 01810008810 Or email us at hello@salextrabd.com In general the return window remains open for 3 days from the purchase date and after that the product is automatically entitled with warranty as per the brand and company policy.</p>

        <div className='faq'>
            <h6>REPLACEMENT POLICY </h6>
            <p>An item may be eligible for return within the applicable return window if it fulfills one or more of the following conditions:</p> 
            <div>
                <ul style={{marginLeft:'20px'}}>
                    <li>Was delivered in a physically damaged condition</li>
                    <li>Has missing parts or accessoriesIs</li>
                    <li>Is different from what was ordered or described in the website</li>
                </ul>    
            </div>
            <p>Please note that Products displayed at any offer or campaign or sale and marked as <b>non-returnable</b> on the product detail page cannot be returned</p>
            <p>All items must be returned in their original condition, with price tags intact (if any), user manual, warranty cards, original accessories and in the original manufacturerss box/packaging as delivered to you. We may reject the return/ pickup if the item(s) are not returned according to the policy mentioned against each category.</p>
            <p>For electronic devices please remove any stored personal information (Picture, video, Messages etc) or any modifications (password, screen lock pattern etc) before returning the product.</p>
        </div>
        <div className='faq'>
            <h6>CANCELLATION & REFUND</h6>
                <ol type='a'>
                 <li> Delivery of the ordered items is subject to availability of the products at our warehouse. Salextra.com.bd  authority may cancel any order within three working days if the stock of the ordered item(s) is temporarily unavailable.</li>
                 <li> If the customer agrees to wait for the availability of the stock of the product (s), the order may remain in open/processing/hold status for a maximum of 14 days.</li>
                 <li> In the case of clause (a), if the customer has already made an advance payment against the order, the customer will receive a full refund, provided the order has not received any cashback or is not under any offer/ campaign. If received, the cashback/ offer amount will be adjusted with the refund amount. Refunds may take upto 14 working days.</li>
                 <li> Once the order is confirmed, if the order is cancelled by customer request and the payment is made online, salextra.com.bd will charge online payment transaction processing fee while disbursing the refund.</li>
                </ol>
        </div>
        <div className='faq'>
            <h6>RETURN/REPLACEMENT GUARANTEE MAY NOT BE APPLIED IN ANY OF THE FOLLOWING CONDITIONS</h6>
            <ol type='a'>
                <li>There is any physical damage that are made intentionally or accidentally</li>
                <li>Incidental damage due to malfunctioning of product</li>
                <li>Any consumable/ unauthorized item which has been used or installed</li>
                <li>Products with tampered or missing serial / UPC numbers</li>
                <li>Any damage/defect which is not covered under the manufacturers warranty</li>
                <li>Any product that is returned without all original packaging and accessories, including the box, manufacturers packaging if any, and all other items originally included with the product(s) delivered.</li>
            </ol>

            <p>Replacement of the product is subject to availability of the same on salextra.com.bd . If not found, customers may be asked for a refund or any other modality agreed by both parties. Shipping charges or the courier expense made for the product return is non-refundable</p>
        </div>


    </Container>
  )
}
