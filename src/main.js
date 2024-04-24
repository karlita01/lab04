import Carousel from 'react-bootstrap/Carousel';
const Main = () => {
    return <>
        <main className="row">
            <div className="col-md-12">
                <Carousel className="text-center">

                    <Carousel.Item>
                        <img src="https://www.shutterstock.com/image-photo/water-cooled-gaming-pc-rgb-600nw-2224456087.jpg" height="500"></img>
                        <Carousel.Caption>
            
                           
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src="https://www.shutterstock.com/image-photo/kl-malaysia-june-26th-2021-600nw-2001744422.jpg" height="500"></img>
                        <Carousel.Caption>
                      
                           
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src="https://www.shutterstock.com/image-photo/set-collection-black-custom-gaming-600nw-2141740033.jpg" height="500"></img>
                        <Carousel.Caption>

                     
                         
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>



            </div>
        </main></>;
}

export default Main;