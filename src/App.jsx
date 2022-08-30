import React from "react";
import "./App.css";
import Gallery from "./Gallery";
import NavBar from "./Navbar";
// import NavBar from "./NavBar";
import data from "./data";

function App() {
  const travel = data.map((item) => {
    return (
      <Gallery
        key={item.id}
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        img={item.imageUrl}
      />
    );
  });

  return (
    <div>
      <NavBar />
      {travel}
    </div>
  );
}

export default App;
