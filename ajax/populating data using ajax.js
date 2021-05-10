console.log('Ajax Tutorial')
let popBtn=document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);


function popHandler(){
    console.log('you have clicked the popHandeler');
    
    const xhr= new XMLHttpRequest();
    
    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees', true);

    xhr.onload=function(){
        if(this.status===200){
            let obj=JSON.parse(this.responseText);
            console.log(obj)
            let list=document.getElementById('list');
            str=''
            for (var name in obj.data){
                str+=`<li>${obj.data[name].employee_name}</li>`;

            }
            list.innerHTML=str;
        }
        else{
            console.log('some error occured')
        }
    }
    xhr.send();
    console.log('we are done fatching employees details ')
}