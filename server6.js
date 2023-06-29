function validateLinkedInURL(url) {
    const regex = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  
    if (regex.test(url)) {
      console.log("Valid LinkedIn profile URL.");
    } else {
      console.log("Invalid LinkedIn profile URL.");
    }
  }
  
  // Example usage
  const url1 = "https://www.linkedin.com/in/john-doe123";
  validateLinkedInURL(url1);
  
  const url2 = "https://www.linkedin.com/in/jane-doe_789";
  validateLinkedInURL(url2);
  
  const url3 = "https://www.linkedin.com/in/invalid@profile";
  validateLinkedInURL(url3);
  