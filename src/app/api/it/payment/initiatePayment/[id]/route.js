import { NextRequest, NextResponse } from "next/server";
import sha256 from "crypto-js/sha256";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";



async function callPhonePey(muid,amount) {
  const transactionId= "MT-" + uuidv4().toString(36).slice(-6);
  const id=await muid;
  const payload = {
    merchantId:process.env.NEXT_MERCHANT_ID,
    merchantTransactionId: transactionId,
    merchantUserId: muid,
    amount: amount*100,
    redirectUrl: `https://hindsol.com/api/it/payment/status/${id}`,
    redirectMode: "POST",
    callbackUrl: `https://hindsol.com/api/it/payment/status/${id}`,
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };

  // encoding the payload
  const datapayload = JSON.stringify(payload);
  const dataBase64 = Buffer.from(datapayload, "utf-8").toString("base64");

  // calculate x-verify/checksum header
  const saltKey = process.env.NEXT_SALT_KEY;
  const fullURL = dataBase64 + "/pg/v1/pay" + saltKey;
  const dataSHa256 = sha256(fullURL);

  const checksum = dataSHa256 + "###1";

  // sending api request
  const UAT_PAY_API_URL = `https://api.phonepe.com/apis/hermes/pg/v1/pay`;

  const options = {
    method: "POST",
    url: UAT_PAY_API_URL,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": checksum,
    },
    data: {
      request: dataBase64,
    },
  };

  try {
    const response = await axios.request(options);
    

    const redirectUrl = response.data.data.instrumentResponse.redirectInfo.url;
    return redirectUrl;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function GET(request,{params}) {
  try{
    const amount=49;
    const muid=await params.id;
   const response=await callPhonePey(muid,amount);
   if (response) {
    return NextResponse.json({ status: true, data: response });
  } else {
    return NextResponse.json({ status: false});
  }

  }catch(error){
    console.log(error);
    return NextResponse.json({ status: false });
  }
  
    
  
}
