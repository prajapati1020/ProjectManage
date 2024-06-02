//import NewProject from "./component/NewProject";
import NoProjectSelected from "./component/NoProjectSelected";
import ProjectSideBar from "./component/ProjectSideBar";
import { useState } from "react";
import NewProject from './component/NewProject'
import SelectedProject from "./component/SelectedProject";

function App() {

  const [projectState ,setProjectState] = useState({
    selectedProjectId :undefined, //undefined mean we are doing nothing
    projects:[],
    tasks:[],
  });

  function handleAddTask(text){
   setProjectState((prevState)=>{
    const taskId =Math.random();
    const newTask ={
      text:text,
      projectId:prevState.selectedProjectId,
      id:taskId,
    };
    return{
      ...prevState,
      tasks:[newTask , ...prevState.tasks]
    }
   })


  }
  function handleDeltetASK(id){
    setProjectState((prevState)=>{
      return{
        ...prevState,
        tasks:prevState.tasks.filter((task)=>task.id!==id),
      }
    })

  }

  function handleStartAddProject(){
    setProjectState(prevState=>{
return {
  ...prevState,

  selectedProjectId:null, // null means we are adding new Project
}

    })
  }

  function handleSelectProject(id){
    setProjectState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId:id
      }
    })

  }

  function handleCancelAddProject(){
    setProjectState((prevState)=>{
    return{
      ...prevState,
      selectedProjectId :undefined
    }
    })
  }



function handleAddProject(projectData){
  setProjectState(prevState=>{
    const projectId =Math.random();
    const newProject ={
      ...projectData,
      id:projectId,
    };
    return {
     ...prevState,
     selectedProjectId:undefined,
     projects : [...prevState.projects ,newProject]
    }
  })
}


function handleDeletedProject(){
  setProjectState((prevState)=>{
    return {
         ...prevState,
         selectedProjectId:undefined,
         projects:prevState.projects.filter(
          (project)=> project.id!==prevState.selectedProjectId
         )
    }
  })
}




console.log(projectState);









const selectedProject =projectState.projects.find(project=>project.id===projectState.selectedProjectId);

let content = <SelectedProject project={selectedProject} onDelete={handleDeletedProject} onAddTask={handleAddTask}
    onCancelTask={handleDeltetASK} tasks={projectState.tasks}/>;
  if(projectState.selectedProjectId ===null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  }else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartProject={handleStartAddProject}/>
  }


  return (
    <>
    <main className="h-screen my-8 flex gap-8">
    <ProjectSideBar  onStartProject={handleStartAddProject} projects={projectState.projects}
    onSelectProject ={handleSelectProject}  selectedProjectId={projectState.selectedProjectId}/>
    {content}
    </main>
    </>
  );
}

export default App;
