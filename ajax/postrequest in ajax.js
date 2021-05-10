console.log('Ajax Tutorial');
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler(){
    console.log('You have clicked the button fatchBtn')
    //instantiate an XHR (XMLHttpRequest) object
    const xhr =new XMLHttpRequest();

    //open the object
    // xhr.open("GET",'https://jsonplaceholder.typicode.com/todos/1', true)


    //use this for post request
    xhr.open("POST",'http://dummy.restapiexample.com/api/v1/create', true)
    //true:asynchronous request, false:synchronous

    // xhr.getResponseHeader('content-type','application/x-www-form-urlencoded')

    //this is response header that tells we are sending our data using urls
    xhr.getResponseHeader('content-type','application/json')

    //what to do on progress(optional)
    xhr.onprogress=function(){
        console.log('on progress');
    }


    //after loading run the function which gives response.
    xhr.onload=function(){
        if(this.status===200){
        console.log(this.responseText)
    }
    else{
        console.log('some error occured')
    }
    }

    //send the request
    params=`{"name":"test1","salary":"1237","age":"223"}`
    xhr.send(params);
    console.log('we are done')
}