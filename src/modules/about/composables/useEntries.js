import { ref } from "vue";

export function useNavbar () {
    const entries = ref([
        {
            title: 'Universidad Nacional Tecnológica de Lima Sur',
            descriptions: [
                'Bachiller en Ingeniería de Sistemas',
                'Inglés A-1'
            ],
            icon: ''
        },
        {
            title: 'Freelance: Club de Nutrición M & A',
            descriptions: [
                'Diseño y desarrollo de una Landing Page para el club',
                'Diseño y desarrollo de un E-commerce para el club'
            ],
            icon: ''
        },
        {
            title: 'Solutions Pack Perú (SPPSAC)',
            descriptions: [
                'Diseño y desarrollo de un sistema ERP para la agencia de publicidad Kaos',
            ],
            icon: ''
        },
    ])

    return {
        entries
    }
} 