const uri="https://api.openweathermap.org/data/2.5/weather?q=London&appid=1c0e8e1fdc74b7cd8e3d09e96e33f94f";


document.querySelector("button").addEventListener("click", clickEventHandler)


function clickEventHandler(){

    const options={
        method:"GET",
        mode:"cors",

        
    }
    
    const request=new Request(uri, options);
    fetch(request)
        .then((result)=>{
            if(!result.ok){
                throw new Error("Bad Request");
            }
            return result.json();
        }).then((data)=>console.log(data.main))
        .catch((e)=>console.log("Error: ", e.message));

}





