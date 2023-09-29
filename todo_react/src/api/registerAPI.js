const baseURL = "https://localhost:4200"

export const RegisterUser = async (username,
                                firstName,
                                lastName,
                                email,
                                password) => {
    const url = baseURL + "/register";
    try{
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username,firstName,lastName,email,password})
        });
        if(response.ok){
            return response.status;
        } else{
            console.log("Registration failed:", response.status)
            throw new Error ("Registration failed");
        }
    } catch (error){
        console.log("Error: " + error.message);
        throw new Error ("Registration attempt failed");
    }
}