import TodoSchema from "../modal/Todo.Schema.js";
export const addTodo= async (req ,res)=>{

     try {
        
        const {name}=req.body
        if(!name)
        {
            return res.send("name are required")
        }
        const todo=new TodoSchema(
            {
                name:name
            }
        )
        await todo.save()
        return res.json({message:"todo added successfully",success:true})
     } catch (error) {
        return res.status(500).json({error})
     }
}

export const displayTodo= async (req ,res)=>{
    
    try {

        const todos=await TodoSchema.find()
        console.log(todos,"todos-list")
        if(!todos)
        {
            return res.status(404).json({success:false})
        }
        return res.json({success:true,todos:todos})
        
    } catch (error) {

        return res.status(500).json({error})
        
    }
}