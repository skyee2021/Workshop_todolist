

// TO DO
document.addEventListener('DOMContentLoaded', function(){
  



  //3增加 
  // document.getElementById('addBtn').addEventListener('click',function(){
  //   //4
  //   //從json模式換回原本的資料模式
  //   var str_array = JSON.parse(localStorage.getItem('mydata')) || [];
  //   str_array.push(document.querySelector('input').value);

  //   //換成json模式
  //   localStorage.setItem('mydata', JSON.stringify(str_array));
    
    
    
    // let newin = localStorage.setItem(str_array[length-1]);
    // document.querySelector('ul').appendChild(addli());
  
    // =================

    function updateLocalStorage() {
      //store the list back to localStorage
      localStorage.setItem('wishList', JSON.stringify(wishList))
    }
    
    //add event listener to form
    form.addEventListener('submit', event => {
      //prevent auto send the form
      event.preventDefault()
      //get input value
      const input = document.querySelector('input[type="text"]')
      //add new wish to the list
      displayWish(input.value)
      //add new wish to the list
      wishList.push(input.value)
      //add the wish to localStorage
      updateLocalStorage(input.value)
      //clear up the input
      input.value = ''
    })
    
    displayArea.addEventListener('click', event => {
      if (event.target.tagName !== 'SPAN') { return }
      const li = event.target.parentElement
      //remove the wish from DOM
      li.remove()
      //remove the wish from wishList array
      wishList.splice(wishList.indexOf(li.textContent.slice(0, -1)), 1)
      updateLocalStorage()
    })















     //==================











    //清空輸入欄

    // document.querySelector('input').value ='';

  })

  // function addli(newin){
  //   let newli = document.createElement('li');
  //   let newspan = document.createElement('span');
  //   // newli.textContent = newin;
    
  //   // newli.textContent = localStorage.setItem(str_array[length-1]);


  //   newspan.classList.add('close');
  //   newspan.textContent = 'x';
  //   newli.appendChild(newspan);

  //   //出生的時候就有事件
  //   newli.addEventListener('click', function(e){
  //     e.target.classList.toggle('checked');
  //   })
  //   newspan.addEventListener('click', function(e){
  //     e.target.parentElement.remove();
  //   })
    
  //   return newli;
  
  // }


  




})


//querySelector都是ＣＳＳ寫法，照著寫就對了

