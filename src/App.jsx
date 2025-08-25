import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { AppRouter } from "./Components/AppRouter/AppRouter";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
        <Main>
          <AppRouter />
        </Main>
      <Footer />
    </>
  )
}

export default App
