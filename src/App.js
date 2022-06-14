import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import auth from './services/authService'
import Routes from './routes';

import "react-toastify/dist/ReactToastify.css";
import "./Main.css"

function App() {
  const [user, setUser] = useState()

  useEffect(()=> {
    const currentUser = auth.getCurrentUser();
    setUser(currentUser);
  }, [])

  const handleUpdateUser = async (username, password) => {
    await auth.logout()
    await auth.login(username, password)
    window.location = `/editUser/${user._id}`
    toast.success('User updated.')
  }

  return (
    <div>
      <header>
        <ToastContainer hideProgressBar='true' autoClose={2500}/>
        <Header user={user}/>
      </header>
      <main className='page-container'>
          <div className="container main-container">
            <Routes user={user} handleUpdateUser={handleUpdateUser} />
          </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App