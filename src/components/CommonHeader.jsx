import "../styles/CommonHeader.css";

export default function CommonHeader({ heading }) {
  return (
    <div className="common-header">
      <h1>{heading}</h1>
    </div>
  );
}
