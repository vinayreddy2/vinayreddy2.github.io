let MSDhonioldinfo={
    imgurl: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319900/319946.png",
    name : "MS Dhoni",
    Description: " Former Indian Cricketer"
}
let MSDhoninewinfo={
    imgurl: "https://resize.indiatvnews.com/en/resize/newbucket/400_-/2023/04/PTI04_03_2023_000319B.jpg",
    name : "Mahendra Singh Dhoni",
    Description: "Csk Captain"
}

let isMsDhoniold=true;
let displayobject;
let flipdata=function()
{
    if(isMsDhoniold==true)
    {
        displayobjext=MSDhoninewinfo;
        isMsDhoni=false;
    }
    else
    {
        displayobjext=MSDhonioldinfo;
        isMsDhoni=true;
    }
    document.getElementById("cricketer").src=displayobject.imgurl;
    document.getElementById("cricketer_name").innerHTML=displayobject.name;
}