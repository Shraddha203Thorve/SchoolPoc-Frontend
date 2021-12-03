import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const SchoolImg = () => {
    return (
        <div className="mt-4">
            {/* <h2>Learning Curve Public School</h2> */}
            <Carousel>
                <Carousel.Item interval={1000}>
                <img
                        // className="d-block w-100"
                        src="https://images.unsplash.com/photo-1610962381137-50ef93055125?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                      
                        height={300} width={600}
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        // className="d-block w-100"
                        src="https://media.istockphoto.com/photos/african-american-girl-raising-her-hands-while-sitting-on-her-desk-in-picture-id1323715308?b=1&k=20&m=1323715308&s=170667a&w=0&h=MeG-_I7iI4HsElwGrxCgMm7P4QkJsWGmwvcrOyYnGlc="
                        // alt="Second slide"
                        height={300} width={600}
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        // className="d-block w-100"
                        src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                        // alt="Third slide"
                        height={300} width={600}
                    />
                   
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default SchoolImg
