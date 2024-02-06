import UserSchema from "../modal/User.Schema.js";
import bcrypt from 'bcrypt'
export const register= async (req,res)=>{

     try {
        const {name,email,password,confirmPassword}=req.body.userData
        console.log(req.body)
        if(!name || !email || !password || !confirmPassword)
        {
            return res.send("all fields are required")
        }
        if(password != confirmPassword)
        {
            return res.send("password and confirm password are mismatch")
        }
        const isEmailExist=await UserSchema.find({email:email})
        if(isEmailExist.length)
        {
            return res.send("Email is exist")
        }
        
        const hashedPassword=await bcrypt.hashSync(password,10)
        const user=new UserSchema({
            name:name,
            email:email,
            password:hashedPassword
            

        })

        await user.save()
        return res.json({message:'User Stored successfully',success:true})
     } catch (error) {
        return res.status(500).json({error})
        
     }
} 

export const login= async (req,res)=>{
    try {

        const {email ,password} = req.body.loginData
        if(!email || !password)
        {
            return res.status(401).json({success:false,message:"email and password required"})
        }
        const user=await UserSchema.findOne({email:email})
        if(!user)
        {
            return res.status(404).json({success:false,message:"user not found"})
        }

        const isPasswordCorrect=await bcrypt.compare(password,user.password)
        if(!isPasswordCorrect)
        {
            return res.status(404).json({success:false,message:"password is incorrect"})
        }

        return res.status(200).json({success:true,message:"login successful"})
    } catch (error) {
        return res.status(500).json({error})
        
    }
    
} 