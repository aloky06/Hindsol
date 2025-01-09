import React from "react";

function AddressComponent() {
  return (
    
      <div className="md:w-[90%] mx-3 flex flex-col items-center  bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover md:w-[40%] w-auto rounded-t-lg h-[300px] md:rounded-none md:rounded-s-lg"
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="hindsol-image"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           Hindsol Software Private Limited
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
           
           <strong>E-mail: </strong>info@hindsol.com<br/>
           <strong>Contact No: </strong>6363777534, 0542-2971879

           
          
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <strong>Head office:</strong> Siswan, Babatpur, Front of Raj College of Management, Varanasi, (U.P.) 221006<br/>
           <strong>Corporate office: </strong> Plot No. 45- 47, First Main Rd, Phase 2, Electronic City, Bengaluru, Karnataka 560100  
           </p>
          
        </div>
      </div>
   
  );
}

export default AddressComponent;
