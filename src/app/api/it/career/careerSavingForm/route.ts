import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join, extname } from "path";
import { CareerData } from "@/library/model/career";
import mongooseConnect from "@/library/util/mongooseConnect";

// Function to generate a random string
function generateRandomString(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// save data to database
async function saveData(
  name: string,
  email: string,
  address: string,
  phone: number,
  pincode: number,
  remark: string,
  resume: string
) {
  try {
    // connect to the database
    mongooseConnect();

    // setting the data
    const newRecord = new CareerData({
      name,
      email,
      address,
      phone,
      pincode,
      remark,
      resume,
    });

    await newRecord.save();
    console.log("User data saved to the database:", newRecord);
    return NextResponse.json({
      status: true,
      message: "Data Saved Successfully.",
    });
  } catch (error) {
    console.error("Error saving user data:", error);
    return NextResponse.json({
      status: false,
      message: "Error saving data. Please try again later.",
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const address = formData.get("address") as string;
    const phoneNumber = Number(formData.get("phoneNumber") as string);
    const pincode = Number(formData.get("pincode") as string);
    const remark = formData.get("remark") as string;
    const resumeFile = formData.get("resume") as unknown as File;

    const bytes = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const extension = extname(resumeFile.name);
    const uniqueFilename = `${new Date()
      .toISOString()
      .slice(0, 10)}-${generateRandomString(10)}${extension}`;

    const path = join("./public/", "career-docs", uniqueFilename);
    await writeFile(path, buffer);
    console.log(`file is saved to the ${path} path.`);

    // saving the received data
    await saveData(name, email, address, phoneNumber, pincode, remark, path);

    return NextResponse.json({
      status: true,
      message: "Form Submitted Successfully.",
    });
  } catch (error) {
    console.error("Error saving user data:", error);
    return NextResponse.json({
      status: false,
      message: "Error submitting form. Please try again later.",
    });
  }
}
