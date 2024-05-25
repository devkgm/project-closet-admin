import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import AdminHome from "@pages/admin/home/index";

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route path='/admin/home' element={<AdminHome />} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
