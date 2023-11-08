export type HeadingModel = {
    headingType: HeadingType;
    text: string
};

export type HeadingType = 'headingL' | 'headingM' | 'headingS';

const Heading = (props: HeadingModel) => {
    return (
        <div className={
            `heading 
            ${props.headingType === "headingL" ? 'headingL' : ''} 
            ${props.headingType === "headingM" ? 'headingM' : ''} 
            ${props.headingType === "headingS" ? 'headingS' : ''}
            `}
        >{props.text}
        </div>
    );
}

export default Heading;

