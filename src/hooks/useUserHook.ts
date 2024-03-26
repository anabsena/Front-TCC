import { userApi } from "../services/Api";

function useUserHook() {
  const userControllerFindAll = async (
    name: string,
    page: number,
    perPage: number
  ) => {
    try {
      const response = await userApi.userControllerFindAll(name, page, perPage);

      if (response.status !== 200) {
        throw new Error(response.statusText);
      }

      return {
        status: response.status,
        message: response.statusText,
        data: response.data,
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
