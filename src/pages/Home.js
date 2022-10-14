import React ,{useState}from 'react';
import axios from '../axios/Axios';

function  Home(){
    const [data1,setData1]=useState();
   const ubikelist=async()=>{
    try 
    {
        //取得數據庫http://localhost:3003/posts的數據
        const Data = await axios.get("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"); 
        console.log(Data.data);
        setData1(Data.data);
    } 
    catch (error) 
    {
        alert("GET Error!!");    
    }  
   }
    return(<>
        <h3 className="text-center">home</h3>
        <div className="get">
                <button className="btn btn-info" onClick={ubikelist}>Get</button>
         </div>
         <div >
         <div className="container">
  <div className="row align-items-start center">
        {data1?.map(({sno,sarea,ar},key) => {
          return (
          
    <div className="col-4 p-2 center">
    <div className="card" Style={"width:18rem"}>
  <img src={require('./logo512.png')} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text"> {sno +
                " , " +
               "站名:"
               + sarea +
                " ," +
              "地址:"+ ar}</p>
  </div>
</div>
</div>
  
   
    
          );
        })}
        </div>
     
           
   </div>
      </div>
    </>)
}
export default Home;