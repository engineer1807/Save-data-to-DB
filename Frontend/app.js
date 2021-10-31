 function submit(){
    
    const firstName= document.getElementById('first_name').value;
    const lastName= document.getElementById('last_name').value;
    const email= document.getElementById('email').value;  
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({ "firstName": firstName, "lastName": lastName, "email": email }),
      redirect: 'follow'
    };
  
    fetch("http://localhost:5000/send", requestOptions)
      .then(json => {
         alert('Record Submission Successful');
         console.log(json);
      })
      .catch(err => {
         alert('Record Entry Failed');
         console.log(err);
      })
 }

 document.getElementsByTagName("button")[0].addEventListener("click", (e) => {
   console.log('HERE');
   e.preventDefault(); 
   submit();
 });