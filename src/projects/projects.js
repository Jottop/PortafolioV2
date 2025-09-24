import AstroIcon from "@/components/icons/AstroIcon.astro";
import ReactIcon from "@/components/icons/ReactIcon.astro";
import ViteIcon from "@/components/icons/ViteIcon.astro";
import pokedex from "@/assets/img/pokedex.webp";
import Kekoncurso from "@/assets/img/kekoncursillo.webp";


const stackColors = {
    Vite: "#646CFF",
    React: "#61DAFB",
    Astro: "#FF5F7F"
}

export const projects =
    [
        {
            name: "Kekoncurso",
            imageSRC: Kekoncurso.src,
            link: "https://kekoncurso.netlify.app/",
            descriptions:
                [
                    'Sitio web inspirado en el programa "¿Quién quiere ser millonario?", desarrollado para la realización de concursos durante transmisiones en vivo en la plataforma Twitch.',
                    'Cuenta con una vista diseñada para la transmisión y un panel de control para la gestión de preguntas, ambos conectados en tiempo real mediante WebSockets.'
                ]
            ,
            stacks:
                [
                    {
                        name: "Vite",
                        SVG: ViteIcon,
                        color: stackColors.Vite
                    },
                    {
                        name: "React",
                        SVG: ReactIcon,
                        color: stackColors.React
                    },
                ],
        },
        {
            name: "Pokédex",
            imageSRC: pokedex.src,
            link: "https://appweb-pokedex.netlify.app/",
            descriptions:
                [
                    "Sitio web que recrea la Pokédex del universo Pokémon con un diseño personalizado, utilizando la API de PokeAPI.",
                    "Permite realizar búsquedas por nombre o número de Pokémon, y visualizar información detallada junto con sus estadísticas."
                ]
            ,
            stacks:
                [
                    {
                        name: "Astro",
                        SVG: AstroIcon,
                        color: stackColors.Astro
                    },
                    {
                        name: "React",
                        SVG: ReactIcon,
                        color: stackColors.React
                    },
                ],
        }
    ]