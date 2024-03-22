const CLOTHES = Object.freeze([
  {
    id: 1,
    category: 'BLACK',
    name: 'BLACK 1',
    description: 'LOOKBOOK DESCRIPTION',
    price: '103,000',
    image:
      'https://i.pinimg.com/564x/8f/4e/f9/8f4ef99b183304018f09653651a83cdc.jpg',
  },
  {
    id: 2,
    category: 'BLACK',
    name: 'BLACK 2',
    description: 'LOOKBOOK DESCRIPTION',
    price: '159,000',
    image:
      'https://i.pinimg.com/564x/2c/8c/1b/2c8c1bc953d82b1589727489a7a33636.jpg',
  },
  {
    id: 3,
    category: 'BLACK',
    name: 'BLACK 3',
    description: 'LOOKBOOK DESCRIPTION',
    price: '182,000',
    image:
      'https://i.pinimg.com/564x/8c/4c/08/8c4c0812271e5d65e2abf6ec4ba19db5.jpg',
  },
  {
    id: 4,
    category: 'GRAY',
    name: 'GRAY 1',
    description: 'LOOKBOOK DESCRIPTION',
    price: '122,000',
    image:
      'https://i.pinimg.com/564x/23/f6/8b/23f68b4133ed85a6fc79cba99f562982.jpg',
  },
  {
    id: 5,
    category: 'GRAY',
    name: 'GRAY 2',
    description: 'LOOKBOOK DESCRIPTION',
    price: '78,000',
    image:
      'https://i.pinimg.com/564x/93/b4/a6/93b4a6eb295403ced0050a5d00b53b2b.jpg',
  },
  {
    id: 6,
    category: 'GRAY',
    name: 'GRAY 3',
    description: 'LOOKBOOK DESCRIPTION',
    price: '93,000',
    image:
      'https://i.pinimg.com/564x/e9/95/8c/e9958c23bac26685ca5a80b34bc3243f.jpg',
  },
  {
    id: 7,
    category: 'BROWN',
    name: 'BROWN 1',
    description: 'LOOKBOOK DESCRIPTION',
    price: '119,000',
    image:
      'https://i.pinimg.com/564x/92/72/e6/9272e69406692a3fc6c4017b9a7364c1.jpg',
  },
  {
    id: 8,
    category: 'BROWN',
    name: 'BROWN 2',
    description: 'LOOKBOOK DESCRIPTION',
    price: '181,000',
    image:
      'https://i.pinimg.com/564x/d0/14/e0/d014e014ebdf52f21b670ede5792b192.jpg',
  },
  {
    id: 9,
    category: 'BROWN',
    name: 'BROWN 3',
    description: 'LOOKBOOK DESCRIPTION',
    price: '188,000',
    image:
      'https://i.pinimg.com/736x/16/90/21/1690218aa3ff492fbdde7af91ebe1951.jpg',
  },
  {
    id: 10,
    category: 'BLUE',
    name: 'BLUE 1',
    description: 'LOOKBOOK DESCRIPTION',
    price: '93,000',
    image:
      'https://i.pinimg.com/564x/bb/09/ab/bb09ab14445fe95b7eed2164bf369f29.jpg',
  },
]);

var a =[];
for(let i=0; i<10; i++){
  a.push(CLOTHES[i]);
}

function black_button(){
  //위에 잠겨 있는 속성으로 각자 해당하는 속성을 모으는 것 외에는 잘 모르겠습니다.
}
function gray_button(){
  
}
function brown_button(){
  
}
function blue_button(){
  
}

a.map(({id,category,name,description,price,image}) => {
          const menu_array = [];
          let res = a.filter((value) =>value.category == "BLACK" );
          console.log(res);

          const box = document.createElement('div');
          box.className = 'box_div';
          const ibox = document.createElement("div");
          ibox.className = 'a11';

          const key_class = document.createElement("div");
          key_class.className= 'a'+id;
          
          
          const imga= document.createElement("img");
          imga.src= image;
          imga.id= name;
          key_class.appendChild(imga);
          

          const p1 = document.createElement('p');
          p1.textContent = name;
          p1.id= 'b'+id;
          key_class.appendChild(p1);
          

          const p2 = document.createElement('p');
          p2.textContent =price;
          p2.id ='n'+id;
          

          const p3= document.createElement('p');
          p3.textContent = description;
          p2.id='s'+id;

          key_class.appendChild(p2);
          key_class.appendChild(p3);
          ibox.appendChild(key_class);
          box.appendChild(ibox);
          document.write(box.innerHTML);

          
});

