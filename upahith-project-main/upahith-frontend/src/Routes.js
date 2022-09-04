import { Route, Routes } from "react-router-dom";
import Home from './components/screen/Home';
import StoryGen from "./components/screen/StoryGen";


const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story-generator" element={<StoryGen />} />
            {/* <Route path="/paint-to-image" element={<PaintToImage />} />
            <Route path="/mnist" element={<Mnist />} /> */}
        </Routes >
    );
}
export default routes;