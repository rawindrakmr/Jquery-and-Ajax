console.log('Ajax Tutorial')
let popBtn=document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);


function popHandler(){
    console.log('you have clicked the popHandeler');
    
    const xhr= new XMLHttpRequest();
    
    
    xhr.open('GET','https://cricapi.com/api/playerStats?apikey=fsVXBLcdnkYEZUHP3iBZCwSQNxL2&pid=684611', true);

    xhr.onload=function(){
        if(this.status===200){
            let obj=JSON.parse(this.responseText);
            console.log(obj)
            let list=document.getElementById('list');
            str=''
                str+=`<li>Player Id :${obj.pid}</li>`;
                str+=`<li>Player country :${obj.country}</li>`;
                str+=`<li>Player battingStyle :${obj.battingStyle}</li>`;
                str+=`<li>Player bowlingStyle :${obj.bowlingStyle}</li>`;
                str+=`<li>Player majorTeams :${obj.majorTeams}</li>`;
                str+=`<li>Player currentAge :${obj.currentAge}</li>`;
                str+=`<li>Player born :${obj.born}</li>`;
                str+=`<li>Player fullName :${obj.fullName}</li>`;
            list.innerHTML=str;
        }
        else{
            console.log('some error occured')
        }
    }
    xhr.send();
    console.log('we are done fatching employees details ')
}