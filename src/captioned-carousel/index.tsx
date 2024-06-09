import { Carousel } from 'react-bootstrap';

function CaptionedCarousel(props:any){
    return (
            <Carousel fade>
                {props.json.map((item:any, index: number) => (
                    <Carousel.Item key={index}>
                        <img src={`${process.env.PUBLIC_URL}/images${item.image}`} className='img-fluid' />
                        <Carousel.Caption>
                            <h1>{item.title}</h1>
                            <h2>{item.funFact[props.language]}</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
    );
}

export default CaptionedCarousel;
