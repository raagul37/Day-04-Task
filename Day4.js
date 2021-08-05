var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);
    for(var i=0;i<250;i++)
    {
        var cname=data[i].name;
        var rname=data[i].region;
        var sname=data[i].subregion;
        var pname=data[i].population;
        var fname=data[i].flag;
        console.log(cname);
        console.log(rname);
        console.log(sname);
        console.log(pname);
    }

}
