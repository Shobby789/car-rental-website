import React from "react";
import CommonHeader from "../components/CommonHeader";
import SearchFields from "../components/SearchFields";
import CarTypeList from "../components/CarTypeList";

export default function CarType() {
  return (
    <div>
      <CommonHeader />
      <SearchFields />
      <CarTypeList />
    </div>
  );
}
