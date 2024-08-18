var link = "https://rpgx-d4ee3-default-rtdb.firebaseio.com/"

function Click(){
    $.ajax({
        url:`${link}Insirir/.json`,
        type:"POST",
        contentType: "application/json",
        data: JSON.stringify({value: document.getElementById("Testar").value})
    })
}