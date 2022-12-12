import validateSession from "../../lib/validateSession";
import { NextApiRequest,NextApiResponse } from "next";
export default function handler(req:NextApiRequest,res:NextApiResponse){
    let user:string;
    let password:string;

    let infoUser:any=JSON.parse(req.body);
    console.log(infoUser);

    user=infoUser.Userid;
    password=infoUser.PasswordUser;

    let data = validateSession(user,password);
    console.log(data);
    if( data.isLogin==false){
        return res.status(401).json(data);

    }

    return res.status(200).json(data);
}