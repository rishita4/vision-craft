export async function fetchApi(latitude, longitude){
    const url = `https://api.openweathermap.org/data/3.0/onecall?units=metric&lat=${latitude}&lon=${longitude}&appid=8883319e12e38ef60140162ef0a72500`;
    console.log("hello yogis");
    
    
    try{

        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`error`)
        }
    
        const data =await response.json();
        console.log(data);
        const timestamp = data.current.dt;
      const humanReadableTime = new Date(timestamp * 1000).toLocaleString();
      data.current.dt = humanReadableTime
      
      data.current.sunrise = new Date(data.current.sunrise * 1000).toLocaleTimeString();
      data.current.sunset = new Date(data.current.sunset * 1000).toLocaleTimeString();
        return data;
    }catch (error) {
      
        console.error('There was a problem with the fetch operation:', error.message);
    }
    
    

    
      
}