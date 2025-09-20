import { BrowserRouter, Routes, Route } from "react-router"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Toaster } from "./component/ui/Toaster"


function App() {

  return (
    <>
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
