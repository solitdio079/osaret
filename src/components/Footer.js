import * as React from "react"
import {Link} from "gatsby"
import logo from "./logo.png"
const Footer = () => {
    return (
        <footer className="footer bg-base-200/60 p-10">
        <aside className="gap-6">
          <div className="flex items-center gap-2 text-xl font-bold text-base-content">
          <Link
          className="link flex text-base-content link-neutral text-xl font-bold no-underline"
          to="/"
        >
         <img src={logo} className="w-24 lg:w-32"/>
        </Link>
          </div>
          <p className="text-base-content text-sm">Observatoire Sahélien d’Analyse, de Recherche et d’Étude sur le Terrorisme</p>
        </aside>
        <nav className="text-base-content">
          <h6 className="footer-title">Nos Services</h6>
          <a href="#" className="link link-hover">Analyse rigoureuse</a>
          <a href="#" className="link link-hover">Assistance technique aux acteurs étatiques</a>
          <a href="#" className="link link-hover">Mise en avant une approche scientifique</a>
          <a href="#" className="link link-hover">Réalisation des projets de recherche</a>
          <a href="#" className="link link-hover">Fourniture d’expertise indépendante</a>
        </nav>
        <nav className="text-base-content">
          <h6 className="footer-title">Cabinet</h6>
          <Link to="/about" className="link link-hover">A Propos</Link>
          <Link to="/contact" className="link link-hover">Contact</Link>
         
        </nav>
        <nav className="text-base-content">
          <h6 className="footer-title">Legale</h6>
          <a href="#" className="link link-hover">Conditions d’utilisation</a>
          <a href="#" className="link link-hover">Politique de confidentialité</a>
          <a href="#" className="link link-hover">Politique relative aux cookies</a>
        </nav>
      </footer>
    )
}

export default Footer