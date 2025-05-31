import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import { PageProvider, usePage } from './context/PageContext'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'

function App() {
  return (
    <HelmetProvider>
      <Header />
      <PageProvider>
        <main>
          <Sidebar />

          <div className="main-content">
            <Navbar />
            <PageContent />
          </div>
        </main>
      </PageProvider>
    </HelmetProvider>
  )
}

// Separate component to handle page visibility
function PageContent() {
  const { activePage } = usePage();

  return (
    <>
      <About className={activePage === 'about' ? 'active' : ''} />
      <Resume className={activePage === 'resume' ? 'active' : ''} />
      <Portfolio className={activePage === 'portfolio' ? 'active' : ''} />
      <Contact className={activePage === 'contact' ? 'active' : ''} />
    </>
  );
}

export default App
