import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { listMangas } from '../../config/mangas';

export default function Video({ closable = false }) {
    const [id, setId] = useState('')

    const videoRef = useRef();

    const isMangasPath = (path) => {
        return path.includes('mangas/')
    }

    const getId = (path) => {
        const parts = path.split('/')
        return parts[2]
    }

    useEffect(() => { 
        
        if(isMangasPath(window.location.pathname) && id === '') {
            setId(getId(window.location.pathname))
            videoRef.current?.load()
        }

        const onPageChange = () => {
            const newPath = window.location.pathname
            if(isMangasPath(newPath) && getId(newPath) !== id) {
                setId(getId(newPath))
                videoRef.current?.load()
            }
        }

        document.addEventListener('astro:after-swap', onPageChange)

        return () => {
            window.removeEventListener('astro:after-swap', onPageChange);
        }
    })

    return (    
        <div class="relative group w-full h-full">
            {closable && (<button 
                class="hidden group-hover:block absolute z-10 right-2 px-2 text-white font-bold bg-black/30 hover:bg-black rounded-lg" 
                onClick={() => {
                    
                }}
            >
                X
            </button>)}
            {listMangas[id] && (
                <video ref={videoRef} class="w-full h-full" controls autoplay="">
                    <source src={listMangas[id].opening} type="video/mp4" />
                </video>
            )}
        </div>
        
    );
}