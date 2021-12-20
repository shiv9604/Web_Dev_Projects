
// All javascript for todo list
function getAndUpdate(){
    title = document.getElementById('titleinput').value;

    discription = document.getElementById('discriptioninput').value;

    //We are creating array itemsJsonArray and pushing items to it in local storage in stringify form.
    
        if(localStorage.getItem('itemsJson')==null){
            console.log("Creating Your first element in Array");
            
            itemJsonArray = [];
            
            //Pushing values and titles value in the itemsjsonArray.
            itemJsonArray.push([title,discription]); 
            
            // Setting item in the localstorage and stringifying the item before setting item
            localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
            
        }
        else{
            console.log("Creating new element in Array");
            itemJsonArrayStr = localStorage.getItem('itemsJson');
            itemJsonArray = JSON.parse(itemJsonArrayStr);
            itemJsonArray.push([title,discription]);
            localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
        }
        update();
}
function update(){
        if(localStorage.getItem('itemsJson')==null)
        {
                console.log("Creating Your first element in Array");
                itemJsonArray = [];
                // Setting item in the localstorage and stringifying the item before setting item
                localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
        }
        else{
            itemJsonArrayStr = localStorage.getItem('itemsJson');
            itemJsonArray = JSON.parse(itemJsonArrayStr);
        }
        
        // Poping up the elements in the table
        tablecontent = document.getElementById('tablecontent') 
        let str = "";
        itemJsonArray.forEach((element,index) => {
            str += `<tr>
            <th scope="row">${index +1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td class = "dltbtn" id="dltbtn">
            <button type="button" class="btn btn-info btn-sm" onclick = deleted(${index})>Delete</button>
            </tr>`;
            
        });
        tablecontent.innerHTML = str; 
    

}

additem.addEventListener('click',getAndUpdate);
update();
function deleted(itemIndex){
    console.log("Delete",itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Delete the itemIndex element from the array
    itemJsonArray.splice(itemIndex,1);
    localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    update();
}

function clearall(){
    if(confirm("Your Previous data will be permanently Deleted,Do You Really Want to clear your TODO List?"))
    {
    console.log("Clearing the list...")
    localStorage.clear();
    itemJsonArray = [];
    location.reload();
    }
}
clearbtn.addEventListener('click',clearall);


