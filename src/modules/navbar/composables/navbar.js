import { ref } from "vue";

export function useNavbar () {
    const items = ref([
        {
            name: 'Inicio',
            route: { name: 'home' },
            iconDefault: "./icons/home.svg",
            iconActive: "./icons/home-active.svg"
        },
        {
            name: 'Sobre mí',
            route: { name: 'about' },
            iconDefault: "./icons/about.svg",
            iconActive: "./icons/about-active.svg",
        },
        {
            name: 'Trabajos',
            route: { name: 'works' },
            iconDefault: "./icons/works.svg",
            iconActive: "./icons/works-active.svg",
        },
        {
            name: 'Contacto',
            route: { name: 'contact' },
            iconDefault: "./icons/contact.svg",
            iconActive: "./icons/contact-active.svg",
        },
    ])

    return {
        items
    }
}