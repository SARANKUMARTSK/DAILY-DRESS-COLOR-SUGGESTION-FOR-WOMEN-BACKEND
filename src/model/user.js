import mongoose from "./index.js";

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

let userSchema = new mongoose.Schema(
    {
        name:{
            type:String , 
            required :[true , "Name is required "]
        },
        email:{
            type:String , 
            required :[true , "Email is required "],
            validate : {
                validator:(value)=>validateEmail(value)
            }
        },
        password:{
            type:String , 
            required :[true , "Password is required "]
        },
        createdAt:{
            type:Date ,
            default:Date.now()
        },
        role:{
            type:String , 
            default:"user"
        }

    },
    {
        collection:"users",
        versionKey:false
    }
)

const userModel = mongoose.model("users",userSchema)

export default userModel