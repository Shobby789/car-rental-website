import "../styles/CarInfo.css";
import { IoPersonOutline } from "react-icons/io5";
import { PiBagLight } from "react-icons/pi";
import { VscSettings } from "react-icons/vsc";
import { AiOutlineCar, AiOutlineCheck } from "react-icons/ai";
import { carsForBooking } from "../data/cars";
import { useLocation, useParams } from "react-router-dom";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = "Required";
  } else if (values.fullName.length > 15) {
    errors.fullName = "Must be 15 characters or less";
  }

  if (!values.phoneNo) {
    errors.phoneNo = "Required";
  } else if (values.phoneNo.length < 11) {
    errors.phoneNo = "Must be 11 digits";
  }

  if (!values.emailAddress) {
    errors.emailAddress = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailAddress)
  ) {
    errors.emailAddress = "Invalid email address";
  }

  if (!values.pickupAddress) {
    errors.pickupAddress = "Required";
  } else if (values.pickupAddress.length < 11) {
    errors.pickupAddress = "Must be 11 characters";
  }

  if (!values.pickupDate) {
    errors.pickupDate = "Required";
  }

  if (!values.pickupTime) {
    errors.pickupTime = "Required";
  }

  if (!values.dropOffAddress) {
    errors.dropOffAddress = "Required";
  } else if (values.dropOffAddress.length < 11) {
    errors.dropOffAddress = "Must be 11 digits";
  }

  if (!values.dropOffDate) {
    errors.dropOffDate = "Required";
  }

  if (!values.dropOffTime) {
    errors.dropOffTime = "Required";
  }

  return errors;
};

export default function CarInfo() {
  const location = useLocation();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      emailAddress: "",
      phoneNo: "",
      pickupAddress: "",
      pickupDate: "",
      pickupTime: "",
      dropOffAddress: "",
      dropOffDate: "",
      dropOffTime: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const params = useParams();
  const find_car = carsForBooking.find((c) => {
    return c.id == params.id;
  });

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
          <form onSubmit={formik.handleSubmit}>
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
                onChange={formik.handleChange}
                value={formik.values.fullName}
              />
            </div>
            {formik.errors.fullName ? (
              <div className="error">{formik.errors.fullName}</div>
            ) : null}
            <div>
              <label htmlFor="emailAddress">Email Address</label>
              <input
                type="email"
                placeholder="JohnDoe@gmail.com"
                name="emailAddress"
                id="emailAddress"
                onChange={formik.handleChange}
                value={formik.values.emailAddress}
              />
            </div>
            {formik.errors.emailAddress ? (
              <div className="error">{formik.errors.emailAddress}</div>
            ) : null}
            <div>
              <label htmlFor="phoneNo">Phone Number</label>
              <input
                type="text"
                placeholder="+000-000-0000-000"
                name="phoneNo"
                id="phoneNo"
                onChange={formik.handleChange}
                value={formik.values.phoneNo}
              />
            </div>
            {formik.errors.phoneNo ? (
              <div className="error">{formik.errors.phoneNo}</div>
            ) : null}
            <div>
              <label htmlFor="pickupAddress">Pickup Address</label>
              <input
                type="text"
                placeholder="34 Mainfield Road"
                name="pickupAddress"
                id="pickupAddress"
                onChange={formik.handleChange}
                value={formik.values.pickupAddress}
              />
            </div>
            {formik.errors.pickupAddress ? (
              <div className="error">{formik.errors.pickupAddress}</div>
            ) : null}
            <div>
              <label htmlFor="pickupDate">Pickup Date</label>
              <input
                type="date"
                name="pickupDate"
                id="pickupDate"
                onChange={formik.handleChange}
                value={formik.values.pickupDate}
              />
            </div>
            {formik.errors.pickupDate ? (
              <div className="error">{formik.errors.pickupDate}</div>
            ) : null}
            <div>
              <label htmlFor="pickupTime">Pickup Time</label>
              <input
                type="time"
                name="pickupTime"
                id="pickupTime"
                onChange={formik.handleChange}
                value={formik.values.pickupTime}
              />
            </div>
            {formik.errors.pickupTime ? (
              <div className="error">{formik.errors.pickupTime}</div>
            ) : null}
            <div>
              <label htmlFor="dropOffAddress">Drop Off Address</label>
              <input
                type="text"
                placeholder="34 Mainfield Road"
                name="dropOffAddress"
                id="dropOffAddress"
                onChange={formik.handleChange}
                value={formik.values.dropOffAddress}
              />
            </div>
            {formik.errors.dropOffAddress ? (
              <div className="error">{formik.errors.dropOffAddress}</div>
            ) : null}
            <div>
              <label htmlFor="dropOffDate">Drop Off Date</label>
              <input
                type="date"
                name="dropOffDate"
                id="dropOffDate"
                onChange={formik.handleChange}
                value={formik.values.dropOffDate}
              />
            </div>
            {formik.errors.dropOffDate ? (
              <div className="error">{formik.errors.dropOffDate}</div>
            ) : null}
            <div>
              <label htmlFor="dropOffTime">Drop Off Time</label>
              <input
                type="time"
                name="dropOffTime"
                id="dropOffTime"
                onChange={formik.handleChange}
                value={formik.values.dropOffTime}
              />
            </div>
            {formik.errors.dropOffTime ? (
              <div className="error">{formik.errors.dropOffTime}</div>
            ) : null}
            <div>
              <button className="booking-btn" type="submit">
                Book Instantly
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
