import { useEffect, useState } from "react";
import useUserHook from "../../hooks/useUserHook";

const ListAdminScreen = () => {
  const { userControllerFindAll } = useUserHook();

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userControllerFindAll(searchTerm, currentPage, usersPerPage);

        if (response.status === 200) {
          console.log('respostinha:', response); 
        //   setUsers(response.data);
        } else {
          console.error("Error fetching users:", response.message);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, [searchTerm, currentPage, usersPerPage, userControllerFindAll]);  

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//     setCurrentPage(1);  
//   };

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="w-full h-full flex flex-col items-center p-8">
      <h1 style={{ fontFamily: "Adam, sans-serif" }} className="text-3xl text-[#545C99] font-bold uppercase">
        Administradores(as)
      </h1>
     
    </div>
  );
};

export default ListAdminScreen;
