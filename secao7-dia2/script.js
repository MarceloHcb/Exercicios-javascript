window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', renderAmountOfDaysInMonth);
  };
  
  const getNumberOfDaysInMonth = (month) => {
  
    switch (parseInt(month)) {
      case 1:
        return 31;
      case 2:
        return 28;
      case 3:
        return 31;
      case 4:
        return 30;
      case 5:
        return 31;
      case 6:
        return 30;
      case 7:
        return 31;
      case 8:
        return 31;
      case 9:
        return 30;
      case 10:
        return 31;
      case 11:
        return 30;
      case 12:
        return 31;
        default:
            throw new Error(`Mês inválido`);
    }
    
  };
 
  const renderAmountOfDaysInMonth = () => {
  try{
      const meses = {
          1: "janeiro",
          2: "fevereiro",
          3: "março",
          4: "Abril",
          5: "Maio",
          6: "Junho"
      }
      const month = document.getElementById('month').value;
      const result = document.getElementById('result');
      result.innerHTML = `O mês ${month} possui ${getNumberOfDaysInMonth(month)} dias.`;
      let keys = parseInt(Object.keys(meses))
      let months = parseInt(month)
      console.log(Object.keys(meses));
      console.log(months);
      for (let index = 0; index < Object.keys(meses).length; index++) {
       console.log(keys);
        
      }
    
      
      document.getElementById('month').value = '';
      console.log(Object.keys(meses));


  }catch(error){
    alert(`Erro ${error.message}`)
  }finally{
    document.getElementById("month").value = "";
    
  }
  };

