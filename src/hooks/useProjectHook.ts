import { projectApi } from "../services/Api";


function useProjectHook() {
  const projectControllerCreate = async (
    name: string,
    description: string,
    especificDetails: string
  ) => {
    try {
    const response = await projectApi.projectControllerCreate(
      {name,
      description,
      especificDetails}
    )
    const { data, status, statusText} = response

     

      return {
        status: status,
        message: statusText,
        data: data,
  }
}catch (error: any) {
    console.error("Error fetching users:", error);

    return {
      status: "error",
      message: error.message,
      data: null,
    };
  }
}
  const projectControllerFindAll = async (
    name?: string,
    page?: number,
    perPage?: number
  ) => {
    try {
      const response = await projectApi.projectControllerFindAll(name, page, perPage);

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
    projectControllerCreate,
    projectControllerFindAll
  };
}

export default useProjectHook
