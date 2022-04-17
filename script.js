const wrapper=document.querySelector(".wrapper");
const inputPart=document.querySelector(".input-part");
const infoText=document.querySelector(".info-text");
const inputField=document.querySelector(".input-box input");

// add keyup event listener to the inputField element.
inputField.addEventListener("keyup", (e)=>{
    if(e.key==='Enter' && inputField.value!==""){
        // call the api.
        requestApi(inputField.value);
    }
});

// declare requestAPI function.
function requestApi(city){
    const root="https://api.openweathermap.org/data/2.5/weather?";
    const options={
        method:"GET",
        mode:"cors",
        params:{
            "q":inputField.value,
            "appid":"1c0e8e1fdc74b7cd8e3d09e96e33f94f"
        }

    };
    const query=Object.keys(options.params)
                    .map(k=>encodeURIComponent(k)+"="+encodeURIComponent(options.params[k]))
                    .join("&");
    const uri=root+query;

    const request=new Request(uri, options)
    // fetch the weather app data.
    fetch(request).then((result)=>{
        if(!result.ok){
            throw new Error("ERROR: It's not you, it's us!");
        }else{
            return  result.json();
        }
       

    }).then((result)=>{

    }).catch((e)=>console.log(e.message))
}
