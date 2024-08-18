// //DOM manipulation

// //GetElementById()
// const title= document.getElementById('main-heading');
// title.style.color='white';
// console.log(title);

// ////getElementByClassName()
//  const listItems=document.getElementsByClassName('listi-items');
// //  listItems.style.fontSize='2rem';
//  for(i=0;i < listItems.length; i++){
//     listItems[i].style.fontSize='5rem';
//  }
//  console.log(listItems);

//creating Elements
// const ul=document.querySelector('ul');
// const li=document.createElement('li');
// //adding elements
// ul.append(li);
//modifying the text
// const firstListItem=document.querySelector('list-items');
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

// li.innerText='X-men';

// //modifying Attributes and classes

// // li.setAttribute('id', 'main-heading');
// // FileList.removeAttribute('id');

// // const title=document.querySelector('main-heading');

// // console.log(title.getAttribute('id'));
// li.classList.add('listi-items');
// //li.classList.remove('listi-items');

// console.log(li.classList.contains('listi-items'));

// //remove elements
// li.remove();

// //getElementByTagName()
// const listItems = document.getElementByTagName('li');
// console.log(listItems);

// // //querySelector()
 // const container=document.querySelector('div');
 // console.log(container);

// ////querySelectorAll()
// const container=document.querySelector('div');
// console.log(container);

//Travese the DOM
//Parent Node Traversal
// let ull = document.querySelector('ul');
// // console.log(ull.parentNode.parentNode);
// // console.log(ull.parentElement.parentElement);

// const html=document.documentElement;
// console.log(html.parentElement);

// //child Node Traversal

 // let ull=document.querySelector('ul');
 // console.log(ul.childNodes);

// //Siblings Node Traversal
// let ull=document.querySelector('ul');
// const div=document.querySelector('div');
// console.log(div.childNodes);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

//Event listners


