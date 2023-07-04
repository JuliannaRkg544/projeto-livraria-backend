import db from "../db.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";


export async function signup(req,res){
    const user = req.body
    console.log(user)
    try {
        const verifyUser =  await db.query(`SELECT * FROM users WHERE email = $1`, [user.email])
        if(verifyUser.rowCount>0){
           return res.status(409).send("user already in use")
            
        }
        const passwordHash = bcrypt.hashSync(user.password, 10);
        await db.query(`INSERT INTO users (name, password, email) VALUES ($1, $2, $3)`,
        [user.name, passwordHash, user.email])
         res.sendStatus(201)
    
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
        return
    }
   
}

export async function signin(req,res){
  const user = req.body
  console.log(user)
  try {
    const verifyUser = await db.query(`SELECT * FROM users WHERE email = $1`,[user.email])
    if (verifyUser.rowCount==0){
        return res.status(401).send("user not found")
    }
    const token = uuid();
  
   const userInfo = {token,
    name: verifyUser.rows[0].name
  }
   res.status(200).send(userInfo)
    
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
    return
  }
}