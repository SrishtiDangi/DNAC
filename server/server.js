import express from "express";
import cors from "cors";

import coreconcepts from "./data/coreconcepts.json" with { type:"json" };
import deployment from "./data/deployment.json" with { type:"json" };
import architecture from "./data/architecture.json" with { type:"json" };
import devices from "./data/devices.json" with { type:"json" };
import navbar from "./data/navbar.json" with { type:"json" };
import operations from "./data/operations.json" with { type:"json" };
import roadmap from "./data/roadmap.json" with { type:"json" };
import sda_ise from "./data/sda_ise.json" with { type:"json" };
import whyitmatters from "./data/whyitmatters.json" with { type:"json" };
import footer from "./data/footer.json" with { type:"json" };
import overview from "./data/overview.json" with { type:"json" };


const app = express();


app.use(cors());
app.use(express.json());



app.get("/api/navbar",(req,res)=>{
    res.json(navbar);
});


app.get("/api/overview",(req,res)=>{
    res.json(overview);
});


app.get("/api/whyitmatters",(req,res)=>{
    res.json(whyitmatters);
});


app.get("/api/architecture",(req,res)=>{
    res.json(architecture);
});


app.get("/api/coreconcepts",(req,res)=>{
    res.json(coreconcepts);
});


app.get("/api/deployment",(req,res)=>{
    res.json(deployment);
});


app.get("/api/sda_ise",(req,res)=>{
    res.json(sda_ise);
});


app.get("/api/operations",(req,res)=>{
    res.json(operations);
});


app.get("/api/devices",(req,res)=>{
    res.json(devices);
});


app.get("/api/roadmap",(req,res)=>{
    res.json(roadmap);
});


app.get("/api/footer",(req,res)=>{
    res.json(footer);
});



app.listen(5000,()=>{

console.log("Server running on port 5000");

});