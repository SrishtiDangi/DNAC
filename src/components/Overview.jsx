import {useState,useEffect} from "react";
import Reveal from "./Reveal";
import {FaBuilding,FaRobot,FaShieldAlt,FaProjectDiagram} from "react-icons/fa";

function Overview(){

const [data,setData]=useState(null);
const [selected,setSelected]=useState(null);


useEffect(()=>{

fetch("http://localhost:5000/api/overview")

.then(res=>res.json())

.then(data=>setData(data))

.catch(err=>console.log(err));

},[]);


if(!data)
return <h2>Loading Overview...</h2>; 

const icons=[
<FaBuilding size={30}/>,
<FaRobot size={30}/>,
<FaShieldAlt size={30}/>
];

return(
<section style={{padding:"70px 0"}}>

<Reveal>
<div style={{textAlign:"center",marginBottom:"50px"}}>
<h1 style={{fontSize:"35px",fontWeight:"900",color:"#2C3E50"}}>
{data.hero.title}
</h1>

<p style={{color:"#666"}}>
{data.hero.description}
</p>
</div>
</Reveal>


<div style={{
display:"flex",
justifyContent:"center",
gap:"20px",
alignItems:"center",
marginBottom:"50px"
}}>

{
["Device","DNA Center","ISE","Network"].map((item,index)=>(

<div key={index}
style={{
background:"#eef8ff",
padding:"15px 25px",
borderRadius:"25px",
boxShadow:"0 10px 25px #ddd",
transition:"0.3s"
}}>

{item}

</div>

))
}

</div>



<div style={{
display:"flex",
justifyContent:"center",
gap:"25px",
flexWrap:"wrap"
}}>


{
data.cards.map((card,index)=>(

<div key={index}
onClick={()=>setSelected(card)}
style={{
width:"240px",
background:card.color,
borderRadius:"25px",
padding:"25px",
textAlign:"center",
cursor:"pointer",
boxShadow:"0 12px 30px rgba(0,0,0,.1)",
transition:"0.3s"
}}

onMouseEnter={(e)=>
e.currentTarget.style.transform="translateY(-10px)"
}

onMouseLeave={(e)=>
e.currentTarget.style.transform="translateY(0)"
}

>

{icons[index]}

<h3>{card.title}</h3>

<p>{card.desc}</p>

</div>

))
}

</div>



<h2 style={{
textAlign:"center",
margin:"60px 0 30px"
}}>
How DNA Center Works
</h2>



<div style={{
display:"flex",
justifyContent:"center",
gap:"20px",
flexWrap:"wrap"
}}>

{
data.workflow.map((w,index)=>(

<div key={index}
style={{
background:"#f5f5ff",
padding:"20px",
borderRadius:"20px",
width:"200px"
}}
>

<FaProjectDiagram/>

<h3>{w.title}</h3>

<p>{w.desc}</p>

</div>

))
}

</div>




{
selected &&

<div
onClick={()=>setSelected(null)}
style={{
position:"fixed",
inset:0,
background:"rgba(0,0,0,.5)",
display:"flex",
alignItems:"center",
justifyContent:"center",
zIndex:9999
}}
>


<div
onClick={(e)=>e.stopPropagation()}
style={{
background:"#fff",
padding:"35px",
borderRadius:"30px",
width:"600px"
}}
>

<h2>{selected.title}</h2>

<p>{selected.desc}</p>

<ul>

{
selected.details.map((d,i)=>(

<li key={i}>{d}</li>

))
}

</ul>

<button onClick={()=>setSelected(null)}>
Close
</button>

</div>

</div>

}

</section>
)

}

export default Overview;