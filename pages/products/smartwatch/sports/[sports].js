import { useRouter } from 'next/router'
import React from 'react'
const SportsWatchData = require('@/JsonData/DB.json');
import Error from 'next/error';
import ProductDetailPage from '@/components/product/ProductDetailPage';
import Link from 'next/link';

export default function SportsWatch( data ) {
  // console.log('DDDD',data)
  return (
    <div>
     {Object.keys(data).length <= 0 ? (
      <div class="d-flex align-items-center justify-content-center vh-100">
      <div class="text-center">
          <h1 class="display-1 fw-bold">404</h1>
          <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
          <p class="lead">
              The page you’re looking for doesn’t exist.
            </p>
          <Link href="/" className="btn btn-primary" >Go Home</Link>
      </div>
  </div>
        
      ) : (
        <>
        <ProductDetailPage  data={data[0]}/>
        
        </>
        
      )}
  </div> 
  );
}

// const Phone = (data) => {
//   // const router = useRouter()
//   // const {
//   //   query: { phone },
//   // } = router;
//   // console.log('phoneid',phone);
//   console.log('DDDDDDDD',Object.keys(data).length)
//   return data ? (
//     // console.log('DDDDDDDD',data)
   
//   <div>
//      {Object.keys(data).length <= 0 ? (
//         <p>sorry</p>
//       ) : (
//         <p>{data[0].name}</p>
//       )}
//   </div> 

//   ) : <Error statusCode={404} title="custom title" />
// }
SportsWatch.getInitialProps = async ({ query: { sports } }) => {
 // const { data } = await ArticleAPI.get(pid);
  const data = await SportsWatchData.CLASSICWATCH.filter(item=> item.slug == sports)
  // console.log('Data', data)
  return data;
};

// export default Phone;
