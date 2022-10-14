import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-success navbar-expand-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link fw-semibold">Accueil</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog">
                <a className="nav-link fw-semibold">Blog</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/users">
                <a className="nav-link fw-semibold">Utilisateurs</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
