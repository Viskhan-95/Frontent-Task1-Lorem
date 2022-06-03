const header1 = document.createElement('p');
header1.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet officiis quisquam eveniet dignissimos, perspiciatis, impedit dicta soluta consequuntur delectus labore odio totam asperiores nihil eius dolorem accusantium sunt, explicabo ullam." 
const divLorem = document.querySelector('.text');
divLorem.append(header1);

const intocode = document.createElement('a');
const google = document.createElement('a');
const instagram = document.createElement('a');

intocode.href = 'http://www.intocode.ru';
intocode.appendChild(document.createTextNode('intocode'));

google.href = 'https://www.google.ru';
google.appendChild(document.createTextNode('google'));

instagram.href = 'http://www.instagram.com';
instagram.appendChild(document.createTextNode('instagram'));

const divLink = document.querySelector('.link');
divLink.prepend(intocode);
divLink.prepend(google);
divLink.prepend(instagram);