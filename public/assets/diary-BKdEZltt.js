import"./style-BjDTY_ay.js";import{f as s}from"./fetch-CGUiTqyx.js";const m=document.querySelector(".get_entry");m.addEventListener("click",async()=>{console.log("Klikki toimii"),s("http://localhost:3000/api/entries/1").then(o=>{console.log(o)})});const p=document.querySelector(".get_users");p.addEventListener("click",h);async function h(){console.log("funktio getUsers");const t="http://127.0.0.1:3000/api/users",o={method:"GET",headers:{Authorization:"Bearer:"+token}};s(t,o).then(e=>{console.log(e),g(e)})}function g(t){console.log(t);const o=document.querySelector(".tbody");t.forEach(e=>{console.log(e.user_id,e.username,e.user_level);const n=document.createElement("tr"),a=document.createElement("td");a.innerText=e.username;const d=document.createElement("td");d.innerText=e.user_level;const r=document.createElement("td"),l=document.createElement("button");l.className="check",l.setAttribute("data-id",e.user_id),l.innerText="Info",r.appendChild(l),l.addEventListener("click",E);const i=document.createElement("td"),c=document.createElement("button");c.className="del",c.setAttribute("data-id",e.user_id),c.innerText="Delete",i.appendChild(c),c.addEventListener("click",k);var u=document.createElement("td");u.innerText=e.user_id,n.appendChild(a),n.appendChild(d),n.appendChild(r),n.appendChild(i),n.appendChild(u),o.appendChild(n)})}function E(){console.log("Haet tietoa")}function k(t){console.log("Deletoit tietoa"),console.log(t),t.target.attributes["data-id"].value;const o=t.target.parentElement.nextElementSibling.textContent;console.log("Toinen tapa;",o)}async function b(){console.log("Hei täällä ollaan! Nyt pitäisi hakea käyttäjän tiedot");const t="http://localhost:3000/api/auth/me",e={method:"GET",headers:{Authorization:"Bearer: "+localStorage.getItem("token")}};s(t,e).then(n=>{console.log(n),document.getElementById("name").innerHTML=n.user.username})}b();
