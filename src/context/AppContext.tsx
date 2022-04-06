import {createContext} from 'react';

export type AppContextType = {
    state: any;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);
 