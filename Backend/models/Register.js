import  mongoose from "mongoose"
import bcrypt from "bcrypt";

const RegistrationSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }, role: {
        type:String,
    
    }
},
{
        timestamps:true
    })



RegistrationSchema.pre("save",async function(next){
    const user=this;

    if(!user.isModified("password"))
        return next();

        const salt=await bcrypt.genSalt(10);
        this.password=await bcrypt.hash(this.password,salt)
    
})
RegistrationSchema.methods.matchPassword=async function(candidatePassword){
    return await bcrypt.compare(candidatePassword,this.password)
}
export default mongoose.model("Register",RegistrationSchema)
