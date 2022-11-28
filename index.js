const dbconnect=require("./mongodb")

const main=async ()=>{
   let data=await dbconnect();
   data=await data.find({salary :"35000"}).toArray();
   console.log(data);
}
main()

const maintwo=async ()=>{
   let data=await dbconnect();
   data=await data.find({overallExp :"2"}).toArray();
   console.log(data);
}
maintwo()