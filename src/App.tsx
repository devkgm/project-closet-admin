import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "@pages/home/index";
import Header from "./components/common/header/Header";
import Nav from "./components/common/nav/Nav";
import Footer from "./components/common/footer/Footer";
import styles from "./App.module.scss";

function App() {
    return (
        <RecoilRoot>
            <Header />
            <Nav />
            <div className={styles.container}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer />
        </RecoilRoot>
    );
}

export default App;
