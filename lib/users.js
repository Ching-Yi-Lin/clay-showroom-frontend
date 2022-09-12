export async function createUser(data) {
 
 let res = await fetch(`http://localhost:3001/api/users`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

}
