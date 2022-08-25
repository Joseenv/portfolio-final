import { ref } from "vue";

export function useEntries () {
    const entries = ref([
        {
            title: 'Universidad Nacional Tecnológica de Lima Sur',
            descriptions: [
                'Bachiller en Ingeniería de Sistemas',
                'Inglés A-1'
            ],
            icon: 'src/assets/img/study-icon.svg'
        },
        {
            title: 'Freelance: Club de Nutrición M & A',
            descriptions: [
                'Diseño y desarrollo de una Landing Page para el club',
                'Diseño y desarrollo de un E-commerce para el club'
            ],
            icon: 'src/assets/img/work-icon.svg'
        },
        {
            title: 'Solutions Pack Perú (SPPSAC)',
            descriptions: [
                'Diseño y desarrollo de un sistema ERP para la agencia de publicidad Ka&O Films, el cual facilitó, en gran manera, el control financiero',
            ],
            icon: 'src/assets/img/work-icon.svg'
        },
    ])

    return {
        entries
    }
} 