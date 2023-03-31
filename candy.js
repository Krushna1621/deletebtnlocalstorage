function Savetolocalstorage(event){
    event.preventDefault();
    var name=event.target.username.value;
    var email=event.target.emailid.value;
    var phoneno=event.target.phoneno.value;
    const obj={
        name,
        email,
        phoneno
    }
    localStorage.setItem('userdetails',JSON.stringify(obj));
    ShowUserOnScreen(obj)
}
function ShowUserOnScreen(obj){
        const parentElem=document.getElementById('listof')
        const childrenElem=document.createElement('li')
        childrenElem.textContent=obj.name+'-'+obj.email+'-'+obj.phoneno;
        
        const deletebtn=document.createElement('input')
        deletebtn.type="button"
        deletebtn.value='Delete'
        deletebtn.onclick=()=>{
             localStorage.removeItem(obj.email)
             parentElem.removeChild(childrenElem)
        }
        childrenElem.appendChild(deletebtn)
        parentElem.appendChild(childrenElem)
       
}