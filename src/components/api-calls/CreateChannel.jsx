
export const CreateChannel = (url,name) => {
     async function createNewChannel(url,name)  {
        const body = {
          data: {
            "name": name,
             user: { id: curUserId }
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
      createNewChannel(url,name); 
}