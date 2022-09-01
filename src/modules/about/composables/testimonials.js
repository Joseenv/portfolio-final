import { ref } from "vue";

export function useTestimonials () {
    const testimonials = ref([
        {
            name: 'Victor Yovera',
            company: 'Club de Nutrición M&A',
            content: '“Trabajar con Jose ha sido una grata experiencia, logramos construir una página que diera a conocer más del Club de Nutrición M&A, estoy muy contento con el resultado.”',
            photo: './img/victor-yovera.webp'
        },
        {
            name: 'Pedro Reategui',
            company: 'Solutions Pack Perú (SPPSAC)',
            content: '“Fue un gusto poder compartir conocimientos y experiencias con Jose. Su integración con el equipo fue rápida y se adaptó muy bien a los cambios, aportando mucho al proyecto.”',
            photo: './img/pedro-reategui.webp'
        },
    ])

    return {
        testimonials
    }
} 