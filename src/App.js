import{RouterProvider,createBrowserRouter} from "react-router-dom";
import LandingPage from "./LandingPage";
import StudentLogin from "./StudentLogin";
import StaffLogin from "./StaffLogin";
import AdminLogin from "./AdminLogin";
import Home from "./Home";
import StudentDashboard from "./StudentDashboard";
import External from "./External";
import Internal from "./Internal";
import AdminPage from "./AdminPage";
import './App.css';
import InternalProjectRegistered from "./InternalProjectRegistered";
import ExternalRegisterd from "./ExternalRegisterd";
import AddInternal from "./AddInternal";
import InternalHandle from "./InternalHandle";
import InternalEdit from "./InternalEdit";
function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element:<LandingPage/>
    },
    {
      path:"/stafflogin",
      element:<StaffLogin/>
    },
    {
      path:"/adminlogin",
      element:<AdminLogin/>
    },
    {
      path:"/studentlogin",
      element:<StudentLogin/>
    },
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:"/student-dashboard",
      element:<StudentDashboard/>
    },
    {
      path:"/internal",
      element:<Internal/>
    },
    {
      path:"/external",
      element:<External/>
    },
    {
      path:"/adminpage",
      element:<AdminPage/>
    },
    {
      path:"/internalregistered",
      element:<InternalProjectRegistered/>
    },
    {
      path:"/externalregistered",
      element:<ExternalRegisterd/>
    },
    {
      path:"/addinternals",
      element:<AddInternal/>
    },
    {
      path:"/internalhandle",
      element:<InternalHandle/>
    },
    {
      path:"/internaledit",
      element:<InternalEdit/>
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;