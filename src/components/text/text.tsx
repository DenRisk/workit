export type TextModel = {
    text: string
};

const Text = (props: TextModel) => {
    return (
        <span className='text'>
            {props.text}
        </span>
    );
}

export default Text;