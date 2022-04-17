const wrapper=document.querySelector(".wrapper");
const inputPart=document.querySelector(".input-part");
const infoText=document.querySelector(".info-text");
const inputField=document.querySelector(".input-box input");
const locationBtn=document.querySelector("#location-btn");
const wIcon=document.querySelector(".weather-part img")
arrowBack=wrapper.querySelector("header i")
let api;
// add event listener to te location btn.
locationBtn.addEventListener("click", ()=>{
    if(!navigator.geolocation){
        alert("Update your browser you dumb fool!")
    }else{
        navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
    }
})

function onSuccess(position){
    // console.log(position);
    const{latitude, longitude}=position.coords; //grab the coordinate from te get coordinate button.
   
    api=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1c0e8e1fdc74b7cd8e3d09e96e33f94f`;
    fetchData(api);
    
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
    api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1c0e8e1fdc74b7cd8e3d09e96e33f94f`;
    fetchData(api);
}

function fetchData(api){
      // show the alerttext
      infoText.innerText="Getting City Data...";
      infoText.classList.add("pending");

      const request=new Request(api)
    // fetch the weather app data.
    fetch(request).then((result)=>{
        if(!result.ok){
            throw new Error("Something Went Wrong");
        }else{
            return  result.json();
        }
       

    }).then((result)=>{
        weatherDetails(result);
        console.log(result);
    })
    .catch((e)=>{
        infoText.innerText=e.message;
        infoText.classList.replace("pending", "error");
    })
  
}

// define a function weatherDetails.
function weatherDetails(info){
    if(info.cod==="404"){
        
        infoText.innerText=`${inputField.value} isn't a valid city`;
        infoText.classList.replace("pending", "error");
        
    }else{
        // grab required info from the info box.
        const city=info.name;
        const country=info.sys.country;
        const {description,id}=info.weather[0];
        const {feels_like, humidity, temp}=info.main;
        
        if(id===800){
            wIcon.src="assets/day.svg";
        }else if(id>=200 && id<=232){
            wIcon.src="assets/thunder.svg";
        }else if(id>=600 && id<=622){
            wIcon.src="assets/snowy-1.svg";
        }else if(id>=701 && id<=781){
            wIcon.src='assets/cloudy.svg';
        }else if(id>=801 && id<=804){
            wIcon.src="assets/cloudy.svg";
        }else if((id>=500 && id<=531) || (id>=300 && id<=321)){
            wIcon.src="assets/rainy-2.svg"; 
        }


        // grab the elements from the wrapper and add one by one.
        wrapper.querySelector(".location span").innerText=`${city}, ${country}`;
        wrapper.querySelector (".temp .numb").innerText=Math.floor(Number(temp)-273);
        wrapper.querySelector(".temp .numb-2").innerText=Math.floor(Number(feels_like)-273);
        wrapper.querySelector("#humidity-number").innerText=`${humidity}%`;
        wrapper.querySelector(".weather").innerText=description;

        infoText.classList.remove("pending", "error");
        wrapper.classList.add("active");
        inputField.value="";
    }
};

arrowBack.addEventListener("click", ()=>{
    wrapper.classList.remove("active");
})