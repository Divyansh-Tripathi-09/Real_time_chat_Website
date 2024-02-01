import User from "../models/user.model.js"


export const getUserForSidebar=async(req,res)=>{
    try{

        const loggedInUserId = req.user._id

        const filteredUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password");//u will see all the users but not  yourself because ur loggedin and we are filtering all those who are not legged in.

       // const filteredUsers = await User.find()---- u will see all the users u can see ur self too 


    res.status(200).json(filteredUsers);
    }catch(error){
        console.log("error in getUserForSidebar:",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}

export default getUserForSidebar;