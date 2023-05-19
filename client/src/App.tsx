import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import NotesList from "./pages/NotesList";
import NoteDescription from "./pages/NoteDescription";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/notes",
        element: <NotesList />,
      },
      {
        path: "/notes/:noteId",
        element: <NoteDescription />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
