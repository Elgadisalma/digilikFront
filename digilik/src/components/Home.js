import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import CountUp from "react-countup";


export default function Home(){
    
    return(
        <>

        {/* <!-- Spinner Start --> */}
        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner"></div>
        </div> */}
        {/* <!-- Spinner End --> */}

        {/* <!-- Topbar Start --> */}
        {/* <div className="container-fluid bg-dark px-5 d-none d-lg-block">
            <div className="row gx-0">
                <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                        <small className="me-3 text-light">
                            <i className="fa fa-map-marker-alt me-2"></i>
                            123 Street, New York, USA
                        </small>
                        <small className="me-3 text-light">
                            <i className="fa fa-phone-alt me-2"></i>
                            +012 345 6789
                        </small>
                        <small className="text-light">
                            <i className="fa fa-envelope-open me-2"></i>
                            info@example.com
                        </small>
                    </div>
                </div>
                <div className="col-lg-4 text-center text-lg-end">
                    <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
                            <i className="fab fa-twitter fw-normal"></i>
                        </a>
                        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
                            <i className="fab fa-facebook-f fw-normal"></i>
                        </a>
                        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
                            <i className="fab fa-linkedin-in fw-normal"></i>
                        </a>
                        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
                            <i className="fab fa-instagram fw-normal"></i>
                        </a>
                        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="#">
                            <i className="fab fa-youtube fw-normal"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <!-- Topbar End --> */}

        {/* <!-- Navbar & Carousel Start --> */}
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                <a href="index.html" className="navbar-brand p-0">
                    <h1 className="m-0">
                        {/* <i className="fa fa-user-tie me-2"></i> */}
                        Digilik</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="#home" className="nav-item nav-link active">Home</a>
                        <a href="#about-us" className="nav-item nav-link">A propos</a>
                        <a href="#choose-us" className="nav-item nav-link">Why Choose Us</a>
                    </div>
                    <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal">
                        <i className="fa fa-search"></i>
                    </button>
                    <a href="#contact-us" className="btn btn-primary py-2 px-4 ms-3">Contact Us</a>
                </div>
            </nav>

            <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src="/img/team-building.png" alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: '900px' }}>
                                <h5 className="text-white text-uppercase mb-3 animated slideInDown">Business Excellence</h5>
                                <h1 className="display-1 text-white mb-md-4 animated zoomIn">Naviguer dans le paysage des affaires</h1>
                                {/* <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a> */}
                                <a href="#about-us" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src="/img/digital-marketing-notepad-various-business-papers-brown-background_274234-4085-1920w.png" alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: '900px' }}>
                                <h5 className="text-white text-uppercase mb-3 animated slideInDown">Business Growth</h5>
                                <h1 className="display-1 text-white mb-md-4 animated zoomIn">Tracer sa voie en affaires</h1>
                                <a href="#contact-us" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Contact us</a>
                                {/* <a href="#" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        {/* <!-- Navbar & Carousel End --> */}


        {/* <!-- Full Screen Search Start --> */}
        <div className="modal fade" id="searchModal" tabIndex="-1">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content" style={{ background: 'rgba(9, 30, 62, .7)' }}>
                    <div className="modal-header border-0">
                        <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex align-items-center justify-content-center">
                        <div className="input-group" style={{ maxWidth: '600px' }}>
                            <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword" />
                            <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Full Screen Search End --> */}


        {/* <!-- Facts Start --> */}
        <div className="container-fluid facts py-5 pt-lg-0">
            <div className="container py-5 pt-lg-0">
                <div className="row gx-0">
                    <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                        <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: '150px' }}>
                            <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: '60px', height: '60px' }}>
                                <i className="fa fa-users text-primary"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="text-white mb-0">Happy Clients</h5>
                                <h1 className="text-white mb-0" data-toggle="counter-up">12345</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                        <div className="bg-light shadow d-flex align-items-center justify-content-center p-4" style={{ height: '150px' }}>
                            <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-2" style={{ width: '60px', height: '60px' }}>
                                <i className="fa fa-check text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="text-primary mb-0">Projects Done</h5>
                                <h1 className="mb-0" data-toggle="counter-up">12345</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                        <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: '150px' }}>
                            <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: '60px', height: '60px' }}>
                                <i className="fa fa-award text-primary"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="text-white mb-0">Win Awards</h5>
                                <h1 className="text-white mb-0" data-toggle="counter-up">12345</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Facts End --> */}


        {/* <!-- About Start --> */}
        <div id="about-us" className="section container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-7">
                        <div className="section-title position-relative pb-3 mb-5">
                            <h5 className="fw-bold text-primary text-uppercase">A propos de nous</h5>
                            <h1 className="mb-0">La meilleure solution informatique avec 10 ans d'expérience</h1>
                        </div>
                        <p className="mb-4">DIGILIK est une agence spécialisée dans les métiers relatifs au digital. Elle diffère des agences web et des agences de communication, par sa particularité de réunir plusieurs disciplines et métiers en une seule structure totalement intégrée.</p>
                        <div className="row g-0 mb-3">
                            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                                <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Award Winning</h5>
                                <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Professional Staff</h5>
                            </div>
                            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>24/7 Support</h5>
                                <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Fair Prices</h5>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                            <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: '60px', height: '60px' }}>
                                <i className="fa fa-phone-alt text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="mb-2">Call to ask any question</h5>
                                <h4 className="text-primary mb-0">+012 345 6789</h4>
                            </div>
                        </div>
                        {/* <a href="quote.html" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Request A Quote</a> */}
                    </div>
                    <div className="col-lg-5" style={{ minHeight: '500px' }}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="/img/about.jpg" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}


        {/* <!-- Features Start --> */}
        <div id="choose-us" className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    <h5 className="fw-bold text-primary text-uppercase">Pourquoi Nous Choisir</h5>
                    <h1 className="mb-0">Nous sommes là pour faire croître votre entreprise de manière exponentielle</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4">
                        <div className="row g-5">
                            <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                                <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-cubes text-white"></i>
                                </div>
                                <h4>Les Meilleurs du Secteur</h4>
                                <p className="mb-0">Nous offrons des solutions informatiques de qualité, alliant expertise et innovation, pour garantir à nos clients un avantage concurrentiel.</p>
                            </div>
                            <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                                <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-award text-white"></i>
                                </div>
                                <h4>Récompenses et Distinctions</h4>
                                <p className="mb-0">Nos services et notre engagement envers l'excellence ont été reconnus par de nombreuses récompenses dans l'industrie.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow zoomIn" data-wow-delay="0.9s" style={{ minHeight: '350px' }}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src="/img/feature.jpg" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row g-5">
                            <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                                <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-users-cog text-white"></i>
                                </div>
                                <h4>Équipe Professionnelle</h4>
                                <p className="mb-0">Notre personnel est composé d'experts hautement qualifiés, dédiés à offrir des solutions adaptées aux besoins spécifiques de chaque client.</p>
                            </div>
                            <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                                <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-phone-alt text-white"></i>
                                </div>
                                <h4>Support 24/7</h4>
                                <p className="mb-0">Nous fournissons une assistance continue, disponible 24 heures sur 24 et 7 jours sur 7, pour répondre à toutes vos questions rapidement et efficacement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Features End --> */}

        {/* <!-- Service Start --> */}
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    <h5 className="fw-bold text-primary text-uppercase">Nos Services</h5>
                    <h1 className="mb-0">Des solutions informatiques sur mesure pour le succès de votre entreprise</h1>
                </div>
                <div class="row g-5">
    {/* Service: Cyber Security */}
    <div id="cyber-security" class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
        <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div class="service-icon">
                <i class="fa fa-shield-alt text-white"></i>
            </div>
            <h4 class="mb-3">Cybersécurité
            </h4>
            <p class="m-0">Nous protégeons vos données et systèmes contre les menaces avec des solutions de sécurité robustes et efficaces.</p>
            <a class="btn btn-lg btn-primary rounded" href="">
                <i class="bi bi-arrow-right"></i>
            </a>
        </div>
    </div>

    {/* Service: Data Analytics */}
    <div id="data-analytics" class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
        <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div class="service-icon">
                <i class="fa fa-chart-pie text-white"></i>
            </div>
            <h4 class="mb-3">Analyse de Données</h4>
            <p class="m-0">Exploitez la puissance des données pour prendre des décisions stratégiques grâce à nos services d'analyse avancée.</p>
            <a class="btn btn-lg btn-primary rounded" href="">
                <i class="bi bi-arrow-right"></i>
            </a>
        </div>
    </div>

    {/* Service: Web Development */}
    <div id="web-development" class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
        <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div class="service-icon">
                <i class="fa fa-code text-white"></i>
            </div>
            <h4 class="mb-3">Développement Web</h4>
            <p class="m-0">Nous créons des sites web performants et adaptés à vos besoins, pour renforcer votre présence en ligne.</p>
            <a class="btn btn-lg btn-primary rounded" href="">
                <i class="bi bi-arrow-right"></i>
            </a>
        </div>
    </div>

    {/* Service: Apps Development */}
    <div id="apps-development" class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
        <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div class="service-icon">
                <i class="fab fa-android text-white"></i>
            </div>
            <h4 class="mb-3">Développement d'Applications</h4>
            <p class="m-0">Des applications innovantes et intuitives, conçues pour optimiser votre activité et améliorer l'expérience utilisateur.</p>
            <a class="btn btn-lg btn-primary rounded" href="">
                <i class="bi bi-arrow-right"></i>
            </a>
        </div>
    </div>

    {/* Service: SEO Optimization */}
    <div id="seo-optimization" class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
        <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div class="service-icon">
                <i class="fa fa-search text-white"></i>
            </div>
            <h4 class="mb3">Optimisation SEO</h4>
            <p class="m-0">Augmentez la visibilité de votre site grâce à nos stratégies de référencement optimisées pour les moteurs de recherche.</p>
            <a class="btn btn-lg btn-primary rounded" href="">
                <i class="bi bi-arrow-right"></i>
            </a>
        </div>
    </div>

    {/* Section: Call Us For Quote */}
    <div id="quote" class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
        <div class="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
            <h3 class="text-white mb-3">Appelez-nous pour un devis</h3>
            <p class="text-white mb-3">Contactez-nous pour obtenir un devis personnalisé et découvrir comment nous pouvons répondre à vos besoins.</p>
            <h2 class="text-white mb-0">+012 345 6789</h2>
        </div>
    </div>
</div>

            </div>
        </div>
        {/* <!-- Service End --> */}

       {/* <!-- Devis Début --> */}
        <div id="contact-us" className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-7">
                        <div className="section-title position-relative pb-3 mb-5">
                            <h5 className="fw-bold text-primary text-uppercase">Demande De Devis</h5>
                            <h1 className="mb-0">Besoin d'un devis gratuit ? N'hésitez pas à nous contacter</h1>
                        </div>
                        <div className="row gx-3">
                            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                                <h5 className="mb-4"><i className="fa fa-reply text-primary me-3"></i>Réponse sous 24 heures</h5>
                            </div>
                            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                <h5 className="mb-4"><i className="fa fa-phone-alt text-primary me-3"></i>Assistance téléphonique 24h/24</h5>
                            </div>
                        </div>
                        <p className="mb-4">
                            Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.
                        </p>
                        <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                            <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: '60px', height: '60px' }}>
                                <i className="fa fa-phone-alt text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="mb-2">Appelez pour poser une question</h5>
                                <h4 className="text-primary mb-0">+012 345 6789</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-xl-12">
                                        <input type="text" className="form-control bg-light border-0" placeholder="Votre Nom" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" className="form-control bg-light border-0" placeholder="Votre Email" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12">
                                        <select className="form-select bg-light border-0" style={{ height: '55px' }}>
                                            <option selected>Choisissez un service</option>
                                            <option value="1">Service 1</option>
                                            <option value="2">Service 2</option>
                                            <option value="3">Service 3</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control bg-light border-0" rows="3" placeholder="Message"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-dark w-100 py-3" type="submit">Demander Un Devis</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Devis Fin --> */}



   {/* Testimonial Start */}
   <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                    <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
                    <h1 className="mb-0">What Our Clients Say About Our Digital Services</h1>
                </div>

                {/* Owl Carousel Start */}<div>
                <OwlCarousel 
                    className="owl-theme testimonial-carousel wow fadeInUp" 
                    items={3} 
                    loop 
                    // margin={10} 
                    // nav 
                    data-wow-delay="0.6s"
                >
                    
                    <div className="testimonial-item bg-light my-4 border">
                        <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                            <img className="img-fluid rounded" src="img/testimonial-1.png" alt="Client 1" style={{ width: '80px', height: '80px' }} />
                            <div className="ps-4">
                                <h4 className="text-primary mb-1">Centre elite physio </h4>
                                <small className="text-uppercase">Kinésithérapeute · Thérapeute · Médecine et santé</small>
                            </div>
                        </div>
                        <div className="pt-4 pb-5 px-5">
                            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.
                        </div>
                    </div>
                    <div className="testimonial-item bg-light my-4 border">
                        <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                            <img className="img-fluid rounded" src="img/testimonial-2.jpg" alt="Client 2" style={{ width: '80px', height: '80px' }} />
                            <div className="ps-4">
                                <h4 className="text-primary mb-1">Carré Rouge Marrakech</h4>
                                <small className="text-uppercase">Restaurant</small>
                            </div>
                        </div>
                        <div className="pt-4 pb-5 px-5">
                            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.
                        </div>
                    </div>
                    <div className="testimonial-item bg-light my-4 border">
                        <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                            <img className="img-fluid rounded" src="img/testimonial-3.jpg" alt="Client 3" style={{ width: '80px', height: '80px' }} />
                            <div className="ps-4">
                                <h4 className="text-primary mb-1">Beauty MED Center MAROC </h4>
                                <small className="text-uppercase">Soins dermotechnology.</small>
                            </div>
                        </div>
                        <div className="pt-4 pb-5 px-5">
                            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.
                        </div>
                    </div>
                    <div className="testimonial-item bg-light my-4 border">
                        <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                            <img className="img-fluid rounded" src="img/testimonial-4.jpg" alt="Client 4" style={{ width: '80px', height: '80px' }} />
                            <div className="ps-4">
                                <h4 className="text-primary mb-1">Centre Epilova </h4>
                                <small className="text-uppercase">Service d’épilation au laser · Service de soins de la peau</small>
                            </div>
                        </div>
                        <div className="pt-4 pb-5 px-5">
                            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.
                        </div>
                    </div>
                    <div className="testimonial-item bg-light my-4 border">
                        <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                            <img className="img-fluid rounded" src="img/testimonial-5.jpg" alt="Client 4" style={{ width: '80px', height: '80px' }} />
                            <div className="ps-4">
                                <h4 className="text-primary mb-1">Sofa Design  </h4>
                                <small className="text-uppercase">Magasin de vente des articles de décoration</small>
                            </div>
                        </div>
                        <div className="pt-4 pb-5 px-5">
                            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.
                        </div>
                    </div>
                    <div className="testimonial-item bg-light my-4 border">
                        <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                            <img className="img-fluid rounded" src="img/testimonial-6.jpg" alt="Client 4" style={{ width: '80px', height: '80px' }} />
                            <div className="ps-4">
                                <h4 className="text-primary mb-1">Nouni Marrakech </h4>
                                <small className="text-uppercase">Magasin de chaussures</small>
                            </div>
                        </div>
                        <div className="pt-4 pb-5 px-5">
                            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.
                        </div>
                    </div>
                    <div className="testimonial-item bg-light my-4 border">
                        <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                            <img className="img-fluid rounded" src="img/testimonial-7.jpg" alt="Client 4" style={{ width: '80px', height: '80px' }} />
                            <div className="ps-4">
                                <h4 className="text-primary mb-1">Cossmy </h4>
                                <small className="text-uppercase">Magasin de vente des produits cosmetiques</small>
                            </div>
                        </div>
                        <div className="pt-4 pb-5 px-5">
                            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.
                        </div>
                    </div>
                    <div className="testimonial-item bg-light my-4 border">
                        <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                            <img className="img-fluid rounded" src="img/testimonial-8.jpg" alt="Client 4" style={{ width: '80px', height: '80px' }} />
                            <div className="ps-4">
                                <h4 className="text-primary mb-1">solo_design_maroc </h4>
                                <small className="text-uppercase">Innovateur en mobilier et décoration</small>
                            </div>
                        </div>
                        <div className="pt-4 pb-5 px-5">
                            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.
                        </div>
                    </div>
                    <div className="testimonial-item bg-light my-4 border">
                        <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                            <img className="img-fluid rounded" src="img/testimonial-9.jpg" alt="Client 4" style={{ width: '80px', height: '80px' }} />
                            <div className="ps-4">
                                <h4 className="text-primary mb-1">Airlod</h4>
                                <small className="text-uppercase">Plateforme de carte de visite numérique</small>
                            </div>
                        </div>
                        <div className="pt-4 pb-5 px-5">
                            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.
                        </div>
                    </div>
                    <div className="testimonial-item bg-light my-4 border">
                        <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                            <img className="img-fluid rounded" src="img/testimonial-10.jpg" alt="Client 4" style={{ width: '80px', height: '80px' }} />
                            <div className="ps-4">
                                <h4 className="text-primary mb-1">The selfie box Maroc </h4>
                                <small className="text-uppercase">Location de photobooths ...</small>
                            </div>
                        </div>
                        <div className="pt-4 pb-5 px-5">
                            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.
                        </div>
                    </div>
                  
                    <div className="testimonial-item bg-light my-4 border">
                        <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                            <img className="img-fluid rounded" src="img/testimonial-11.jpg" alt="Client 4" style={{ width: '80px', height: '80px' }} />
                            <div className="ps-4">
                                <h4 className="text-primary mb-1">Secret Studio Marrakech </h4>
                                <small className="text-uppercase">Services événementiels</small>
                            </div>
                        </div>
                        <div className="pt-4 pb-5 px-5">
                            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.
                        </div>
                    </div>
                    
                </OwlCarousel></div>
                {/* Owl Carousel End */}
            </div>
        </div>
{/* Testimonial End */}




        {/* <!-- Team Start --> */}
        {/* <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    <h5 className="fw-bold text-primary text-uppercase">Team Members</h5>
                    <h1 className="mb-0">Professional Stuffs Ready to Help Your Business</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                        <div className="team-item bg-light rounded overflow-hidden">
                            <div className="team-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="/img/team-1.jpg" alt=""/>
                                <div className="team-social">
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <h4 className="text-primary">Full Name</h4>
                                <p className="text-uppercase m-0">Designation</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                        <div className="team-item bg-light rounded overflow-hidden">
                            <div className="team-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="/img/team-2.jpg" alt=""/>
                                <div className="team-social">
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <h4 className="text-primary">Full Name</h4>
                                <p className="text-uppercase m-0">Designation</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                        <div className="team-item bg-light rounded overflow-hidden">
                            <div className="team-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="/img/team-3.jpg" alt=""/>
                                <div className="team-social">
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <h4 className="text-primary">Full Name</h4>
                                <p className="text-uppercase m-0">Designation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <!-- Team End --> */}


        {/* <!-- Blog Start --> */}
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    <h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
                    <h1 className="mb-0">Read The Latest Articles from Our Blog Post</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                        <div className="blog-item bg-light rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden">
                                <img className="img-fluid" src="/img/blog-1.jpg" alt="Blog 1" />
                                <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                            </div>
                            <div className="p-4">
                                <div className="d-flex mb-3">
                                    <small className="me-3"><i className="far fa-user text-primary me-2"></i>John Doe</small>
                                    <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                </div>
                                <h4 className="mb-3">The Future of Digital Marketing: Trends and Strategies for 2024</h4>
                                <p>Emerging Digital Marketing Trends in 2024 As we approach 2024, the digital marketing landscape is poised for significant transformation driven…</p>
                                <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                        <div className="blog-item bg-light rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden">
                                <img className="img-fluid" src="/img/blog-2.jpg" alt="Blog 2" />
                                <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                            </div>
                            <div className="p-4">
                                <div className="d-flex mb-3">
                                    <small className="me-3"><i className="far fa-user text-primary me-2"></i>John Doe</small>
                                    <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                </div>
                                <h4 className="mb-3">Harnessing the Power of Social Media for Business Growth</h4>
                                <p>Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age…</p>
                                <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                        <div className="blog-item bg-light rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden">
                                <img className="img-fluid" src="/img/blog-3.jpg" alt="Blog 3" />
                                <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                            </div>
                            <div className="p-4">
                                <div className="d-flex mb-3">
                                    <small className="me-3"><i className="far fa-user text-primary me-2"></i>John Doe</small>
                                    <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                </div>
                                <h4 className="mb-3">The Art of Negotiation: Tips for Successful Business Deals
                                </h4>
                                <p>Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age…</p>
                                <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Blog End --> */}


        {/* <!-- Vendor Start --> */}
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5 mb-5">
                <div className="bg-white">
                <div class="vendor-carousel gap-5">
                        <img src="/img/vendor-1.jpg" alt="Vendor 1" />
                        <img src="/img/vendor-3.jpg" alt="Vendor 3" />
                        <img src="/img/vendor-4.jpg" alt="Vendor 4" />
                        <img src="/img/vendor-5.jpg" alt="Vendor 5" />
                        <img src="/img/vendor-6.jpg" alt="Vendor 6" />
                        <img src="/img/vendor-7.jpg" alt="Vendor 7" />
                        <img src="/img/vendor-9.jpg" alt="Vendor 9" />
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Vendor End --> */}


        {/* <!-- Footer Start --> */}
        <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-4 col-md-6 footer-about">
                        <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                            <a href="index.html" className="navbar-brand">
                                <h1 className="m-0 text-white"><i className="fa fa-user-tie me-2"></i>Digilik</h1>
                            </a>
                            <p className="mt-3 mb-4">
                            Rejoignez notre communauté et restez informé des dernières tendances digitales, des conseils exclusifs et des offres spéciales. 
                            Abonnez-vous à notre newsletter pour ne rien manquer .
                            </p>
                            <form action="">
                                <div className="input-group">
                                    <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                                    <button className="btn btn-dark">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6">
                        <div className="row gx-5">
                            <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                    <h3 className="text-light mb-0">Get In Touch</h3>
                                </div>
                                <div className="d-flex mb-2">
                                    {/* <i className="bi bi-geo-alt text-primary me-2"></i>
                                    <p className="mb-0">123 Street, New York, USA</p> */}
                                </div>
                                <div className="d-flex mb-2">
                                    <i className="bi bi-envelope-open text-primary me-2"></i>
                                    <p className="mb-0">info@example.com</p>
                                </div>
                                <div className="d-flex mb-2">
                                    <i className="bi bi-telephone text-primary me-2"></i>
                                    <p className="mb-0">+012 345 67890</p>
                                </div>
                                <div className="d-flex mt-4">
                                    <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                    <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                    <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                    <a className="btn btn-primary btn-square" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                    <h3 className="text-light mb-0">Quick Links</h3>
                                </div>
                                <div className="link-animated d-flex flex-column justify-content-start">
                                    <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                                    <a className="text-light mb-2" href="#about-us"><i className="bi bi-arrow-right text-primary me-2"></i>A propos</a>
                                    <a className="text-light mb-2" href="#choose-us"><i className="bi bi-arrow-right text-primary me-2"></i>Why Choose Us</a>
                                    <a className="text-light mb-2" href="#contact-us"><i className="bi bi-arrow-right text-primary me-2"></i>Contact us</a>
                                   
                                </div>
                            </div>
                            {/* <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                    <h3 className="text-light mb-0">Popular Links</h3>
                                </div>
                                <div className="link-animated d-flex flex-column justify-content-start">
                                    <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                                    <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>A propos</a>
                                    <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                                    <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Meet The Team</a>
                                    <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                                    <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid text-white" style={{ background: '#061429' }}>
            <div className="container text-center">
                <div className="row justify-content-end">
                    <div className="col-lg-8 col-md-6">
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '75px' }}>
                            <p className="mb-0">&copy; <a className="text-white border-bottom" href="#">2024 Digilik Agency</a>. All Rights Reserved. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End --> */}

        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i className="bi bi-arrow-up"></i></a>

    </>

    )
}