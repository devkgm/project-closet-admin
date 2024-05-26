import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "@pages/home/index";
import Header from "./components/common/header/Header";

function App() {
    return (
        <RecoilRoot>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
