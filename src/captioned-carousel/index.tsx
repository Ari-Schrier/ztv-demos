import { Carousel } from 'react-bootstrap';

function CaptionedCarousel(props:any){
    return (
        <div className='container'>
            <Carousel fade>
                {props.json.map((item:any, index: number) => (
                    <Carousel.Item key={index}>
                        <img src={`${process.env.PUBLIC_URL}/images${item.image}`} className='img-fluid' />
                        <Carousel.Caption>
                            <h3>{item.title}</h3>
                            <p>{item.funFact[props.language]}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default CaptionedCarousel;
