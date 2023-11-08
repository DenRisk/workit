export type ButtonModel = {
    text: string
};

const Button = (props: ButtonModel) => {
    return (
        <button className='button'>
            {props.text}
        </button>
    );
}

export default Button;