export type LinkModel = {
    text: string
};

const Link = (props: LinkModel) => {
    return (
        <div className='link'>
            {props.text}
        </div>
    );
}

export default Link;