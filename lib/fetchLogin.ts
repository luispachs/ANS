

export default  function fetchLogin (userId:string,passwordUser:string):any{

    let Userid:string=userId;
    let PasswordUser:string=passwordUser;
    let formData={Userid,PasswordUser}
  
    fetch("/api/loggin",{
      method:"post",
      body: JSON.stringify(formData),
   
    }).then(res=>{
     return res.json()
    }).then(data=>{
      if(data.code==1200){
        console.log(data);
        sessionStorage.setItem("_id",JSON.stringify(data));
        return data;
      }
      else if(data.code==1400){
        console.log(data);
        window.alert("Error:" + data.error)
        return data;
      }
     
    
    })
  }