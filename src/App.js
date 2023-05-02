import { createContext, useState } from 'react';
import Nav from './components/organisms/Nav';

export const CartContext = createContext();
export const UserContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState({
      numItems: 0,
      items: [],
      total: 0
  });

  const [user, setUser] = useState("");

  return (
    <CartContext.Provider value ={{ cartItems, setCartItems }} >
      <UserContext.Provider value = {{ user, setUser }} >
        <Nav />
      </UserContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
