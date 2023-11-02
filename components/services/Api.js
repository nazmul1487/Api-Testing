import React from 'react'

export const get_products_by_category = async (formData) => {
    console.log("pppp", JSON.stringify(formData))
  try {
    const res  = await fetch("https://www.salextra.com.bd/api/product/getallproducts", {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Token": "yJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFeHRlcm5hbFN0b3JlSWQiOjMsImV4cCI6MTYzMzY5MzIxMy4wfQ.NH2zUNLXc4g7gz6prFNtJ3GrECyGSXGDjppyiDdjbos",
            "NST": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJOU1RfS0VZIjoiR1FEc3RjS3N4ME5IalBPdVhPWWc1TWJlSjFYVDB1Rml3RFZ2VkJyayIsImlhdCI6MTYxODE0MTIxMy4wfQ.sC2ST9KavvQvaO_abJFKFgmTHUFVRrTJqqq-Jdr9kuTL6b-ab5M5p-bv_sNw1ZQyu8iQhV5T86pEC0vxA07YYw",
            "brandid": "353"
        },
        body: JSON.stringify(formData)
    });
    const data = await res.json();
    // console.log("get_all_data", data);
    return data;
} catch(error) {
    
    console.log("Error to get product data", error);
}
}


export const get_products_by_id = async (id) => {
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
    } catch(error) {
        console.log("Error to get individual product data")
    }
}