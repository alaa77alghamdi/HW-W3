interface Car {
    make: string;
    model: string;
    year: number;
    honk():string
  }


  let car1: Car ={
    make: ' Toyota  ',
    model: 'Corolla',
    year: 2003,
    honk(){
       return "Toyota Corolla 2003";
        
    }


  };
  let car2: Car ={
    make: 'KIA',
    model: 'Picanto',
    year: 2019,
    honk(){
       return "KIA Picanto 2019";
        
    }

  };
  let car3: Car ={
    make: 'Hyundai',
    model: 'Elantra',
    year: 2010,
    honk(){
       return "Hyundai Elantra 2010";
        
    }

  };

  let arry:Car [] =[car1,car2,car3]
  console.log(arry);
  

  for (let i = 0; i < arry.length; i++) {
    let arry2="";
   
    console.log(arry[i].year);
    
 }

 for (let i = 0; i < arry.length; i++) {
    let arry2="";
   
    console.log(arry[i].model);
    
 }

function honk(){
    console.log(("hi yey"));
}

 
export{}