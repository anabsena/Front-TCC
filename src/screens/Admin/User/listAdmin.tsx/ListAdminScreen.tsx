import { useEffect, useState } from "react";
import useUserHook from "../../../../hooks/useUserHook";
import { HiOutlineDotsVertical, HiOutlinePencilAlt, HiOutlineUserCircle, HiOutlineXCircle, HiSearch } from "react-icons/hi";

const ListAdminScreen = () => {
  const { userControllerFindAll } = useUserHook();

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userControllerFindAll('', 1, 10);
        if (response.status === 200) {
          //@ts-ignore
          setUsers(response.data.data);
        } else {
          console.error("Error fetching users:", response.message);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);  
//@ts-ignore
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);  
  };
 
//@ts-ignore
  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setShowModal(false);
  };

//@ts-ignore
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredUsers = users.filter(user => 
    //@ts-ignore
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    //@ts-ignore
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <div className="w-full h-full flex flex-col items-center p-8">
      <h1 style={{ fontFamily: "Adam, sans-serif" }} className="text-3xl text-[#545C99] font-bold uppercase">
        Administradores(as)
      </h1>
      <div className="flex items-center gap-2 w-full justify-end">
        <input 
          type="text" 
          placeholder="Pesquisar" 
          value={searchTerm} 
          onChange={handleSearchChange} 
          className="p-2 bg-transparent border border-secondary text-secondary rounded-xl focus:outline-none" 
        />
        <HiSearch className="text-primary text-3xl"/>
      </div>
      {currentUsers.map((user) => (
        //@ts-ignore
        <div key={user.id} className="bg-gradient-to-r from-[#636BA6] to-[#1E1D40] w-full rounded-xl p-4 flex gap-4 mt-4 items-center justify-between">
          <div className="flex gap-4 ">
            <HiOutlineUserCircle className="text-6xl text-[#D9B341]"/>
            <div>
              <h1 className="text-xl text-[#F2F4FF] font-semibold" style={{ fontFamily: "Adam, sans-serif" }}>
                {/* @ts-ignore */}
                Nome: {user.name}
              </h1>
              <h1 className="text-md text-[#F2F4FF]" style={{ fontFamily: "Mulish, sans-serif" }}>
              {/* @ts-ignore */}
                Email: {user.email}
              </h1>
            </div>
          </div>
          <div className="relative">
            <HiOutlineDotsVertical 
              className="text-4xl text-[#EDD253] cursor-pointer"
              onClick={() => {
                //@ts-ignore
                if (showModal && selectedUser && selectedUser.id === user.id) {
                  handleCloseModal();
                } else {
                  handleOpenModal(user);
                }
              }}
            />
            {/* @ts-ignore */}
            {showModal && selectedUser && selectedUser.id === user.id && (
              <div className="absolute right-0 mt-2 w-48 bg-[#1E1D40] rounded-xl shadow-lg z-10 border border-[#D9B341]">
                <div className="flex flex-col gap-4 p-2">
                  
                  <h1 className="flex gap-2 items-center"><HiOutlinePencilAlt className="text-xl text-[#D9B341]"/>Editar</h1>
                 
                  <h1 className="flex gap-2 items-center"><HiOutlineXCircle className="text-xl text-[#D9B341]"/>Excluir</h1>
                  
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
      {totalPages > 1 && (
        <div className="mt-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button 
              key={page} 
              onClick={() => paginate(page)} 
              className={`mx-1 p-2 rounded-md ${currentPage === page ? 'bg-[#636BA6] text-white' : 'bg-[#1E1D40] text-[#F2F4FF]'}`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListAdminScreen
