import bus_ticket_booking_api from "../config/api";

export const fetchAllRoutes = async () => {
  try {
    const response = await bus_ticket_booking_api.get(`/routes?limit=100`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await bus_ticket_booking_api.post("/auth/signin", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data;
    } else {
      throw { message: "An unexpected error occurred" };
    }
  }
};
