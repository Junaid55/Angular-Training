
//Palindrome String
let res=str=>{
    if(str===str.split("").reverse().join(""))
    {
        return true;
    }
    else
    {
        return false;
    }
}
if(res("Junaid"))
{
    console.log("String is Plaindrome");
}
else{
    console.log("String is Not Plaindrome");
}