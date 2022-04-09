const root="https://jsonplaceholder.typicode.com/todos/1";


document.querySelector("button").addEventListener("click", clickEventHandler)

// const options={
//     method:"GET",
//     // mode:"cors",
//     // headers:h,
// }

// const request=new Request(root,options);
function clickEventHandler(){
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
        const data = xhr.responseText;
    
        // log response
        console.log(data);
    };
    
    // create and send the reqeust
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.send();
}



