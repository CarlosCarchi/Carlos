document.addEventListener('DOMContentLoaded', function () {
    // Referencias a elementos del DOM
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.querySelector('.close-modal');
    const projectButtons = document.querySelectorAll('.project-details-btn');
    const profileImage = document.getElementById('profile-image');
    const presentationVideo = document.getElementById('presentation-video');

  

    // Funcionalidad para el modal de proyectos
    projectButtons.forEach(button => {
        button.addEventListener('click', function () {
            const projectId = this.getAttribute('data-project');
            showProjectDetails(projectId);
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Función para mostrar detalles de proyectos
    function showProjectDetails(projectId) {
        let content = '';

        switch (projectId) {
            case 'project1':
                content = `
                    <h2>Desarrollo de un sistema informático para el cobro de tarifas en transporte público del cantón Daule.</h2>
                    <div class="project-details">
                        <div class="project-info">
                            <p><strong>Año:</strong> 2024</p>
                            
                            <p><strong>Equipo:</strong> 3 desarrolladores</p>
                            <p><strong>Rol:</strong> Documentacion</p>
                            <p><strong>Tecnologías:</strong> java y nfc</p>
                        </div>
                        <div class="project-description">
                            <h3>Descripción</h3>
                            <p>El proyecto consistió en el desarrollo de un sistema informático para el cobro automatizado de tarifas en el transporte público del cantón Daule, utilizando tecnología NFC. Este sistema permitió a los usuarios realizar pagos de forma rápida y segura mediante tarjetas o dispositivos móviles, reduciendo el uso de efectivo y mejorando la eficiencia del servicio.</p>
                            <ul>
                             
                            <p><strong>Usos</strong> </p>
                                <li>Procesar pagos automáticos mediante tecnología NFC con tarjetas o dispositivos móviles.</li>
                                <li>Registrar y validar transacciones en tiempo real dentro de las unidades de transporte.</li>
                                <li>Generar reportes de cobros y movimientos para control administrativo.</li>
                                <li>Reducir el manejo de efectivo, mejorando la seguridad y eficiencia del servicio.</li>
                                
                            </ul>
                            
                            
                        </div>
                    </div>
                `;
                break;
            case 'project2':
                content = `
                    <h2>Desarrollo de un módulo web de facturación incluido la gestión de pedidos mediante una aplicación móvil para restaurantes.</h2>
                    <div class="project-details">
                        <div class="project-info">
                            <p><strong>Año:</strong> 2024</p>
                            
                            <p><strong>Equipo:</strong> 3 desarrolladores</p>
                            <p><strong>Rol:</strong> Documentacion</p>
                            <p><strong>Tecnologías:</strong> React, django, CSS , html</p>
                        </div>
                        <div class="project-description">
                            <h3>Descripción</h3>
                            <p>Participé en el desarrollo del frontend de una tienda en línea para una marca de ropa. El proyecto incluyóahora de este El proyecto consistió en el desarrollo de un módulo web de facturación y la gestión de pedidos mediante una aplicación móvil dirigida a restaurantes. Se implementaron tecnologías como Django para el backend, Node.js y JavaScript en la lógica del sistema, React para la interfaz de usuario, y la librería Lodash para optimizar funciones en el desarrollo.:</p>
                            <ul>
                                <li>Generación y gestión de facturas desde una plataforma web</li>
                                <li>Desarrollo de aplicación móvil para toma de pedidos en tiempo real</li>
                                <li>Sincronización entre pedidos, cocina y atención al cliente</li>
                                <li>Uso de tecnologías como Django, Node.js y React para optimizar el sistema</li>

                            </ul>
                            
                        </div>
                    </div>
                `;
                break;
            case 'project3':
                content = `
                    <h2>Portal Educativo</h2>
                    <div class="project-details">
                        <div class="project-info">
                            <p><strong>Año:</strong> 2021</p>
                            <p><strong>Duración:</strong> 5 meses</p>
                            <p><strong>Equipo:</strong> 4 desarrolladores</p>
                            <p><strong>Rol:</strong> Desarrollador Backend</p>
                            <p><strong>Tecnologías:</strong> Node.js, Express, MongoDB, Socket.io, AWS S3</p>
                        </div>
                        <div class="project-description">
                            <h3>Descripción</h3>
                            <p>Desarrollé la API RESTful para un portal educativo que permite a los estudiantes acceder a cursos en línea. El sistema incluye:</p>
                            <ul>
                                <li>Autenticación y autorización de usuarios</li>
                                <li>Sistema de gestión de contenido educativo</li>
                                <li>Módulo de exámenes y evaluaciones</li>
                                <li>Chat en tiempo real para consultas</li>
                                <li>Almacenamiento y streaming de videos educativos</li>
                            </ul>
                            <h3>Logros</h3>
                            <ul>
                                <li>Desarrollo de una arquitectura escalable</li>
                                <li>Implementación de un sistema de caché para mejorar el rendimiento</li>
                                <li>Creación de un sistema de notificaciones en tiempo real</li>
                                <li>Optimización del almacenamiento y entrega de contenido multimedia</li>
                            </ul>
                        </div>
                    </div>
                `;
                break;
            default:
                content = '<h2>Información no disponible</h2>';
        }

        modalContent.innerHTML = content;
    }

    // Función para cargar la imagen de perfil
    function handleProfileImage() {
        // Aquí puedes implementar la lógica para cargar una imagen desde el sistema de archivos
        // Por ahora, usamos una imagen de placeholder
        profileImage.src = 'placeholder-profile.jpg';

        // Ejemplo de cómo permitir al usuario cargar su propia imagen
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.style.display = 'none';

        fileInput.addEventListener('change', function (event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    profileImage.src = e.target.result;
                    // Aquí podrías implementar lógica para guardar la imagen
                };
                reader.readAsDataURL(file);
            }
        });

        document.body.appendChild(fileInput);

        // Permitir que al hacer clic en la imagen se abra el selector de archivos
        profileImage.addEventListener('click', function () {
            fileInput.click();
        });
        profileImage.style.cursor = 'pointer';
    }

    // Inicializar funciones
    handleProfileImage();

    // Añadir tooltip para indicar que se puede cambiar la imagen
    profileImage.title = 'Haz clic para cambiar tu foto de perfil';

    // Animación para elementos al cargar la página
    const animateElements = () => {
        const sections = document.querySelectorAll('.section');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 200 * index);
        });
    };

    // Aplicar estilos iniciales para la animación
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Ejecutar animación después de un breve retraso
    setTimeout(animateElements, 300);
});