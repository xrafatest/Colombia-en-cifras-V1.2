class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar">
            <div class="logo">
                <div class="logo">
                    <a href="/index.html">
                        <img src="/Media/logo.png" alt="Inicio_Logo" height="80px" width="80px">
                    </a>
                    <p class="Titulo">Pulso Seguro Colombia</p>
                </div>
                <input type="search" name="searh" class="searh" placeholder="Buscar">
            </div>
            <button class="menu-toggle" aria-label="Toggle menu">☰</button>
            <div class="bnm-2">
                <ul>
                    <li><a href="/index.html">Inicio</a></li>
                    <li><a>Sobre Nosotros</a>
                    <ul>
                        <li><a href="/Views/Sobre Nosotros/Quienes_Somos.html">Quienes Somos</a></li>
                        <li><a href="/Views/Sobre Nosotros/Mision_Vision.html">Mision Y Vision</a></li>
                        <li><a href="/Views/Sobre Nosotros/Nuestro_Procedimiento.html">Nuestro Procedimiento</a></li>
                    </ul>
                    </li>
                    <li><a href="/Views/Delitos/Delitos.html">Delitos</a>
                    <ul>
                        <li><a>Tipos de delitos</a>
                            <ul class="grid-menu">
                                <li><a href="/Views/Delitos/Tipos/Abigeato.html">Abigeato</a></li>
                                <li><a href="/Views/Delitos/Tipos/Amenaza.html">Amenazas</a></li>
                                <li><a href="/Views/Delitos/Tipos/Delitos Sexuales.html">Delitos Sexuales</a></li>
                                <li><a href="/Views/Delitos/Tipos/Extorcion.html">Extorcion</a></li>
                                <li><a href="/Views/Delitos/Tipos/Homicidio Accidentes.html">Homicidio en accidentes</a></li>
                                <li><a href="/Views/Delitos/Tipos/Homicidio.html">Homicidio</a></li>
                                <li><a href="/Views/Delitos/Tipos/Hurto Automotores.html">Hurto Automotores</a></li>
                                <li><a href="/Views/Delitos/Tipos/Hurto Entidades Comerciales.html">Hurto Entidades Comerciales</a></li>
                                <li><a href="/Views/Delitos/Tipos/Hurto Entidades Financieras.html">Hurto Entidades Financieras</a></li>
                            </ul>
                            <ul class="grid-menu-2">
                                <li><a href="/Views/Delitos/Tipos/Hurto Motocicletas.html">Hurto Motocicletas</a></li>
                                <li><a href="/Views/Delitos/Tipos/Hurto Personas.html">Hurto a Personas</a></li>
                                <li><a href="/Views/Delitos/Tipos/Hurto Residencias.html">Hurto a Residencias</a></li>
                                <li><a href="/Views/Delitos/Tipos/Lesiones Accidentes de Trafico.html">Lesiones Accidentes de Trafico</a></li>
                                <li><a href="/Views/Delitos/Tipos/Lesiones Personales.html">Lesiones Personales</a></li>
                                <li><a href="/Views/Delitos/Tipos/Pirateria Terrestre.html">Pirateria Terrestre</a></li>
                                <li><a href="/Views/Delitos/Tipos/Secuestro.html">Secuestro</a></li>
                                <li><a href="/Views/Delitos/Tipos/Terrorismo.html">Terrorismo</a></li>
                                <li><a href="/Views/Delitos/Tipos/Violencia Intrafamiliar.html">Violencia Intrafamiliar</a></li>
                            </ul>
                        </li>
                        <li><a href="/Views/Delitos/Estadisticas.html">Estadisticas</a></li>
                    </ul>
                    </li>
                    <li><a href="/Views/Periodos/Periodos.html">Periodos</a>
                    <ul>
                        <li><a href="/Views/Periodos/2018 - 2022.html">2018 - 2022</a></li>
                        <li><a href="/Views/Periodos/2022 - 2026.html">2022 - 2026</a></li>
                    </ul>
                    </li>
                    <li><a href="/Views/Mapa_Interactivo.html">Mapa Interactivo</a></li>
                    <li><a href="/Views/Recursos.html">Recursos</a></li>
                    <li><a href="/Views/FAQ.html">FAQ</a></li>
                    <li><a href="/Views/Contactanos.html">Contactanos</a></li>
                    <li><a href="/Views/autenticacion/login.html">Inicia sesion</a></li>
                </ul>
            </div>
        </nav>
        `;
    }
}

class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <div class="footer-content">
        <table class="footer-table">
            <tr>
                <td>
                    <h3>Navegación</h3>
                    <ul>
                        <li><a href="/index.html">Inicio</a></li>
                        <li><a href="/Views/Sobre Nosotros/Quienes_Somos.html">Quiénes Somos</a></li>
                        <li><a href="/Views/Sobre Nosotros/Mision_Vision.html">Misión Y Vision</a></li>
                        <li><a href="/Views/Periodos/Periodos.html">Periodos</a></li>
                        <li><a href="/Views/Mapa_Interactivo.html">Mapa Interactivo</a></li>
                    </ul>
                </td>
                <td>
                    <h3>Periodos</h3>
                    <ul>
                        <li><a href="/Views/Periodos/2018 - 2022.html">2018-2022</a></li>
                        <li><a href="/Views/Periodos/2022 - 2026.html">2022-2024</a></li>
                    </ul>
                    <h3>Análisis</h3>
                    <ul>
                        <li><a href="/Views/Delitos.html">Por Delito</a></li>
                        <li><a href="/Views/Recursos.html">Recursos</a></li>
                        <li><a href="/Views/FAQ.html">FAQ</a></li>
                    </ul>
                </td>
                <td>
                    <h3>Contacto</h3>
                    <p>Email: info@pulsoseguro.co</p>
                    <p>Teléfono: (57) 1234567890</p>
                    <a href="/Views/Contactanos.html">Formulario de Contacto</a>
                  
                </td>
            </tr>
        </table>
    </div>

    <div class="footer-bottom">
        <p>&copy; 2024 PulsoSeguro Colombia. Todos los derechos reservados.</p>
    </div>
    <div class="sena-logo">
            <img src="/Media/logoSena.png" alt="Logo SENA" width="50" height="50">
    </div>
        `;
    }
}

customElements.define('custom-header', CustomHeader);
customElements.define('custom-footer', CustomFooter);
