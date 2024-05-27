//import NewProject from "./component/NewProject";
import NoProjectSelected from "./component/NoProjectSelected";
import ProjectSideBar from "./component/ProjectSideBar";

function App() {
  return (
    <>
    <main className="h-screen my-8 flex gap-8">
    <ProjectSideBar/>
    <NoProjectSelected/>
    </main>
    </>
  );
}

export default App;
