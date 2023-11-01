import React from "react";
import CommonHeader from "../components/CommonHeader";
import SearchFields from "../components/SearchFields";
import CarsShowcase from "../components/CarsShowcase";

export default function Cars() {
  return (
    <div>
      <CommonHeader heading={"Cars"} />
      <SearchFields />
      <CarsShowcase />
    </div>
  );
}
