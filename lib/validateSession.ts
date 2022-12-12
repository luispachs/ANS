const chyper= require("crypto");

export default function validateSession(user:string,pws:string){

    let usuario:string = "ferreum";
    let password:string ="yenifer-101291";

    if( user==usuario && pws==password){
      
        return {
            code:1200,
            error:null,
            user:{usuario,password,rol:"admin"},
            message:"You are loggin",
            isLogin:true
        }
    }

    return {
        code:1400,
        message:"usuario y/o contraseña equivocados",
        user:null,
        error:1400,
        isLogin:false
    }

}
