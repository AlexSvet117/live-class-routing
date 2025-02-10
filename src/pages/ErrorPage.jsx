import Navbar from "../layout/Navbar"

function ErrorPage() {
  return (
    <> <Navbar/>
    <div className="d-flex justify-content-center mt-5">
      <h1 className="text-danger">Danger: Page not found. Cto ty delaesh, idi vs zashitu!</h1>
    </div>
    </>
  )
}

export default ErrorPage
