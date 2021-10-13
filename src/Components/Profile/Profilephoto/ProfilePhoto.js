import './ProfilePhoto.css'
import myimage from './My-image.jpg'
export default function Photo() {
    return(
        <div>
            <img src={myimage} alt='this ie me'></img>
        </div>
    );
}