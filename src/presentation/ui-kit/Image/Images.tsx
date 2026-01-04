import { Image } from 'react-native';

type ImagesProp = {
    source: any,
    width: number,
    height: number,
};

const CustomImage = ({ source, width, height }: ImagesProp) => {
    return (
        <Image source={source} style={{ width, height }} />
    );
};


export default CustomImage;
