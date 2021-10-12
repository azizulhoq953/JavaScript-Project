// console.dir(document)
// console.dir(document.domain)
// console.dir(document.port)
// console.dir(document.URL)
// console.dir(document.port)
// console.dir(document.div)

// let items = document.get('logo')
// console.log(items);

// let header=document.querySelector('.logo');
// header.textContent='Azizur Rahman';
// console.log(header);

// let child=document.querySelector('head')
// console.log(child)

// let body=document.querySelector('body')
// console.log(body)

// let items=document.querySelector('.main:First-child');
// items.style.color='red';
// console.log(items)

// const parent = document.querySelector('.main')

// const child =parent.children;
// console.log(child[0]);

//event listener

const Header=document.querySelector('#logo');

Header.addEventListener('mouseleave', (event)=>{
    console.log(event)
});
