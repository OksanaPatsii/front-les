import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function layout():JSX.Element{
    return(
        <>
            <header>
                <h1>My site</h1>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>

            <footer>
                <p>Footer</p>
            </footer>
        </>
    )
}