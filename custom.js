setInterval(myTimer, 1000);

function myTimer()
{
    var d = new Date();
    
    switch(d.getDay())
    {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
                day = "Tuesday";
                break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    } 

    document.getElementById("day").textContent = day;
    document.getElementById("hours").textContent = d.getHours();
    document.getElementById("minutes").textContent = d.getMinutes();
    document.getElementById("seconds").textContent = d.getSeconds();
    let bhours = parseInt(d.getHours());
    let bminutes = parseInt(d.getMinutes());
    let bseconds = parseInt(d.getSeconds());
    document.getElementById("bhours").textContent = bhours.toString(2);
    document.getElementById("bminutes").textContent = bminutes.toString(2);
    document.getElementById("bseconds").textContent = bseconds.toString(2);
    
}

