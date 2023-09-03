import ReactPlayer from 'react-player/youtube'

export default function Video({ url }) {
    return (    
        <ReactPlayer url={url} controls={true} />
    );
}