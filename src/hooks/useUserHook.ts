import { userApi } from "../services/Api";


function useUserHook() {
  const userControllerFindAll = async (
    name?: string,
    page?: number,
    perPage?: number
  ) => {
    try {
      console.log('name');
      const response = await userApi.userControllerFindAll(name, page, perPage);
      console.log('hook', response)

      const { data, status, statusText} = response

     

      return {
        status: status,
        message: statusText,
        data: data,
      };
    } catch (error: any) {
      console.error("Error fetching users:", error);

      return {
        status: "error",
        message: error.message,
        data: null,
      };
    }
  };

  return {
    userControllerFindAll,
  };
}

export default useUserHook;
