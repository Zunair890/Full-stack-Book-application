import React from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    <nav className='border border-red-400'>navbar Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deserunt nisi maxime debitis. Atque, eveniet? Magni culpa quaerat, sit facere, ex odit voluptatem nemo distinctio, tempora doloremque ab adipisci provident ut assumenda? In, dignissimos? Aspernatur, dolores! Error ad nesciunt blanditiis! Praesentium non esse hic debitis modi nesciunt quaerat quos illum explicabo quibusdam. Officia nostrum blanditiis exercitationem nihil iste rerum culpa a, accusamus deleniti, ipsam voluptate nisi aspernatur, magni explicabo. Quibusdam nisi eaque, alias assumenda obcaecati a distinctio dolorem illo maiores possimus nihil consequuntur, architecto aperiam provident error unde. Ipsum porro ducimus, rerum a culpa ipsa at rem earum totam eaque.</nav>
    
    <main><Outlet/></main>
    <footer>
      Footer
    </footer>
    </>
  )
}

export default App