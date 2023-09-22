import { createContext, useState } from "react";
import ChildContact from "../components/ChildContact";

export const UserContext = createContext();

export default function Contacts() {
    const [user, setUser] = useState("React course")
    return (
        <UserContext.Provider value={user}>
            <div>
                <h2>Contacts</h2>
                {user}
                <ChildContact />
            </div>
        </UserContext.Provider>
    )
}
