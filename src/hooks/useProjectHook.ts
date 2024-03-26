import { projectApi } from "../services/Api";


function useProjectHook() {
  const projectControllerFindAll = async (
    name?: string,
    page?: number,
    perPage?: number
  ) => {
    try {
      console.log('name');
      const response = await projectApi.projectControllerFindAll(name, page, perPage);
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
    projectControllerFindAll,
  };
}

export default useProjectHook;
