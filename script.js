const menuData = [
    {
         name:"moonlit over the counter basin - Black Matte",
    category:"Hindware",
    price:"₹7000/-",
    img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEA8PDxIPDxAPDw0NDxAPEA8PDw4NFREWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0NDg8PDy0ZFRkrKy03KysrKysrLS0rLSstKzcrKysrKysrNy0tKys3LTcrLSs3Ky0rKysrKzctKysrLf/AABEIALgBEgMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQIDBAYHCAX/xABFEAABAwIDBAYFCAgFBQAAAAABAAIDBBEFEiExQVFxBgcTYYGRIjJScqEUQmKCkqKxwQgjJDNTc7LCo8PR4fAVQ2ODk//EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABgRAQEBAQEAAAAAAAAAAAAAAAARASEC/9oADAMBAAIRAxEAPwDvFERAREQEREBEXycX6TUNJpU1METtuRzwZTyjF3HwCD6yLrnEeuPDmaQMqak7i2MRM8e0IcPsrjOIddVUbinpKeLgZpJJ/MNyfiiV3Yi861nWni8myeOH+RTx/wCYHFfIqemWKSevW1n1JTCPuWQr1CoJA26c15NnxWpf69RUv/mVUrvxcvnyhrjd2Vx4udmPxRK9euqoxtewc3tCq2uhOyWI8pGf6rx3O1nss+H+i1S0cG+QRa9qMeDsIPIgqy8TtFjcaEbxoQvoU+MVcf7upqo/cqJm/g5FeyEXkyj6cYtF6lfWf+yUzD/EzL7lD1t41H608U44TU8X4xhpQel0XRND15Vjf39JTS98UktP8HZ1yPD+u+hfYT09VAd5aIpmDxDg77qDtNFxXDOsbCKiwZWQsJNstRmpjfgO1Db+C5PFK14DmOa9p2OaQ5p5EILoiICIiAiIgIiICIiAiIgIiICIusumvWvFTl0GHhlTMCWumdc08R+jb96eRA7zYhB2HiWJQU0ZlqJY4YxoXyODRfgL7T3Bda9IOuWFt2YfC6c7pp80UXMM9d3I5V1Ji+LVFXIZquWSeTWxedGA7mNGjB3NAC0dT3BErkWOdOcSq7iaqkYw/wDapz2EfI5dXDucSuOBttgA3+KA8PNDbmVKh5nloE8h8Sh7zbuUA+yPEoF/ePLRQR3D6xUu7z4BU03NJ5oIJHFg8CVRz+/yYshDvot8LrBM4+2TxAFkGCV1zt+ACmKK7tdwJPgLrE6Tz4rM11gTx0QYgFYBQFlY1VV6cMzDtM2TXNktm2GxF9NtludjSm1pZWaa54g/X6pH/PJadlCDlFH0UZJHE/t23eBK4ZmgiFwu20ZF8x0FybAkDXVfJxPAKima18ojyuIAcyRrgSRfZt47txXzo3FpzN0I3raOIyn1sj/fiid+LUGmQs9BXz07s1NLNTu2kwSvhJ55SLrCosqOdYN1u4tT2EkkVYwbqiMB9uAfHlPiQVz/AALrtopbNrIZqN297f2mHzaA/wC54roayjKoPX+E4zTVbO0pZ4ahm8xPa/KeDgNWnuK3l42paiSF4khfJDINkkT3RyDk5pBC7H6MdcldT5WVrW10QsC/0Yqlo94DK/kQCfaQr0Ei470V6bUGJC1NKO1tmdTy/q6hg3nIfWA9ptx3rkSKIiICIiAiIgKCbanQDUk7AFK6s6+Ok8lNTw0MLix1b2hmcDYilZYFndmLgD3NcN6DjXWX1jOrHPo6J5bSAlkkrTZ1XxAO6L+rloeur2WvA9Zb3UZWHEqNqtlultg3ncgg8AmzmpuBvWyymJaXWuAASQ5hFjs2FQagbfUpqdBoFnfPEAMzyHX9RrMwA73XGvdZVdWxADKHSPvsLQyIDvsczuWnigxWA4uPdqsckh4hvkT5KJjI/VzgBua0BoHIDQLUcQ3ZqeJVKzvkHLi47fBatRPuboPieaxveSqEJAYLkLZlOoHAKkLLDMfBSEVZqzNWJquCguoUXUqiEVrJZBVFNkQERAgWUWV1NkFY3FrmuaS1zSHNc0lrmuGxwI1B7wu0ehXXBPBlhxIOqYdGioaB8pjHF42SDv0d7xXWGVRZB6+wvEoaqJk9NIyaJ4u18ZzA8R3EbCDqFtLyf0X6T1eGy9rSvsCR2sLrmGccHt48HDUcdoXovoR0zp8Vhzxfq5o7CencQXxOO8H5zDud52NwCuSoiICIiAuhP0iIz8uonbnUj2jmJST/AFBd9rpL9I2O0mFycW10ZPIwkD4lB06w6HaDu5rIKjLbTZvsNee4+SxSDXTms8LgdvmPz4oytHXEZhlFnbdBfwuNPCyk1puDbZaxubi3Dgszae+trji3XzG0LDLBbUahEUkqyTewudp2nzKxOlcdpPmoIUI1EK8b7KqIsXmnLlgIWSylrLoMQYsjIr7dizdjbU6d29Q5yIo5Usrko1AARWSyggKwUKVRIVwqKboLKFF1CCbKERBYKVVLoLAq1ljurNKCHBbmCYxPRTx1VM/JLGdN7XtPrRvHzmnePwIBGq5Yig9Y9EOkcWJUkVXD6Ob0ZYybuhnFs8Z5XuDvBB3r7S8+dRWOugxB1G4/qq1jgG7hUxtL2uHC7A8HjZvBeg0UREQF1J+kbD+w0UnsVnZ/bhef7F22uuevumz4M938GppZeV3GP+9B52g9LmPwUvaW6rXp5LEFfWa0PFx4t/MIzrDT1A7weI0W7219uV3PR3mF8uWLKUa5BvyRxncRyIKxGmj9tw5s/wB1rh5Vu0KKy/JmfxPuuTsIh88nkz/dYS5RdQZ/1Q3OdzIAVXT+yA3lt81hRAJVSrZVbKqMRRp5rI1g2rIEVh14FQCtlVcAgxBSoItyVgiCBWsgQVspVlVBICEIEJQQgREVKi6KCgZlRxUlCERyLq6v/wBVw7Lt+VRfZ1zfduvVS879ReFdvifbkXZRQvlv/wCaT9WwfZMp+qF6IQwRERRcH662XwOusL2+SO8BVRXPldc4XGusuDtMHxJvCjnk+w3P/ag8kNK26ecjYtYtQFEfZEjZBZ3onjuK1J4XMNjsOw7j4rWjlW7BVkCxs5u9rtQiRrgqwK2TDG/1D2bvZdq3wO0fFYJqd7NXDTiNW+aFLqViDlYORV1ayxgq4KC9lBQFSoKA7lKEKtlRa6KmqnVFS/hyUhQArBREoApCIFlFlN1F0EWREugKEuiohLKQskcRKgoGrHMbLbcQ3Taf+b1oVBOu87ABvPBUd/8A6P2Fdnh81UR6VXUODTxhh9AffMvmu0V8nolhPyKho6TS8FPFG+2gMuW73eLi4+K+siiIiAtXFaQT088B1E0M0JHEPYW/mtpEHi3JoL6GwvfQg71he1ci6bUBpsRr4LWDKuctHCN7zIz7rmrj7yiMSs1ygqEGds3FbENU5vquI7jqFoJdB9MzRu9dlj7Uenw2KBStd+7kafou9Er54eVOfiiRtvppG7Wnw1/BY86pHO4eq5w7r3HktgVrz62R47wqKh6uHoJWH1oyPd1/MLKzsTsfl98OH5W+KQY8yLabTA+q6N3KSMnyvdHUTh813gHEfBSLWqiyuhtt056KuQcR5hCq3TMp7PvHmFHZjiPMKBnUZ1bIOI8wmVvFvmEFMyAq5ye0PimZnFBQlFbto95A87qRXQN+bI/llYPjdBAaVmZTOIzWs32jo3zOixPx1w0iihi+kW9q/wA33A8Avn1FW+Q3ke55+kSbcuCD6L6iNm/Ofo7PtH8liNW52nqjg3fzO9fPaVsRlRY276LkHV3hHyvFKCIi7ROKmTS47OEdpY9xLWt+suMNdddx/o+YXmmra0jSOOOkjP0nnPJ5BsX2lpHdqIiKIiICIiDz31+YV2WIsqALNq6drieM0RyP+6YV1W9emuujo+avDXSsF5aJxqQBtdDYiVv2fS5sC80zMsURgRCoQTZRZLpdBCXU3UIF1YOVbJZBmbIrdosCm6DNnCi44W5LFdLq0ZS7vd5lUJPEqt1F1AJKjMUJUIJzFVLypUFA7Q8SoLioIVUVa6XVUQTdSEAVgEFmrIHLGl1BnY9en+pvCvk2D0pIs+pz1r+/tD6B/wDmI/JeZsJoHVM8FMzR9RNFA02vYveG3twF7+C9mU0DY2MjYLMjY2Ng4MaLAeQVGRERAREQEREEEX0OoOh5LzT1q9CThtSXxN/Y6hznQEDSJ+0055alvFvHKV6XWjjWEwVkElNUsEkUos5p0IO0OadzgbEEbCEHjWRtliK531g9AajC5CSDLSvdaGpA0N9kcgHqv+B2jeBwl8dlUYlCsWqLKCEREBTdQiCbpdQiCbooRBKKEQSoREBFKWQVIVcqyWUIKWUgKyWQQFKlEEKQllsUdLJNIyKJrpJJHNjjY0Xc95NgAg7B6h8GNRirZyD2dFFJMT83tXgxxtPf6T3D3F6UXE+rXog3CqJsJyuqJSJqp7dhlI9Rp9lo0HidLrliKIiICIiAiIgIiIMNZSxzRvimYyWORpa9j2hzHtO4g7V0x026nHNLp8MvIzaaV5/WM/lvPrjuOvedi7tRWjx1V4W+NzmPa5jmmzmuaWuaeBB1BWi+nIXrnpF0Vo69tqmIF9rNlZ6EzOTt47jcdy6l6T9UVTFmfSEVUepy6RztHunR3gb9yvNZ7jpoxqhauQV2EvicWSMfG9vrMka5j282nUL50tMQm+SvnWRZ3x2WItWVVRTZQgIiICIiAiIglFCIJUKbJZBCsAllKAllIC5X0L6BV2KOBgZ2dPez6qUFsIF9Qz+I7boPEhBxygoZZ5WQwsdLLK7LHGwXc93cPjfcvR3Vb1aswxoqanLLXPba41ZSsI1ZGd7jvd4DS9/udCOgtHhUdoG9pO4WlqZADLJvyj2GfRHAXudVyhFEREBERAREQEREBERAREQEREGjiuD01U3JUwxzN3Z2glve121p7wuAY71O00t3Ukr6c+xIO2j5A3DhzJK7NRXN3EjzR0h6rsUpruEHylguc9K7ttPcsHk8mlcFqqV0biyRro3jayRrmPHNrtQvaK1MQwyCobkqIYZ2ezNGyRvk4JSPGRjUdmvTuKdUWDz3LYZKZx+dTSvaAe5j8zB4NXE8R6id9NW6bm1ENz9thH9KcHRvZqMi7Nrup7Fo75Y4J/5E7f8ANDF8Gs6C4lF69HVc2QvlHmy4ViVw8tUWX16zCZor9pFLHbbnjey3mF86zeLfMKRWGymyzBrfab5hXaxp0BafEJBr5VIYvrU+CVEn7uCeT3IZX/gF9mi6BYnL6lFVfXidCPOSyRK4kI1PZrs7D+p7FJLZ2QQfzZgT/hhy5RhvUbHtqqtx4tp42tI+u+/9KDons1yLox0GxDESPk0DjGds8t4qcDjnI9Lk0OK9D4L1a4TSEOZSsleLHtKkmodcbw13otPIBctAtoNANAOAUV1f0R6mKOmyy1zvl0wsezIy0rD7m2T62ncuz442tAa0BrWgNa1oAa1o2AAbArIiiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICo6Jp2taeYBREFfk0fsM+y1XawDYAOQAREFkREBERAREQEREBERAREQEREBERB//2Q=="
},
{
    name:"Amazon Over The Counter Basin - Pine Matte",
    category:"Hindware",
    price:"₹ 6,810/-",
    img:"https://hindware.com/_next/image?url=https%3A%2F%2Fhindwarestg.blob.core.windows.net%2Fcontainer1%2Fproducts%2F9109410PM.jpg&w=1200&q=75"
},
{
name:"Fabio Integrated Pedestal Basin",
category:"Hindware",
price:"₹ 10,340/-",
img:"https://hindware.com/_next/image?url=https%3A%2F%2Fhindwarestg.blob.core.windows.net%2Fcontainer1%2Fproducts%2F521454.jpg&w=1200&q=75"
},
{
    name:"Edge Single Lever Bath & Shower Mixer",
    category:"Hindware",
    price:"₹ 12,125/-",
    img:"https://hindware.com/_next/image?url=https%3A%2F%2Fhindwarestg.blob.core.windows.net%2Fcontainer1%2Fproducts%2FF410019CP.jpg&w=1200&q=75"
},
{
    name:"Overhead Shower 300 Mm",
    category:"Hindware",
    price:"₹ 13,500/-",
    img:"https://hindware.com/_next/image?url=https%3A%2F%2Fhindwarestg.blob.core.windows.net%2Fcontainer1%2Fproducts%2F525703.jpg&w=1200&q=75"
},
{
    name:"SILENCIO MINI DLX",
    category:"Polycab",
    price:"₹ 7499/-",
    img:"https://cms.polycab.com/media/sialf1gx/fcespst057m_img_01.jpg?format=webp"
},
{
    name:"SILENCIO CRUISER PRIME BLDC",
    price:"₹ 14999/-",
    category:"Polycab",
    img:"https://cms.polycab.com/media/5p2iyw0g/fcbldces052m_img_01.jpg?format=webp"
},
{
    name:"AIROFRESH",
    category:"Polycab",
    price:"₹ 1899/-",
    img:"https://cms.polycab.com/media/ne5nbljo/fexdoaf004p_img_01.png?format=webp"
},
{
    name:"FRESHLY PRIME",
    category:"Polycab",
    price:"₹ 2199/-",
    img:"https://cms.polycab.com/media/upznfhhf/fexdove036p_img_01.png?format=webp"
},
]
const menuContainer = document.getElementById('menu'); 
const categoryBtns = document.querySelectorAll('.category-btn'); 
 
function renderMenu(category = "All") { 

  menuContainer.innerHTML = ""; 
  let filtered = category === "All" ? menuData : menuData.filter(item => item.category === category); 
  if(filtered.length === 0) { 
    menuContainer.innerHTML = "<p style='text-align:center;width:100%'>No items found.</p>"; 
    return; 
  } 
  filtered.forEach(item => { 
    menuContainer.innerHTML += ` 
      <div class="menu-item"> 
        <img src="${item.img}" alt="${item.name}" class="menu-img"/> 
        <div class="menu-info"> 
          <div class="menu-title">${item.name}</div> 
          <div class="menu-category">${item.category}</div> 
          <div class="menu-price">${item.price}</div> 
        </div> 
      </div> 
    `; 
  }); 
} 
 
categoryBtns.forEach(btn => { 
  btn.addEventListener('click', function() { 
    document.querySelector('.category-btn.active').classList.remove('active'); 
    this.classList.add('active'); 
    renderMenu(this.dataset.category); 
  }); 
}); 
 
renderMenu(); 

