import {
  DynamicWidget,
  DynamicContextProvider,
} from "@dynamic-labs/sdk-react-core";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";
import { useState } from "react";
import Navigation from "./components/Navigation";



function App() {
  const [ isLoggedIn, setIsloggedIn] = useState<boolean>(true)
  return (

    <DynamicContextProvider
          settings={{
            environmentId: process.env.DYNAMIC_AUTH_ID || '',
            walletConnectors: [SolanaWalletConnectors],
          }}
        > 
       <div>
        { isLoggedIn ? <Navigation/> : <div className="h-[100vh] flex justify-center items-center bg-black w-[100vw]">
        <DynamicWidget />
        </div> }
       </div>
        </DynamicContextProvider>
  );
}

export default App;
