import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "@pages/home/index";
import Header from "./components/common/header/Header";
import Nav from "./components/common/nav/Nav";
import Footer from "./components/common/footer/Footer";

function App() {
    return (
        <RecoilRoot>
            <Header />
            <Nav />
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<Home />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </RecoilRoot>
    );
}

export default App;
