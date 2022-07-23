
const Home = () => {

  const handleLogout = ()=> {
    localStorage.removeItem("authToken");
    window.location.reload();
  }
  return (
    <div>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Home