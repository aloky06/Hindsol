import { NextResponse } from "next/server";
import sha256 from "crypto-js/sha256";
import axios from "axios";
import connectToMongoDB from "../../../../../../library/util/mongooseConnect";
import {SkilldevData} from "../../../../../../library/model/skilldev";



export async function POST(req,{params}) {
 

    const data = await req.formData();
   
    const status = data.get("code");
    const merchantId = data.get("merchantId");
    const transactionId = data.get("transactionId");
    const muid=await params.muid;
    console.log("muid:",muid);
    console.log("params:",params);
    console.log("merchant id:",merchantId);
    console.log("transactionId:",transactionId);
    console.log("status:",status);

    

   
    const st =
      `/pg/v1/status/${merchantId}/${transactionId}` +`${process.env.NEXT_SALT_KEY}`;
    const dataSha256 = sha256(st);

    const checksum =
      dataSha256 + "###1";
   

    const options = {
      method: "GET",
      url: `https://api.phonepe.com/apis/hermes/pg/v1/status/${process.env.NEXT_MERCHANT_ID}/${transactionId}`,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
        "X-MERCHANT-ID": `${process.env.NEXT_MERCHANT_ID}`,
      },
    };

    // Check payment status
    const response = await axios.request(options);
   
    
    if (response.data.code=== "PAYMENT_SUCCESS") {
      await updatePaymentStatus(muid);
      return NextResponse.redirect(`https://hindsol.com/success`,
        {
          status: 301,
        }
      );
    } else {
      await deletePaymentRecord(muid);
      return NextResponse.redirect("https://hindsol.com/failure", {
        status: 301,
      });
    }

  
}



// update status to database
async function updatePaymentStatus (id) {
  try {
    // connect to the database
    await connectToMongoDB();

// Your update data
const updateData = {
  paymentstatus:true
};

// Use findByIdAndUpdate to find the document by ID and update it
const response=await SkilldevData.findByIdAndUpdate(id, updateData, { new: true });
   if(response)
   {
    console.log("status updated in the database."+response);
   }
  
  } catch (error) {
    console.error("Error updating the data:", error);
  }
}

// deleting the data
async function deletePaymentRecord(id) {
  try {
    // connect to the database
    await connectToMongoDB();

    await SkilldevData.findByIdAndDelete(id);
    console.log("data deleted from the database");
  
  } catch (error) {
    console.error("Error deleting the data:", error);
  }
};
