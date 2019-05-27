import { string } from 'prop-types';

const propTypes = {
    imageUrl: string,
}

const defaultProps = {
    card: {
        imageUrl: '/static/images/logo.png'
    }
}

const ProductCardSlider = ({ card, slider}) => {
    const {imageUrl} = card;
    return (
        <div>
            <div>
                <img href={imageUrl} />
            </div>
        </div>
    )
}

ProductCardSlider.defaultProps = defaultProps

export default ProductCardSlider;

