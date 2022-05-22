
export const CreateMessage = (url,name) => {
     async function createNewMessage(url,name)  {
        const body = {
          data: {
            "message": name,
             user: { id: curUserId },
             channel:{id:curChannelId}
          },
        };
        const path = `http://localhost:1337/api/${url}`;
        const response = await fetch(path, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        return response.json();
      };
      createNewMessage(url,name); 
}