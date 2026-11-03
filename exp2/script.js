function generate(){
    let n = Number(document.getElementById("num").value);
    let limit =Number(document.getElementById("limit").value);

    let i,j,k;
    let a="",b="",c="";
    for(i=1;i<=limit;i++){
        a+= n + "*" + i + "=" + n*i + "<br>";
    }
    j=1;
    while(j<=limit){
        b+= n + "*" + j + "=" + n*j + "<br>";
        j++;
    }
    k=1;
    do{
        c+= n + "*" + k + "=" + n*k + "<br>";
        k++;
    }while(k<=limit);

    document.getElementById("for").innerHTML = a;
document.getElementById("do-while").innerHTML = c;
document.getElementById("while").innerHTML = b;

}

function reset(){
    document.getElementById("num").value = "";

    document.getElementById("for").innerText="";
}