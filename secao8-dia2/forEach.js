const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];  
  const showEmailList = (email,index) => {
    console.log(`mensagem:${index} O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
  emailListInData.forEach((email,index) => showEmailList(email,index))