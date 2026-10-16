/* =========================================================
   SPACE ESSENCE DESIGN STUDIO
   SIMPLE BUSINESS WEBSITE
   ========================================================= */


/* =========================================================
   1. RESET + BASIC SETTINGS
   ========================================================= */

   * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

html {
   scroll-behavior: smooth;
}

body {
   font-family: Arial, Helvetica, sans-serif;
   background: #0b0b0b;
   color: #f2f2f2;
   line-height: 1.6;
}

a {
   color: inherit;
   text-decoration: none;
}

button,
input,
textarea,
select {
   font: inherit;
}

img {
   max-width: 100%;
   display: block;
}


/* =========================================================
  2. GENERAL LAYOUT
  ========================================================= */

.section {
   width: min(1100px, 92%);
   margin: auto;
   padding: 90px 0;
}

.section-title {
   margin-bottom: 50px;
}

.section-title span {
   display: block;
   margin-bottom: 12px;
   color: #b9a27d;
   font-size: 13px;
   font-weight: bold;
   letter-spacing: 2px;
}

.section-title h2 {
   font-size: clamp(32px, 5vw, 52px);
   line-height: 1.1;
   font-weight: 600;
}


/* =========================================================
  3. HEADER / NAVIGATION
  ========================================================= */

.site-header {
   position: sticky;
   top: 0;
   z-index: 1000;
   background: rgba(11, 11, 11, 0.96);
   border-bottom: 1px solid #222;
}

.navbar {
   width: min(1100px, 92%);
   margin: auto;

   min-height: 75px;

   display: flex;
   align-items: center;
   justify-content: space-between;
}

.brand {
   display: flex;
   align-items: center;
   gap: 12px;
}

.brand-mark {
   width: 42px;
   height: 42px;

   display: flex;
   align-items: center;
   justify-content: center;

   border: 1px solid #b9a27d;

   color: #b9a27d;
   font-size: 13px;
   font-weight: bold;
   letter-spacing: 1px;
}

.brand-text {
   display: flex;
   flex-direction: column;
}

.brand-text strong {
   font-size: 16px;
   font-weight: 600;
}

.brand-text span {
   color: #999;
   font-size: 12px;
}


/* NAV LINKS */

.nav-links {
   list-style: none;

   display: flex;
   align-items: center;
   gap: 28px;
}

.nav-links a {
   color: #ccc;
   font-size: 14px;

   transition: color 0.2s ease;
}

.nav-links a:hover {
   color: #b9a27d;
}


/* MOBILE MENU BUTTON */

.menu-toggle {
   display: none;

   background: none;
   border: none;

   width: 40px;
   height: 40px;

   cursor: pointer;
}

.menu-toggle span {
   display: block;

   width: 24px;
   height: 2px;

   margin: 5px auto;

   background: #f2f2f2;
}


/* =========================================================
  4. HOME
  ========================================================= */

.home {
   min-height: 75vh;

   display: flex;
   align-items: center;

   border-bottom: 1px solid #222;
}

.home-content {
   max-width: 780px;
}

.small-heading {
   color: #b9a27d;

   font-size: 13px;
   font-weight: bold;

   letter-spacing: 1.5px;

   margin-bottom: 25px;
}

.home h1 {
   font-size: clamp(45px, 8vw, 82px);

   line-height: 1.02;

   font-weight: 600;

   margin-bottom: 25px;
}

.home h1 span {
   color: #b9a27d;
}

.tagline {
   font-size: clamp(22px, 4vw, 32px);

   color: #ddd;

   margin-bottom: 20px;
}

.home-description {
   max-width: 650px;

   color: #999;

   font-size: 16px;
}


/* HOME BUTTONS */

.home-buttons {
   display: flex;
   gap: 15px;

   margin-top: 35px;

   flex-wrap: wrap;
}


/* =========================================================
  5. BUTTONS
  ========================================================= */

.btn {
   display: inline-flex;

   align-items: center;
   justify-content: center;

   min-height: 48px;

   padding: 0 24px;

   border: 1px solid #b9a27d;

   font-size: 14px;
   font-weight: bold;

   cursor: pointer;

   transition:
       background 0.2s ease,
       color 0.2s ease;
}

.btn-primary {
   background: #b9a27d;
   color: #0b0b0b;
}

.btn-primary:hover {
   background: #d1bc99;
}

.btn-secondary {
   color: #b9a27d;
   background: transparent;
}

.btn-secondary:hover {
   background: #b9a27d;
   color: #0b0b0b;
}


/* =========================================================
  6. ABOUT
  ========================================================= */

.about {
   border-bottom: 1px solid #222;
}

.about-content {
   display: grid;

   grid-template-columns: 1.5fr 1fr;

   gap: 70px;

   align-items: start;
}

.large-text {
   font-size: 25px;

   line-height: 1.45;

   color: #ddd;

   margin-bottom: 25px;
}

.about-main p:not(.large-text) {
   color: #999;

   max-width: 650px;
}


/* ABOUT BOX */

.about-box {
   border: 1px solid #292929;

   background: #111;

   padding: 35px;
}

.about-box span {
   display: block;

   color: #b9a27d;

   font-size: 12px;

   font-weight: bold;

   letter-spacing: 2px;

   margin-bottom: 20px;
}

.about-box h3 {
   font-size: 30px;

   line-height: 1.35;

   font-weight: 500;
}


/* =========================================================
  7. SERVICES
  ========================================================= */

.services {
   border-bottom: 1px solid #222;
}

.services-grid {
   display: grid;

   grid-template-columns: repeat(2, 1fr);

   border-top: 1px solid #292929;
   border-left: 1px solid #292929;
}

.service-card {
   min-height: 230px;

   padding: 30px;

   border-right: 1px solid #292929;
   border-bottom: 1px solid #292929;

   transition: background 0.2s ease;
}

.service-card:hover {
   background: #121212;
}

.service-card > span {
   display: block;

   color: #b9a27d;

   font-size: 13px;

   font-weight: bold;

   margin-bottom: 25px;
}

.service-card h3 {
   font-size: 23px;

   font-weight: 500;

   margin-bottom: 12px;
}

.service-card p {
   color: #999;

   max-width: 450px;
}


/* =========================================================
  8. TEAM
  ========================================================= */

.team {
   border-bottom: 1px solid #222;
}

.team-grid {
   display: grid;

   grid-template-columns: repeat(3, 1fr);

   gap: 20px;
}

.team-card {
   background: #111;

   border: 1px solid #292929;

   padding: 30px;
}

.team-role {
   display: block;

   color: #b9a27d;

   font-size: 13px;

   font-weight: bold;

   letter-spacing: 2px;

   margin-bottom: 20px;
}

.team-card h3 {
   font-size: 24px;

   font-weight: 500;

   margin-bottom: 5px;
}

.team-card p {
   color: #888;

   margin-bottom: 20px;
}

.team-card a {
   color: #b9a27d;

   font-size: 14px;
}

.team-card a:hover {
   text-decoration: underline;
}


/* =========================================================
  9. CONTACT
  ========================================================= */

.contact {
   border-bottom: 1px solid #222;
}

.contact-grid {
   display: grid;

   grid-template-columns: 1fr 1fr;

   gap: 70px;
}

.contact-info h3 {
   font-size: 30px;

   font-weight: 500;

   margin-bottom: 15px;
}

.contact-info > p {
   color: #999;

   margin-bottom: 40px;

   max-width: 500px;
}

.contact-item {
   margin-bottom: 30px;
}

.contact-item span {
   display: block;

   color: #b9a27d;

   font-size: 12px;

   font-weight: bold;

   letter-spacing: 2px;

   margin-bottom: 8px;
}

.contact-item p,
.contact-item a {
   color: #ccc;

   display: block;

   margin-bottom: 5px;
}

.contact-item a:hover {
   color: #b9a27d;
}


/* =========================================================
  10. CONTACT FORM
  ========================================================= */

.contact-form-box {
   background: #111;

   border: 1px solid #292929;

   padding: 30px;
}

.form-group {
   margin-bottom: 20px;
}

.form-group label {
   display: block;

   color: #ccc;

   font-size: 13px;

   margin-bottom: 8px;
}

.form-group input,
.form-group select,
.form-group textarea {
   width: 100%;

   background: #0b0b0b;

   border: 1px solid #333;

   color: #eee;

   padding: 13px 14px;

   outline: none;

   border-radius: 0;

   transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
   border-color: #b9a27d;
}

.form-group textarea {
   resize: vertical;

   min-height: 130px;
}

.form-group select {
   cursor: pointer;
}

.form-status {
   margin-top: 15px;

   color: #b9a27d;

   font-size: 13px;
}


/* =========================================================
  11. FINAL MESSAGE
  ========================================================= */

.final-message {
   width: min(900px, 92%);

   margin: auto;

   padding: 100px 0;

   text-align: center;
}

.final-message p {
   color: #b9a27d;

   font-size: 13px;

   font-weight: bold;

   letter-spacing: 2px;

   margin-bottom: 20px;
}

.final-message h2 {
   font-size: clamp(30px, 6vw, 55px);

   line-height: 1.15;

   font-weight: 500;

   margin-bottom: 30px;
}


/* =========================================================
  12. FOOTER
  ========================================================= */

.site-footer {
   border-top: 1px solid #222;

   background: #080808;
}

.footer-content {
   width: min(1100px, 92%);

   margin: auto;

   padding: 45px 0;

   display: grid;

   grid-template-columns: 1fr 1fr 1fr;

   gap: 30px;

   align-items: center;
}

.footer-content strong {
   display: block;

   font-size: 17px;
}

.footer-content span {
   color: #888;

   font-size: 13px;
}

.footer-content > p {
   color: #888;

   text-align: center;
}

.footer-links {
   display: flex;

   justify-content: flex-end;

   flex-wrap: wrap;

   gap: 15px;
}

.footer-links a {
   color: #888;

   font-size: 13px;
}

.footer-links a:hover {
   color: #b9a27d;
}


/* FOOTER BOTTOM */

.footer-bottom {
   width: min(1100px, 92%);

   margin: auto;

   padding: 20px 0;

   border-top: 1px solid #222;

   display: flex;

   justify-content: space-between;

   gap: 20px;
}

.footer-bottom p,
.footer-bottom a {
   color: #666;

   font-size: 12px;
}

.footer-bottom a:hover {
   color: #b9a27d;
}


/* =========================================================
  13. TABLET
  ========================================================= */

@media (max-width: 850px) {

   .about-content,
   .contact-grid {
       grid-template-columns: 1fr;

       gap: 40px;
   }

   .team-grid {
       grid-template-columns: 1fr 1fr;
   }

   .footer-content {
       grid-template-columns: 1fr;

       text-align: center;
   }

   .footer-content > p {
       text-align: center;
   }

   .footer-links {
       justify-content: center;
   }

}


/* =========================================================
  14. MOBILE
  ========================================================= */

@media (max-width: 650px) {

   .section {
       padding: 65px 0;
   }


   /* MOBILE NAV */

   .menu-toggle {
       display: block;
   }

   .nav-links {
       display: none;

       position: absolute;

       top: 75px;
       left: 0;

       width: 100%;

       background: #0b0b0b;

       border-bottom: 1px solid #222;

       padding: 20px;

       flex-direction: column;

       align-items: flex-start;

       gap: 0;
   }

   .nav-links.active {
       display: flex;
   }

   .nav-links li {
       width: 100%;
   }

   .nav-links a {
       display: block;

       width: 100%;

       padding: 14px 5%;

       border-bottom: 1px solid #222;
   }


   /* HOME */

   .home {
       min-height: 70vh;
   }

   .home h1 {
       font-size: 48px;
   }

   .home-buttons {
       flex-direction: column;
   }

   .home-buttons .btn {
       width: 100%;
   }


   /* SERVICES */

   .services-grid {
       grid-template-columns: 1fr;
   }


   /* TEAM */

   .team-grid {
       grid-template-columns: 1fr;
   }


   /* CONTACT */

   .contact-form-box {
       padding: 22px;
   }


   /* FOOTER */

   .footer-bottom {
       flex-direction: column;

       text-align: center;

       align-items: center;
   }

}


/* =========================================================
  15. SMALL PHONES
  ========================================================= */

@media (max-width: 400px) {

   .home h1 {
       font-size: 40px;
   }

   .tagline {
       font-size: 22px;
   }

   .brand-text strong {
       font-size: 14px;
   }

   .brand-mark {
       width: 38px;
       height: 38px;
   }

}