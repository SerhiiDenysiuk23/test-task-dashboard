import React from 'react';
import SideBar from './components/SideBar';
import MainContent from "./components/MainContent";
import {User} from "./types/user";

function App() {
    const user: User = {
        id: "1",
        name: "Evano",
        position: "Project Manager",
        avatarUrl: "./media/userAvatar.png"
    }

    return (
        <div className="App">
            <SideBar user={user}/>
            <MainContent user={user}/>
        </div>
    );
}

export default App;
