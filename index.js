let express = require("express")
let mongoose = require("mongoose")
let EmployeeModel = require ("./models/Employee")

let app = express()

mongoose.connect('mongodb+srv://sa:rrfYrY3mSzHSgzJR@cluster0.qa3t4.mongodb.net/101122929_assignment2.employee?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.get('/',(req,res) =>{
    res.send("Employee MongoDB Database")
})

//All Employee resources are fetched
app.get('/api/v1/employees', async(req,res) => {
    const employees = await EmployeeModel.find({})

    try{
        res.status(200).send(employees)
        console.log("All Employee resources are fetched.")
    }
    catch(err){
        res.status(500).send(err)
    }
})

//A new Employee resource is created
app.post('/api/v1/employees', async(req,res) => {
    const employees = new EmployeeModel(req.body)

    try{
        await employee.save()
        res.status(201).send(employees)
        console.log("A new Employee resource is created.")
    }
    catch(err){
        res.status(500).send(err)
    }
})

//One Employee resource is fetched
app.get('/api/v1/employees/:id', async(req,res) =>{
    const employees = await EmployeeModel.findById(req.params.id)

    try{
        res.status(200).send(employees)
        console.log("One Employee resource is fetched.")
    }
    catch(err){
        res.status(500).send(err)
    }
})

//Employee resource is updated
app.put('/api/v1/employees/:id', async(req,res) =>{
    try{
        await EmployeeModel.findByIdAndUpdate(req.params.id, req.body)
        await EmployeeModel.save()
        res.status(204).send(employees)
        console.log("Employee resource is updated.")
    }
    catch(err){
        res.status(500).send(err)
    }
})

//Employee resource is deleted
app.delete('/api/v1/employees/:id', async(req,res) =>{
    try{
        const employees = await EmployeeModel.findByIdAndDelete(req.params.id)
        res.status(204).send(employees)
        console.log("Employee resource is deleted.")
    }
    catch(err){
        res.status(500).send(err)
    }
})

app.listen(9090, () => {
    console.log("Server running at http://localhost:9090/")
})