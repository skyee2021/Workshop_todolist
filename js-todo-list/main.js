// TO DO
document.addEventListener('DOMContentLoaded', function(){
  
  //1選取
  document.querySelectorAll('li').forEach(function(item){
    item.addEventListener('click', function(e){
      e.target.classList.toggle('checked');
      //this.classList.toggle('checked');
    });
  })
  //2刪除
  document.querySelectorAll('.close').forEach(function(item){
    item.addEventListener('click', function(e){
      e.target.parentElement.remove()
      //選span-close的上一層
    });
  })

  //3增加
  document.getElementById('addBtn').addEventListener('click',function(){
    let newin = document.querySelector('input').value;

    document.querySelector('ul').appendChild(addli(newin));
    
    //清空輸入欄
    
    document.querySelector('input').value ='';

  })

  function addli(newinput){
    let newli = document.createElement('li');
    let newspan = document.createElement('span');
    newli.textContent = newinput;

    //4
    // localStorage.setItem('mydata', newinput)
    // newli.textContent = localStorage.getItem('mydata');


    newspan.classList.add('close');
    newspan.textContent = 'x';
    newli.appendChild(newspan);

    //出生的時候就有事件
    newli.addEventListener('click', function(e){
      e.target.classList.toggle('checked');
    })
    newspan.addEventListener('click', function(e){
      e.target.parentElement.remove();
    })
    
    return newli;
  }

    //4用 localStorage
    // var data = 'Tom';
    // localStorage.setItem('mydata',data);


  




})


//querySelector都是ＣＳＳ寫法，照著寫就對了

