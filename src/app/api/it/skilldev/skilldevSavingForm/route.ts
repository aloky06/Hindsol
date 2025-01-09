import { NextRequest, NextResponse } from "next/server";
import { SkilldevData } from "@/library/model/skilldev";
import mongooseConnect from "@/library/util/mongooseConnect";

interface CourseData {
  name: string;
  price: number;
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
    const courses = formData.getAll("courses") as string[];

    // Store courses and their prices
    const coursesWithPrices: { name: string; price: number }[] = [];

    // Iterate over selected courses to get their prices
    courses.forEach((courseName) => {
      const price = getCoursePrice(courseName);
      if (price !== null) {
        coursesWithPrices.push({ name: courseName, price });
      }
    });

    //  saving the data to the skilldev database
    const savedResponse = await saveData(
      name,
      email,
      address,
      phoneNumber,
      pincode,
      remark,
      coursesWithPrices
    );

    console.log("saved response: " + savedResponse["_id"]);

    return NextResponse.json({ status: true, id:savedResponse["_id"]});
   
  } catch (error) {
    console.log(error);
    alert("Error Saving the Data, Please try with Another Id and Credentials.")
    return NextResponse.json({ status: false });
  }
}

// Method to calculate total amount based on selected courses
// function calculateTotalAmount(courses: Array<CourseData>): number {
//   return courses.reduce((total, course) => total + course.price, 0);
// }

// Method to get the price of a course
function getCoursePrice(courseName: string): number | null {
  // Define courses and their prices
  const courses: CourseData[] = [
    { name: "FULL STACK WITH NEXT JS", price: 100 },
    { name: "FRONT END", price: 150 },
    { name: "BACK END WITH NEXT JS", price: 200 },
    { name: "CORE JAVA", price: 80 },
    { name: "ADVANCE JAVA", price: 90 },
    { name: "FULL STACK WITH JAVA", price: 250 },
    { name: "BACK END WITH JAVA", price: 280 },
    { name: "DIGITAL MARKETING", price: 300 },
    { name: "ORACLE", price: 220 },
    { name: "GRAPHICS DESIGN", price: 100 },

    // Add more courses and their prices as needed
  ];

  // Find the course by name
  const course = courses.find((course) => course.name === courseName);

  // Return the price if course is found, otherwise return null
  return course ? course.price : null;
}

// save data to database
async function saveData(
  name: string,
  email: string,
  address: string,
  phone: number,
  pincode: number,
  remark: string,
  courses: Array<CourseData>
) {
  try {
    // connect to the database
    mongooseConnect();

    // setting the data
    const newRecord = new SkilldevData({
      name,
      email,
      address,
      phone,
      pincode,
      remark,
      courses,
    });

    const responseData = await newRecord.save();
    console.log("User data saved to the database:", responseData);
    return responseData;
  } catch (error) {
    alert("Error Saving the Data, Please try with Another Id and Credentials.");
    console.error("Error saving user data:", error);
  }
}
