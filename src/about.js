export default () => {
  let content = document.querySelector('.content');

  let about = document.createElement('div');
  about.classList.add('menu');
  let aboutText = document.createElement('p')
  
  aboutText.textContent = `    Lorem ipsum dolor sit amet consectetur, 
  adipisicing elit. Fuga ex accusantium rem explicabo libero 
  minima temporibus numquam itaque error animi, amet inventore 
  expedita velit qui recusandae iusto non soluta placeat porro. 
  Consectetur nisi blanditiis, aliquam beatae voluptate tempora
   unde doloremque, 
  impedit quibusdam possimus repellat quia obcaecati dicta,
   modi quod enim.`;
  about.appendChild(aboutText) 
  content.innerHTML = '';
  content.appendChild(about);
};
