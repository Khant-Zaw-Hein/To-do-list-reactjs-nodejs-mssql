const baseURL = "http://localhost:4200"

export const Login = async (username, password) => {
    const url = baseURL + "/login";
    // console.log("login in api:", username, password);
    // console.log('connecting to:', url);
    try{
        const response = await fetch (url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        });
        // console.log('response data', await response.json());
        if(response.ok){
            const jsonData = await response.json();
            console.log("Login successful", jsonData);
            return response.status;
        } else {
            console.log("Login failed with stats", response.status);
            throw new Error("Login failed");
        }
        
    } catch(error){
        console.log("Error: " + error.message);
        // Handle the error
        throw new Error("An error occurred during login");
    }

}