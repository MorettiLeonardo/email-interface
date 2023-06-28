import { useState } from 'react'
import Header from './components/Header'
import Container from './components/Container'
import Sidebar from './components/Sidebar'
import Bottombar from './components/Bottombar'
import EmailList from './components/EmailList'
import EmailContent from './components/EmailContent'

function App() {
  const [openEmail, setOpenEmail] = useState(null)

  return (
    <>
      <Header />
      <Container>
        <div className="
        flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative"
        >
          <Sidebar />
          <EmailList setOpenEmail={setOpenEmail} />
          {openEmail && <EmailContent email={openEmail} onClose={() => setOpenEmail(null)} />}
          <Bottombar />
        </div>
      </Container>
    </>
  )
}

export default App
