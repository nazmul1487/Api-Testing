import { useRouter } from 'next/router'
import React, { useEffect, useState } from "react";
const ChargerbasicData = require('@/JsonData/DB.json');
import Error from 'next/error';
import ProductDetailPage from '@/components/product/ProductDetailPage';
import ProductsDes from '@/components/product/ProductDes';
import Link from 'next/link';

export default function ChargerBasic( charger ) {

  const [data, setData] = useState([{}]);
    const [error, setError] = useState(null);
    console.log("piid",charger)
    const tm=charger;

    const getData = async () => {
        try {
          const baseUrl = 'https://www.salextra.com.bd/api/product/productdetails';

            const API_BASE_URL = `${baseUrl}/${tm.charger}`+"/0";
            const getHeaders = () => {
                return {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Token": "yJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFeHRlcm5hbFN0b3JlSWQiOjMsImV4cCI6MTYzMzY5MzIxMy4wfQ.NH2zUNLXc4g7gz6prFNtJ3GrECyGSXGDjppyiDdjbos",
                    "NST": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJOU1RfS0VZIjoiR1FEc3RjS3N4ME5IalBPdVhPWWc1TWJlSjFYVDB1Rml3RFZ2VkJyayIsImlhdCI6MTYxODE0MTIxMy4wfQ.sC2ST9KavvQvaO_abJFKFgmTHUFVRrTJqqq-Jdr9kuTL6b-ab5M5p-bv_sNw1ZQyu8iQhV5T86pEC0vxA07YYw",
                    
                };
            };
            const response = await fetch(API_BASE_URL, {
                method: "GET",
                headers: getHeaders(),
               
            });
            const newData = await response.json()
            console.log(newData.data);
            setData(newData.data);
        } catch (error) {
            setError(error);
            // console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

  return (
  //   <div>
  //    {Object.keys(data).length <= 0 ? (
  //     <div class="d-flex align-items-center justify-content-center vh-100">
  //     <div class="text-center">
  //         <h1 class="display-1 fw-bold">404</h1>
  //         <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
  //         <p class="lead">
  //             The page you’re looking for doesn’t exist.
  //           </p>
  //         <Link href="/" className="btn btn-primary" >Go Home</Link>
  //     </div>
  // </div>
        
  //     ) : (
  //       <>
  //       {/* <ProductDetailPage  data={data[0]}/> */}
        
  //       </>
        
  //     )}
  // </div> 
  <>
  <ProductDetailPage  data={data}/>
  </>
  );
}

ChargerBasic.getInitialProps = async ({ query: { charger } }) => {
  // console.log(typeof(charger));
  // console.log({charger});
  // console.log(charger);
  // const data = await ChargerbasicData.CHARGER.filter(item=> item.slug==charger)
  // console.log('Data', data)
  // const pid = charger.toString();
  return {charger};
};

