import ReactPlayer from 'react-player/youtube'

export default function Video({ src }) {
    return (    
        <video class="w-full h-full" controls autoplay="" transition:persist>
            <source src={src} type="video/mp4" />
        </video>
    );
}