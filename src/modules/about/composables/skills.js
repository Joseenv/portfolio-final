import { ref } from "vue";

export function useSkills () {
    const technicalSkills = ref([
        {
            name: 'HTML',
            icon: 'Club de Nutrición M&A',
        },
        {
            name: 'CSS',
            icon: 'Club de Nutrición M&A',
        },
        {
            name: 'JavaScript',
            icon: 'Club de Nutrición M&A',
        },
        {
            name: 'Vue.js',
            icon: 'Club de Nutrición M&A',
        },
        {
            name: 'Vuex',
            icon: 'Club de Nutrición M&A',
        },
        {
            name: 'Pinia',
            icon: 'Club de Nutrición M&A',
        },
        {
            name: 'Vue Router',
            icon: 'Club de Nutrición M&A',
        },
        {
            name: 'Nuxt',
            icon: 'Club de Nutrición M&A',
        },
        {
            name: 'Git',
            icon: 'Club de Nutrición M&A',
        },
        {
            name: 'GitHub',
            icon: 'Club de Nutrición M&A',
        },
    ])

    const softSkills = ref([
        'Adaptación', 'Liderazgo', 'Trabajo en equipo', 'Resolución de problemas', 'Comunicación asertiva', 'Empatía'
    ])

    return {
        technicalSkills,
        softSkills
    }
}