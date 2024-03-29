import Link from 'next/link'

function Navigation(){
    return (

    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
            <Link className="navbar-brand text-light" href="/">Primer Proyecto con Next</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-light" href="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" href="/services">Services</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
      
    )
  }
  
  export default Navigation