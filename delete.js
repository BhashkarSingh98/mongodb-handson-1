const dbconnect=require("./mongodb")


const deletedata=async ()=>{

    let data=await dbconnect();
    let result=await data.deleteMany({lastCompany:"Y"})
    console.log(result);
    if(result.acknowledged){
        console.log("record deleted");
    }
}
deletedata();