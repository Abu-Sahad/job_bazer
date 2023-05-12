import images from '../../../image/error.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='notfound-img'>
            <img src={images} alt="" />
        </div>
    );
};

export default NotFound;