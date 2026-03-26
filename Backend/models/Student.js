import mongoose from "mongoose";
const {Schema}=mongoose

const studentSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,required:true
    },
    slug:{
        type:String,
        unique:true,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    short_description:{
type:String,
required:true
    },
    source:{
        type:String,
        required:true
    },
    category:{
        type:String,
  enum:["Politics","Sports","nature","national","international","Social"],
  required:true
    },
    language:{
        type:String,
        enum:["Hindi","English"],
        required:true
    },
    thumbnail:{
        type:String,
        // required:true
    },
    createdAt: {
  type: Date,
  default: Date.now
}
},

    {
        timestamps:true
    }
)

 

export default mongoose.model("Student",studentSchema)

