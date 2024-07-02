import axiosInstance from "./axiosInstance";

const ApiService = {
  Events: {
    getEvents() {
      return axiosInstance.get(`/events`);
    },
    getEventsBetweenDates(startDate,endDate){
      return axiosInstance.get(`/events/start/${startDate}/end/${endDate}`);
    }
  },
  
};
export { ApiService };