export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)

    const formato = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    }

    return fechaNueva.toLocaleDateString('es-ES', formato)
}

