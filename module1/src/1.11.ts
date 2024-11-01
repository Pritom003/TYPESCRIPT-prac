{
    // Ternary Operator || Optional Chaining || Nullish Coalescing Operator
  
    // Ternary Operator: A concise way to perform conditional checks.
    const age: number = 25; 
  
    // Using if-else statement
    if (age >= 18) {
      console.log("adult");
    } else {
      console.log("not adult");
    }
  
    // Using the ternary operator
    const isAdult = age >= 18 ? "adult" : "not adult"; 
    console.log({ isAdult }); 
  
    // Nullish Coalescing Operator: Returns the right-hand side value when the left-hand side is null or undefined.
    const isAuthenticated = "Pritom"; 
  
    // Using nullish coalescing operator
    const result1 = isAuthenticated ?? "Guest"; 
    
    // Using a conditional (ternary) for comparison
    const result2 = isAuthenticated ? isAuthenticated : "Guest"; 
    
    console.log({ result1 }, { result2 }); 
  
    // Defining a User type with optional properties
    type User = {
      name: string;
      address: {
        city: string;
        road: string;
        presentaddress: string;
        permanentAddress?: string; // optional property
      };
    };
  
    // Creating a user object
    const user: User = {
      name: "Pritom", 
      address: {
        city: "Dhaka", 
        road: "Main Street", 
        presentaddress: "Gulshan", 
      },
    };
  
    // Optional Chaining: Safely access nested properties without checking each level.
    const permanentAddress =
      user?.address?.permanentAddress ?? "No Permanent Address"; // Uses nullish coalescing to provide a default value
    
    console.log({ permanentAddress }); // Outputs: { permanentAddress: "No Permanent Address" }
  }
  