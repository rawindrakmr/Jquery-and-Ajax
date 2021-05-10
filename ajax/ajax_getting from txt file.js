console.log('Ajax Tutorial');
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler(){
    console.log('You have clicked the button fatchBtn')
    //instantiate an XHR (XMLHttpRequest) object
    const xhr =new XMLHttpRequest();

    //open the object
    xhr.open("GET",'ajax.txt', true)
    //true:asynchronous request, false:synchronous


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
    xhr.send();
}