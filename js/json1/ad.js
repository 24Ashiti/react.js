fetch("http://localhost:3000/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("ad1").innerHTML = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      console.log("Fetch error:", error);
    });