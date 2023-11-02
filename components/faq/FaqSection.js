import React from 'react'
import { Container } from 'react-bootstrap'

export default function FaqSection() {
  return (
    <Container>
      <h1 className='text-center'>FAQ</h1>
      <hr />
      <div className='faq '>
        <h6>1. What is Apple Store?</h6>
        <p>Apple Store is a designated retail store which is operated by apple directly. This requires a local office collaborated with apple payrolls employee & a full-fledged operation.</p>
      </div>
      <div className='faq '>
        <h6>2. Is there any apple store in Bangladesh? if no then why?</h6>
        <p>Right now there is no Apple Store in Bangladesh. In underdeveloped & developing country apple initially runs their business through Authorized Resellers/Local Distributor or Sub Distributor. After creating a potential market through mentioned channel and after analyzing feasibility, apple takes their decision to start operation in any region. Here Market Size, Average monthly income of citizens, political stability of the country & governments approach towards business is subject to consideration.</p>
      </div>
      <div className='faq '>
        <h6>3. What is apple authorized reseller?</h6>
        <p>Apple authorizes different retail as authorized reseller worldwide. There are three types of authorized reseller; such as PPG, Mono AAR & APR. Here PPG is those small retail ( &lt; 150SFT) who sells multiple/other brands product along with apple product. Mono AAR is a dedicated store ( &gt; 150 SFT & &lt; 700 SFT) who sells only apple product & accessories. APR stands for apple Premium reseller where store size will be more than 700 SFT and will only be dedicated for Apple Product & accessories.</p>
      </div>
      <div className='faq '>
        <h6>4. Is there any AAR (apple authorized reseller) in Bangladesh? If so who they are?</h6>
        <p>Yes, there are 06 Apple authorized reseller in Bangladesh. They are,        </p>

        <ul>
          <li>Grameenphone</li>
          <li>Robi</li>
          <li>Banglalink</li>
          <li>Salextra Limited </li>
          <li>Executive Machine</li>
          <li>Gadget & Gear</li>
        </ul>
      </div>
      <div className='faq '>
        <h6>5. How Apple operates in subcontinent?</h6>
        <p>Apple partnered with Generation Next Pte headquartered in Singapore as Distributor for 09 countries. They are, Bangladesh, Nepal, Bhutan, Srilanka, Myanmar, Vietnam, Cambodia, Laos, Bahrain. Generation Next PTE is the Master Distributor for these 09 countries and Generation Next holds the authority to deploy Sub Distributor or to operate directly in any of the mentioned country with apple’s approval.</p>
      </div>
      <div className='faq '>
        <h6 >6. What is the relation between Salextra Apple Store & Salextra ?</h6>
        <p>Salextra Apple Store is the online Platform for Apple Products which is owned by Salextra and Salextra is authorized reseller approved by apple.</p>
      </div>
      <div className='faq '>
        <h6>7. What is the difference between official & unofficial apple product?</h6>
        <p>Official apple product has apple official warranty whereas unofficial product doesnt possess any. In some cases, some retailer claims to provide warranty but that is shop warranty; in those cases, those unauthorized retail normally repairs the phone which violates consumer right.</p>
        <p>Official apple product is Tax paid and imported as per the law of peoples republic of Bangladesh whereas the unofficial s are brought by smugglers or by luggage party.</p>
        <p>In official product you get the guarantee to get inactive/intact product along with original accessories. On the other hand, in unofficial product we have observed replacement of original accessories with lookalike copy, aside in more than 60% cases customer gets active product.</p>
      </div>
      <div className='faq '>
        <h6>8. Why the price of unofficial product is so low compared to official one?</h6>
        <p>Official products are imported by paying TAX, thats why price varies but helps the government from losing revenue. Aside currency conversion, Dollar rates, Interest rate & Channel cost impacts price waterfall.</p>
      </div>
      <div className='faq '>
        <h6>9. What is current duty structure of Bangladesh for Mobile phones?</h6>
        <p>As per the declared budget of 2019-2020 the duty on Mobile phone import is 57.8%</p>     
       </div>
      <div className='faq '>
        <h6>10. Is there any authorized service provider in Bangladesh? if so who they are?</h6>
        <p>Yes, there are 02 apples authorized service provider in Bangladesh. They are,</p>
          <ul>
            <li>Satcom iCenter</li>
            <li>Executive Machine</li>
          </ul>
      </div>
      <div className='faq '>
        <h6>11. What is the threat of purchasing unofficial product?</h6>
        <p>BTRC recently introduced IMEI tracking system. Though this is not yet fully functional but in near future when they will submit all the pending IMEI on system, then unofficial product will be out of network.</p>
        <p>By purchasing unofficial product consumer stands a chance to get active product along with copy or lookalike accessories.</p>
        <p>There is no chance consumer will get apple official warranty on unofficial product; if anyone claims they will provide apple official warranty that is baseless or pure fraudulent.</p>
        <p>Consumer doesnt get 0% EMI facility on unofficial product; some shop provides EMI but they charge the interest accordingly.</p>
        <p>In unofficial product consumer dont stand a chance to get official exchange program. If any retail provides Exchange offer, valuation price is below average which violates consumer law in all means</p>
      </div>
      <div className='faq '>
        <h6>12. Why Bangladesh is not in apples region list?</h6>
        <p>It requires a certain & consistent product activation in each month to be on the apple region list. Its an irony of fate that from Bangladesh there are more activation then requirement in each month but 60% of them are unofficial. Apple only counts official activation. We are leaving no stone unturned to make consumer conscious about official product and brought the equation from 5% to 40%. A little more conscious buying behavior can lead us to be on apple’s regional list</p>
      </div>
      <div className='faq '>
        <h6>13. Does Salextra provides Official warranty, exchange offer & EMI?</h6>
        <p>Yes, Salextra provides 1-year apple official warranty along with up to 12 months on 0% interest. Consumer can also exchange their old smartphone (any global brand*) for a new iPhone.</p>
      </div>
      <div className='faq '>
        <h6>14. Why there is delayed product launch in Bangladesh?</h6>
        <p>When apple releases its any product they have a distinct release date for each region where they have direct or indirect operation. In case of Bangladesh normally its 4-6 weeks and on top of that BTRC takes 10-15 working days to give approval & necessary certification for authorized import. For any new device there are certain customs issues also associated which also creates delay. Regardless of all this, it normally takes almost 9 weeks to release a product in our country.</p>
      </div>

    </Container>
  )
}
