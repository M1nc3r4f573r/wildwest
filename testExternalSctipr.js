async function getUserInfo() {
    try {
        // Fetch address from api.ipify.org
        let response = await fetch('https://api.ipify.org?format=json');
        
        // Check if the response is okay
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON response
        let data = await response.json();
        
        // Return the address
        return data.ip;
    } catch (error) {
        console.error('Error fetching the address:', error);
        return null;
    }
}
