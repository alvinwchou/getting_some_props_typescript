// we are planning on sending down an image src and alt text we will add string to the props

export default function GalleryItem(props: {
    imageURL: string;
    imageAlt: string;
}) {
    // let's log out what props represents
    console.log(props);
    return (
        <li>
            <img src={props.imageURL} alt={`A wondrous ${props.imageAlt}`} />
        </li>
    );
}

// a second way of writing the above is to create an interface
interface galleryItemProps {
    imageURL: string;
    imageAlt: string;
}

export function GalleryItem2(props: galleryItemProps) {
    // let's log out what props represents
    console.log(props);
    return (
        <li>
            <img src={props.imageURL} alt={`A wondrous ${props.imageAlt}`} />
        </li>
    );
}
