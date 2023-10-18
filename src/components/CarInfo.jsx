import "../styles/CarInfo.css";
import { IoPersonOutline } from "react-icons/io5";
import { PiBagLight } from "react-icons/pi";
import { VscSettings } from "react-icons/vsc";
import { AiOutlineCar, AiOutlineCheck } from "react-icons/ai";
import { carsForBooking } from "../data/cars";
import { useParams } from "react-router-dom";

export default function CarInfo() {
  const params = useParams();
  const find_car = carsForBooking.find((c) => {
    return c.id == params.id;
  });

  console.log("find_car >> ", find_car);
  return (
    <div className="car-info">
      <div className="car-info-row">
        <div className="car-info-text-col">
          <h1>{find_car.name}</h1>
          <p>reviews</p>
          <div className="car-interior-info">
            <div>
              <IoPersonOutline className="car-info-icon" />
              <span>{find_car.seats}</span>
              <p>Passengers</p>
            </div>
            <div>
              <PiBagLight className="car-info-icon" />
              <span>{find_car.luggage}</span>
              <p>Luggages</p>
            </div>
            <div>
              <VscSettings className="car-info-icon" />
              <p className="auto">{find_car.gearType}</p>
            </div>
            <div>
              <AiOutlineCar className="car-info-icon" />
              <span>{find_car.doors}</span>
              <p>Doors</p>
            </div>
          </div>
          <h2>Refueling</h2>
          <p>
            Meh synth Schlitz, tempor duis single-origin coffee ea next level
            ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit
            hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil,
            flexitarian Truffaut synth art party deep v chillwave. Seitan High
            Life reprehenderit consectetur cupidatat kogi. Et leggings fanny
            pack, elit bespoke vinyl art party Pitchfork selfies master cleanse.
          </p>
          <h2>Car Wash</h2>
          <p>
            Craft beer elit seitan exercitation, photo booth et 8-bit kale chips
            proident chillwave deep v laborum. Aliquip veniam delectus, Marfa
            eiusmod Pinterest in do umami readymade swag. Selfies iPhone
            Kickstarter, drinking vinegar jean vinegar stumptown yr pop-up
            artisan sunt. Craft beer elit seitan exercitation, photo booth
          </p>
          <h2>No Smoking</h2>
          <p>
            See-through delicate embroidered organza blue lining luxury
            acetate-mix stretch pleat detailing. Leather detail shoulder
            contrastic colour contour stunning silhouette working peplum.
            Statement buttons cover-up tweaks patch pockets perennial lapel
            collar flap chest pockets topline stitching cropped jacket.
            Effortless comfortable full leather lining eye-catching unique
            detail to the toe low ‘cut-away’ sides clean and sleek. Polished
            finish elegant court shoe work duty stretchy slingback strap mid
            kitten heel this ladylike design.
          </p>
          <div className="include">
            <div>
              <h3>Included</h3>
            </div>
            <div>
              <p>
                <AiOutlineCheck className="check-icon" />
                Audio input
              </p>
              <p>
                <AiOutlineCheck className="check-icon" />
                Bluetooth
              </p>
              <p>
                <AiOutlineCheck className="check-icon" />
                Heated seats
              </p>
            </div>
            <div>
              <p>
                <AiOutlineCheck className="check-icon" />
                All Wheel drive
              </p>
              <p>
                <AiOutlineCheck className="check-icon" />
                USB input
              </p>
              <p>
                <AiOutlineCheck className="check-icon" />
                FM Radio
              </p>
            </div>
          </div>
          <div className="excluded">
            <div>
              <h3>Not Included</h3>
            </div>
            <div>
              <p>
                <AiOutlineCheck className="check-icon" />
                {find_car.exluded[0]}
              </p>
            </div>
            <div>
              <p>
                <AiOutlineCheck className="check-icon" />
                {find_car.exluded[1]}
              </p>
            </div>
          </div>
        </div>
        <div className="car-info-form-col">
          <form>
            <h2>
              ${find_car.ratePerDay} <span>Per Day</span>
            </h2>
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                name="fullName"
                id="fullName"
              />
            </div>
            <div>
              <label htmlFor="fullName">Email Address</label>
              <input
                type="email"
                placeholder="JohnDoe@gmail.com"
                name="email"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="fullName">Phone Number</label>
              <input
                type="text"
                placeholder="+000-000-0000-000"
                name="phoneNo"
                id="phoneNo"
              />
            </div>
            <div>
              <label htmlFor="address">Pickup Address</label>
              <input
                type="text"
                placeholder="34 Mainfield Road"
                name="address"
                id="address"
              />
            </div>
            <div>
              <label htmlFor="pickupDate">Pickup Date</label>
              <input type="date" name="pickupDate" id="pickupDate" />
            </div>
            <div>
              <label htmlFor="pickupTime">Pickup Time</label>
              <input type="time" name="pickupTime" id="pickupTime" />
            </div>
            <div>
              <label htmlFor="dropAddress">Drop Off Address</label>
              <input
                type="text"
                placeholder="34 Mainfield Road"
                name="dropAddress"
                id="dropAddress"
              />
            </div>
            <div>
              <label htmlFor="dropDate">Drop Off Date</label>
              <input type="date" name="dropDate" id="dropDate" />
            </div>
            <div>
              <label htmlFor="dropTime">Drop Off Time</label>
              <input type="time" name="dropTime" id="dropTime" />
            </div>
            <div>
              <button className="booking-btn">Book Instantly</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
