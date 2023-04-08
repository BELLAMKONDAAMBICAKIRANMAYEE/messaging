import { createContext, useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

export const AccountContext = createContext(null);

const AccountProvider = ({children}) => {

    const [ account, setAccount ] = useState();
   

    const [activeUsers, setActiveUsers] = useState([]);
    
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const [ person, setPerson ] = useState({});
    const socket = useRef();

    useEffect(() => {
        socket.current = io('ws://localhost:9000');
    }, [])

    return (
        <AccountContext.Provider value={{ 
            account, 
            setAccount, 
            socket,
            activeUsers,
            setActiveUsers,
            newMessageFlag,
            setNewMessageFlag,
            person, 
            setPerson
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider;