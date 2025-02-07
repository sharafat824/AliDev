// lib/roles.js
export const checkRole = (auth, role) => {
    // Log sessionClaims to inspect it
    const { user } = auth;
  
    console.log('user:', user);  // Log the user object
  
    // Check if user and user roles are defined
    if (!user || !user.roles) {
      console.log('User or roles missing');
      return false;
    }
  
    return user.roles.includes(role);
  };
  