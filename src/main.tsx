import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import Landing from "./component/landing/Landing.tsx";
import {BrowserRouter,Routes,Route} from "react-router";
import './index.css'
import Project from "./component/project/Project.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Landing/>} />
              <Route path="/project/:id" element={<Project/>}/>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)