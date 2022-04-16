// const root="https://api.openweathermap.org/data/2.5/weather?";


// // document.querySelector("button").addEventListener("click", clickEventHandler)


// function clickEventHandler(){

//     const options={
//         method:"GET",
//         mode:"cors",
//         params:{
//             "q":"London",
//             "appid":"1c0e8e1fdc74b7cd8e3d09e96e33f94f"
//         }
        
//     }
//     const query=Object.keys(options.params)
//                 .map(k=>encodeURIComponent(k)+"="+encodeURIComponent(options.params[k]))
//                 .join("&");

//     const uri=root+query;

//     const request=new Request(uri, options);
//     fetch(request)
//         .then((result)=>{
//             if(!result.ok){
//                 throw new Error("Bad Request");
//             }
//             return result.json();
//         }).then((data)=>console.log(data.main))
//         .catch((e)=>console.log("Error: ", e.message));

// }





const wrapper=document.querySelector(".wrapper");
const inputPart=document.querySelector(".input-part");
const infoText=document.querySelector(".info-text");
const inputField=document.querySelector(".input-box input");