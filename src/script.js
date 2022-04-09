const root="https://jsonplaceholder.typicode.com/todos/1";


document.querySelector("button").addEventListener("click", clickEventHandler)

// const options={
//     method:"GET",
//     // mode:"cors",
//     // headers:h,
// }

// const request=new Request(root,options);
function clickEventHandler(){
    fetch(root)
    .then((result)=>{
        if(!result.ok){
            throw new Error("Something Went Wrong!")
        } else{
            return result.json();
        }
        
    }).then((result)=>{
        console.log(result);
    }).catch((e)=>console.log("Error: ", e.message))
}



