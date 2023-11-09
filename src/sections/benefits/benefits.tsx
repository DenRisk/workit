import Benefit, {BenefitModel} from "../../components/benefit/benefit";
import {v4 as uuidV4} from "uuid";
import Container from "../../components/container/container";

const benefits: BenefitModel[] = [
    {
        title: 'Actionable insights',
        text: 'Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.'
    },
    {
        title: 'Data-driven decisions',
        text: 'Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.'
    },
    {
        title: 'Always affordable',
        text: 'Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.'
    }
]

const Benefits = () => {
    return (
        <section className={'benefits'}>
            <Container>
                <div className={'benefits__content'}>
                    {benefits.map((benefit, index) => (
                        <Benefit key={uuidV4()} title={benefit.title} text={benefit.text} benefitCount={index}></Benefit>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Benefits;