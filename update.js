const  dbconnect=require("./mongodb")

const updatedata=async ()=>{

    let data=await dbconnect();
    let result=await data.updateMany(
        {
            lastSalary:"1600000"},{$set:{
                lastSalary:"160000"}}
    )

console.log(result);
}
updatedata();
