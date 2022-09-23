export async function createUser(data) {
 
 return await fetch(`http://localhost:3001/api/users`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

}
export async function login(data) {
 
  return await fetch(`http://localhost:3001/api/users/login`, {
     method: "post",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(data),
   });
 
 }
 export async function isLoggedIn() {
 
  return localStorage.getItem("isLoggedIn");
 
 }