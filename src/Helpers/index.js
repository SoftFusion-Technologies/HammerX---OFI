export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha+ 'T00:00:00');

    const formato = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return fechaNueva.toLocaleDateString('es-ES', formato)
}

