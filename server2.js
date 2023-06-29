function generateRandomNumberWithDelay(delay) {
    let remainingTime = delay;
    let countdown = setInterval(() => {
      console.log(`Time remaining: ${remainingTime} seconds...`);
      remainingTime--;
  
      if (remainingTime < 0) {
        clearInterval(countdown);
        const randomNumber = Math.random();
        console.log(`Random number generated: ${randomNumber}`);
      }
    }, 1000);
  }
  
  // Example usage
  const delay = 3; // Delay in seconds
  generateRandomNumberWithDelay(delay);
  