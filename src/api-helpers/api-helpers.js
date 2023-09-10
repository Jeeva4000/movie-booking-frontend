
import axios from "axios";


export const getAllMovies = async()=>{
  const res=await axios.get("/movie")
  .catch((err)=>console.log(err));
  if(res.status!==200){
    return console.log("No Data");
  }
  const data= await res.data;
  return data;
};

export const sendUserAuthRequest = async (data,signup)=>{

 const res=await axios
 .post(`/user/${signup?"signup":"login"}`,{
    name:signup? data.name:"",
    email:data.email,
    password:data.password
  }).catch((err)=>console.log(err));

  if(res.status!==200 && res.status!==201){
    console.log("Unexpected error occured");
  }

  const resData = await res.data;
  return resData;
}


export const sendAdminAuthRequest = async (data)=>{
  const res = await axios
  .post("/admin/login",{
    email:data.email,
    password:data.password,
  }).catch((err)=>console.log(err));

  if(res.status !== 200){
    return console.log("Unexpected error");
  }

  const resData=await res.data;
  return resData;
}

export const getMovieDetails = async (id) => {
  try {
    const res = await axios
    .get(`/movie/${id}`);
    if (res.status !== 200) {
      console.error("Unexpected error");
      
    }
    const resData = res.data;
    return resData;
  }catch (error) {
    console.error(error);
    // Handle the error gracefully, return a meaningful value, or throw it again if needed
    throw error;
  }
};
 

// export const newBooking = async (data)=>{
//   const res=await axios
//   .post(`/booking`,{
//     movie:data.movie,
//     setNumber:data.seatNumber,
//     date:data.data,
//     user:localStorage.getItem("userId")
//   }).catch((err)=>console.log(err))
//   if(res.status !==201){
//     return console.log("Unexpected error")

//   }
//   const resData = await res.data;
//   return resData;
// }

export const newBooking = async (data) => {
  try {
    const res = await axios.post(`/booking`, {
      movie: data.movie,
      seatNumber: data.seatNumber,
      date: data.date,
      user: localStorage.getItem("userId")
    });

    if (res.status === 201) {
      return res.data; 
    } else {
      console.error("Unexpected error");
      throw new Error("Unexpected error"); 
    }
  } catch (err) {
    console.error(err);
    throw err; 
  }
}

// export const getUserBooking = async () => {
//   const id = localStorage.getItem("UserId"); 

 
//     const res = await axios.get(`/user/bookings/${id}`);
    
//     if (res.status !== 200) {
//       console.log("Unexpected error");
     
//     }

//     const resData =await res.data;
//     return resData;
  
// };

export const getUserBooking = async () => {
  const id = localStorage.getItem("UserId");

  try {
    if (!id) {
      throw new Error("User ID not found in localStorage.");
    }

    const response = await axios.get(`user/bookings/${id}`);

    if (response.status === 200) {
      return response.data; // Assuming the response contains the booking data
    } else {
      throw new Error("Unexpected error");
    }
  } catch (error) {
    console.error("An error occurred:", error);
    throw error; // Re-throw the error to handle it in the component
  }
};





export const deleteBooking = async (id) => {
  const res = await axios
  .delete(`/booking/${id}`)
  .catch(err=>console.log(err))

  if(res.status !==200){
    return console.log("Unexpected error")
  }

  const resData = await res.data;
  return resData;
}