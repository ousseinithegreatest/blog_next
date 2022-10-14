import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="container px-4 pt-5">
      <h1>Bienvenue sur code.io</h1>
      <span>Le blog communautaire des aficinados de développement web</span>

      <div className="row mt-5">
        <div className="col-12 col-sm-6">
          <div className="card w-100 h-100">
            <div className="card-body">
              <h5 className="card-title">Lisez les articles</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Maximez votre culture web
              </h6>
              <p className="card-text">
                Chauque auteur tente de vous apporter le plus de valeur possible
                par article
              </p>
              <Link href="/blog">
                <a>Visitez le blog</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6">
          <div className="card w-100 h-100">
            <div className="card-body">
              <h5 className="card-title">Faites un tour vers la liste des membres</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Rencontrez des dev
              </h6>
              <p className="card-text">
                Ajoutezn invitez et discutez avec les différents membres.
              </p>
              <Link href="/users">
                <a>Découvrez la liste des membres</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
