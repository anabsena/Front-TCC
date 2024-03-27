import { useState } from "react";
import useProjectHook from "../../../../hooks/useProjectHook"
import { Button } from "../../../../components/ui/button";

const CreateProjectScreen = ()=>{
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [especificDetails, setEspecificDetails] = useState("");
    const [category, setCategory] = useState("");
    const [photo, setPhoto] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const {projectControllerCreate}= useProjectHook()
    
    
    
    const CreateProject = async()=>{
        const response = await projectControllerCreate(name, description, especificDetails);
    if (response?.status === 'success') {
      console.log(response)
    }
}


    return(
        <div className="w-full h-full flex flex-col items-center p-8">
      <h1 style={{ fontFamily: "Adam, sans-serif" }} className="text-3xl text-[#545C99] font-bold uppercase">
        Crie seus projetos
      </h1>

      <div className="flex flex-col gap-4 justify-center items-center w-full">
        <label htmlFor="name" className="flex flex-col uppercase w-full items-center justify-center" style={{ fontFamily: "Mulish, sans-serif" }}>
         <span className=" flex items-start text-primary">Nome do projeto:</span> 
          <input
            type="text"
            id="name"
            placeholder="Nome do projeto"
            value={name}
            className="p-4 bg-transparent border border-primary rounded-xl focus:outline-none"
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
        </label>

        <label htmlFor="description" className="flex flex-col uppercase w-full items-center justify-center" style={{ fontFamily: "Mulish, sans-serif" }}>
        <span className=" flex items-start text-primary">Descrição:</span> 
          <input
            
            type="text"
            id="description"
            placeholder="Descrição"
            value={description}
            className="p-4 bg-transparent border border-primary  rounded-xl focus:outline-none"
            onChange={(e) => setDescription(e.target.value)}
            autoComplete="off"
          />
        </label>
        <label htmlFor="especificDetails" className="flex flex-col uppercase w-full items-center justify-center" style={{ fontFamily: "Mulish, sans-serif" }}>
        <span className=" flex items-start text-primary">Detalhes específicos:</span> 
          <input
            
            type="text"
            id="especificDetails"
            placeholder="Detalhes específicos"
            value={especificDetails}
            className="p-4 bg-transparent border border-primary  rounded-xl focus:outline-none"
            onChange={(e) => setEspecificDetails(e.target.value)}
            autoComplete="off"
          />
        </label>
        <label htmlFor="category" className="flex flex-col uppercase w-full items-center justify-center" style={{ fontFamily: "Mulish, sans-serif" }}>
        <span className=" flex items-start text-primary">Categoria:</span> 
          <input
            
            type="text"
            id="category"
            placeholder="Categorias"
            value={category}
            className="p-4 bg-transparent border border-primary  rounded-xl focus:outline-none"
            onChange={(e) => setCategory(e.target.value)}
            autoComplete="off"
          />
        </label>
        
<div className=" flex justify-end">
        <Button type="submit" onClick={()=> CreateProject()} style={{ fontFamily: "Mulish, sans-serif" }} size={"lg"} variant={"inverse"}>Criar</Button>
        </div>
      </div>
      
      
      </div>
    )
}
export default CreateProjectScreen