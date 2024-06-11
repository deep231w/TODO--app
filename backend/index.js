const express=require('express');
const {createTodo,updateTodo} = require('./types.js');
const todo=require('./db.js');
const app = express();
app.use(express.json());
app.post('/todo',async(req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
         res.status(400).json({
            msg:"error inputs"
         });
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"todo created successfully"
    })
})
app.get('/todos', async(req, res) => {
    const todos= await todo.find({});
    res.json(todos);

});
app.put('/completed', async (req, res) => {
    const updatePayload=req.body;
    const parsePayload=updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(400).json({
            msg:"error inputs"
        });
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"todo marked completed successfully"
    })
});
app.listen(3000,()=>{
    console.log('server is running on port 3000');
});