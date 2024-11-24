import { jwtDecode } from "jwt-decode";

export const isAuthenticated = () => {
  const accessToken = localStorage.getItem("token");

  if (accessToken) {
    try {
      // Decode the token
      const decodedToken = jwtDecode(accessToken);

      // Check if userId exists in the decoded token
      if (decodedToken._id && (decodedToken.role === 'operator' || decodedToken.role === 'admin') ) {
        return true;
      }

      // If userId is missing, authentication fails
      return false;
    } catch (error) {
      return false;
    }
  }
  return false;
};
