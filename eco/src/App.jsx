import Area from "./components/area/Area"
import Card from "./components/Card/Card"
import Download from "./components/Download/Download"
import Explore from "./components/Explore/Explore"
import Footer from "./components/Footer/Footer"
import Menu from "./components/menu/Menu"
import Navbar from "./components/Navbar/Navbar"



function App() {


  return (
    <>
      <Navbar/>
      <Card/>
      <div className="w-full mt-32 py-2 px-3 ml-16 flex gap-3">
          <Menu title="pizza" img="https://miro.medium.com/max/2800/0*oTfm1pTXLxitHHFy.jpg" price='₹299'/>

          <Menu title="Burger" img="https://th.bing.com/th/id/OIP.g_EYshV4TBrKFonMmN2KEgHaE7?rs=1&pid=ImgDetMain" price='₹199'/>

          <Menu title="momos" img="https://th.bing.com/th/id/R.686eea5b785d964e9c6f5aa622ec8db6?rik=I2e8p9gFjfaHeg&riu=http%3a%2f%2frecipedose.com%2fwp-content%2fuploads%2f2013%2f03%2fChicken-momos.jpg&ehk=P8WqN4eTADZLNRHw%2f58ok2K00IOoMqab1qmn9DrSLIw%3d&risl=1&pid=ImgRaw&r=0" price='₹99'/>

          <Menu title="chicken" img="https://th.bing.com/th/id/OIP.oqCsDEy-zmd277UaC2-cSQHaHa?rs=1&pid=ImgDetMain" price='₹599'/>

          <Menu title="Burger" img="https://th.bing.com/th/id/OIP.g_EYshV4TBrKFonMmN2KEgHaE7?rs=1&pid=ImgDetMain" price='₹199'/>

        
      </div>
      <Area/>
      <Download/>
      <Explore/>
      
      <Footer/>
    </>
  )
}

export default App
