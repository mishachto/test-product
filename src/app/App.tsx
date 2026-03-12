import { RouterProvider } from "react-router-dom";
import { router } from "@/app/routing/routes";
import "@/app/styles/tokens.css";
import "@/app/styles/globals.css";

export function App() {
  return <RouterProvider router={router} />;
}
