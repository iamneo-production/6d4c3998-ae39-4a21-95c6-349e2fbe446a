const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-fefcebedcbfebddfdaeafbeafbbdcdbaec.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
      await page.click('#signupLink');
      await page.waitForNavigation();
      await page.type('#email', 'test@gmail.com');
      await page.type('#username', 'testuser');
      await page.type('#mobileNumber', '9876543210');
      await page.type('#password', 'Test@123');
      await page.type('#confirmPassword', 'Test@123');
      await page.click('#submitButton');
      await page.waitForNavigation();
      await page.waitForSelector('#loginButton',{timeout:3000});
      console.log('TESTCASE:FE_signup:success');
    }
     catch(e){
      console.log('TESTCASE:FE_signup:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

 

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-fefcebedcbfebddfdaeafbeafbbdcdbaec.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
      await page.type('#email', 'test@gmail.com');
      await page.type('#password', 'Test@123');
      await page.click('#loginButton');
      await page.waitForNavigation();
      await page.waitForSelector('#homeButton',{timeout:3000});
      console.log('TESTCASE:FE_login:success');
    }
     catch(e){
      console.log('TESTCASE:FE_login:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

 

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-fefcebedcbfebddfdaeafbeafbbdcdbaec.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.type('#email', 'test@gmail.com');
    await page.type('#password', 'Test@123');
    await page.click('#loginButton');
      await page.waitForNavigation();
      await page.waitForSelector('#applyLoan',{timeout:3000});
      await page.click('#applyLoan');
      await page.waitForSelector('#enterName',{timeout:3000});
      await page.click('#loanStatus');
      await page.waitForSelector('#enterLoanId',{timeout:3000});
      await page.click('#trackButton');
      await page.waitForSelector('#statusGrid1',{timeout:3000});
      console.log('TESTCASE:FE_userLoanOperation:success');
    }
     catch(e){
      console.log('TESTCASE:FE_userLoanOperation:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
  await page.goto('https://8081-fefcebedcbfebddfdaeafbeafbbdcdbaec.project.examly.io/');
  await page.setViewport({
    width:1200,
    height:800,
  })
  await page.type('#email', 'test@gmail.com');
  await page.type('#password', 'Test@123');
  await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#profile',{timeout:3000});
    await page.click('#profile');
    await page.waitForSelector('#name',{timeout:3000});
    await page.click('#logout');
    await page.waitForSelector('#loginButton',{timeout:3000});
    console.log('TESTCASE:FE_userProfileOperation:success');
  }
   catch(e){
    console.log('TESTCASE:FE_userProfileOperation:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
  await page.goto('https://8081-fefcebedcbfebddfdaeafbeafbbdcdbaec.project.examly.io/');
  await page.setViewport({
    width:1200,
    height:800,
  })
    await page.type('#email', 'admin@gmail.com');
    await page.type('#password', 'Admin@123');
    await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#adminAppliedLoans',{timeout:3000});
    await page.click('#adminAppliedLoans');
    await page.waitForSelector('#adminLoanGrid1',{timeout:3000});
    console.log('TESTCASE:FE_adminAppliedLoanOperation:success');
  }
   catch(e){
    console.log('TESTCASE:FE_adminAppliedLoanOperation:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
  await page.goto('https://8081-fefcebedcbfebddfdaeafbeafbbdcdbaec.project.examly.io/');
  await page.setViewport({
    width:1200,
    height:800,
  })
    await page.type('#email', 'admin@gmail.com');
    await page.type('#password', 'Admin@123');
    await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#adminAppliedLoans',{timeout:3000});
    await page.click('#AdminLoanDetails');
    await page.waitForSelector('#adminDetailsGrid1',{timeout:3000});
    await page.click('#logout');
    await page.waitForSelector('#loginButton',{timeout:3000});
    console.log('TESTCASE:FE_adminLoanDetailsOperation:success');
  }
   catch(e){
    console.log('TESTCASE:FE_adminLoanDetailsOperation:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();