// solving problems using array functions on the rest countries data(https://restcountries.com/v3.1/all)
//1)Get all the countries from Asia continent /region using Filter function
  var request=new XMLHttpRequest;
  request.open('GET','https://restcountries.com/v3.1/all');
  request.send();
  request.onload=function(){
    var countryData=JSON.parse(this.responseText);
    const Asia=countryData.filter((Asia)=>{ 
      if(Asia.region==='Asia'){
        return Asia.name;
      }
    })
    console.log(Asia);
  }

 //2)Get all the countries with a population of less than 2 lakhs using Filter function
 var request=new XMLHttpRequest;
 request.open('GET','https://restcountries.com/v3.1/all');
 request.send();
 request.onload=function(){
  var countryData=JSON.parse(this.responseText);
  const population=countryData.filter((element)=>{
    return element.population<200000;
  })
  console.log(population);
 }

 //3)Print the following details name, capital, flag using forEach function
 var request=new XMLHttpRequest;
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function(){
  var countrydata=JSON.parse(this.responseText);
  countrydata.forEach((element)=>{
console.log(element.name,element.capital,element.flag);

    
  })
}

 //4)Print the total population of countries using reduce function
var request=new XMLHttpRequest;
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function(){
  var countryData=JSON.parse(this.responseText);
  const population=countryData.reduce((acc,element)=>{
    return acc+element.population;
  })
  console.log(population);
}

 //5)Print the country which use US Dollars as currency
   var request=new XMLHttpRequest;
   request.open('GET','https://restcountries.com/v3.1/all');
   request.send();
   request.onload=function(){
    var data=JSON.parse(this.responseText);
    for(i=0;i<data.length;i++){
      if(data[i].currencies[0].code==='USD'){
        console.log("name:",data[i].name,"===>",data[i].currencies[0].code)
      }
    }
  }