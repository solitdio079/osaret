import * as React from "react"
import {Link} from "gatsby"
import logo from "./logo.png"
const Navbar = () => {
    return (
        <nav className="navbar  rounded-none shadow-base-300/20 shadow-sm">
      <div className="w-full md:flex md:items-center md:gap-2">
        <div className="flex items-center justify-between">
          <div className="navbar-start items-center justify-between max-md:w-full">
            <Link
              className="link flex text-base-content link-neutral text-xl font-bold no-underline"
              to="/"
            >
             <img src={logo} alt="logo" className="w-20 lg:w-56"/>
            </Link>
            <div className="md:hidden">
              <button
                type="button"
                className="collapse-toggle rounded-none btn btn-outline btn-sm btn-square"
                data-collapse="#navbar-collapse"
                aria-controls="navbar-collapse"
                aria-label="Toggle navigation"
              >
                <span className="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                <span className="icon-[tabler--x] collapse-open:block hidden size-4"></span>
              </button>
            </div>
          </div>
        </div>
        <div
          id="navbar-collapse"
          className="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full"
        >
          <ul className="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
            <li>
              <Link className="dropdown-item" to="/">
                Accueil
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/about">
                A propos
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/services">
                Nos Services
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/projects">
                Nos Projets
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default Navbar