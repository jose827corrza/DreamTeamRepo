import React from 'react';
 
 
class Footer extends React.Component {
 
  render() {
 
    return (
 
        <footer className="container">
            <p className="float-right"><a href="#">Subir</a></p>
            <p>&copy; {(new Date().getFullYear())} DreamTeam, Inc. &middot; <a href="#">Política de Privacidad</a> &middot; <a href="#">Términos</a></p>
            <p>Patrocinado<a href="https://www.misiontic2022.gov.co/portal/"><img src="./img/mision_tic_2022.png" alt="MDN"/></a></p>
        </footer>
 
    )
    
  }
 
}
 
export default Footer;