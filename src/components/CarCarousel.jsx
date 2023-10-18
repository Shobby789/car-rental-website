import "../styles/CarCarousel.css";
import { Fade, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "80vh",
};
const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1597007030739-6d2e7172ee5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1597007029837-50500644a1d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1606224103857-e4c74b0139df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    caption: "Slide 3",
  },
];

export default function CarCarousel() {
  return (
    <div>
      <div className="slide-container">
        <Fade>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
}
