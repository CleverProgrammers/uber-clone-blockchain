import Navbar from "../components/Navbar";
import Map from "../components/Map";
import LocationSelector from "../components/LocationSelector";
import Confirm from "../components/Confirm";

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10`,
  mapContainer: `flex-1 w-full h-full`,
  rideRequestContainer: `h-4/6 md:h-full w-[300px] md:w-[400px] ml-[1rem] py-[1rem] absolute bottom-0 left-0 flex flex-col justify-end z-20`,
  rideRequest: `h-5/6 max-h-[700px] bg-white rounded-lg flex flex-col overflow-auto scrollbar-hide`,
};

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Navbar />
      <div className={style.main}>
        <Map />
      </div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
          <LocationSelector />
          <Confirm />
        </div>
      </div>
    </div>
  );
}
