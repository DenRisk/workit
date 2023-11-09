export type BenefitModel = {
    title: string,
    text: string,
    benefitCount?: number
};

const Benefit = (props: BenefitModel) => {
    return (
        <div className={'benefit'}>
            <div className={'benefit__count'}>{props.benefitCount}</div>
            <h3 className={'benefit__heading'}>{props.title}</h3>
            <div className={'benefit__text'}>{props.text}</div>
        </div>
    );
}

export default Benefit;