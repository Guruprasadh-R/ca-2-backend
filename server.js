const express=require("express")
const app=express();
app.use(express.json());
port=5000

let users=[];

app.post("/users",(req,res)=>{
    const user = {user_id:user.length+1,...req.body}
    user.push(users)
    res.json({message:"user created",user})
})

app.get("/",(req,res)=>{
res.json(users);

})

app.get("/users/:id",(req,res)=>{
    const user = users.find(u=>user_id==req.params.id)
    res.json(user||{error:"user not found"})
})

app.put("/users/:id",(req,res)=>{
    const user = users.find(u=>user_id==req.params.id)
    if(user) Object.assign("user",req.body)
        res.json(user||{error:"user not found"})
})


app.delete("/users/:id",(req,res)=>{
    user = users.filter(u=>user_id!=req.params.id)
    res.json({message:"user deleted"})
})

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})