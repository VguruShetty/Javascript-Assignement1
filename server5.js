function validateURL(url) {
    const regex = /^(http:\/\/|https:\/\/)[\w\d\-.]+.[\w]+$/;
  
    if (regex.test(url)) {
      console.log("URL is valid.");
    } else {
      console.log("URL is not valid.");
    }
  }
  
  // Example usage
  const url1 = "http://www.example.com";
  validateURL(url1);
  
  const url2 = "https://openai.com";
  validateURL(url2);
  
  const url3 = "ftp://www.invalidurl.com";
  validateURL(url3);
  