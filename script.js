const wrapper=document.querySelector(".wrapper");
const inputPart=document.querySelector(".input-part");
const infoText=document.querySelector(".info-text");
const inputField=document.querySelector(".input-box input");
const locationBtn=document.querySelector("#location-btn");

// add event listener to te location btn.
locationBtn.addEventListener("click", ()=>{
    if(!navigator.geolocation){
        alert("Update your browser you dumb fool!")
    }else{
        navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
    }
})

function onSuccess(position){
    console.log(position);
}
function onFailure(error){
    infoText.innerText="Location Access Denied!";
    infoText.classList.add("error");
}




// add keyup event listener to the inputField element.
inputField.addEventListener("keyup", (e)=>{
    if(e.key==='Enter' && inputField.value!==""){
        // call the api.
        requestApi(inputField.value);
    }
});

// declare requestAPI function.
function requestApi(city){
    // show the alerttext
    infoText.innerText="Getting City Data...";
    infoText.classList.add("pending");
    setTimeout(() => {
       infoText.remove()
    }, 2000);
  
    const root="https://api.openweathermap.org/data/2.5/weather?";
    const options={
        method:"GET",
        mode:"cors",
        params:{
            "q":inputField.value,
            "appid":"1c0e8e1fdc74b7cd8e3d09e96e33f94f"
        }

    };
    const uriMaker=(root, options)=>{
        const query=Object.keys(options.params)
                    .map(k=>encodeURIComponent(k)+"="+encodeURIComponent(options.params[k]))
                    .join("&");
        const uri=root+query;

        return uri;
    }
    

    const request=new Request(uriMaker(root, options), options)
    // fetch the weather app data.
    fetch(request).then((result)=>{
        if(!result.ok){
            throw new Error("ERROR: It's not you, it's us!");
        }else{
            return  result.json();
        }
       

    }).then((result)=>{
        // weatherDetails(result);
        console.log(result);
    }).catch((e)=>console.log(e.message))
}

// define a function weatherDetails.
function weatherDetails(info){

}