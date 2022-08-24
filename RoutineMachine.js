import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import { setCord } from "./redux/mapSet";
import { store } from './redux/store'

const createRoutineMachineLayer = () => {




  const instance = L.Routing.control({
    waypoints: [
      L.latLng(52.237049, 18.017532),
      L.latLng(51.107883, 17.038538)
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  }).on('routesfound', function (e) {




    var routes = e.routes;
    console.log(routes[0].coordinates)

    e.routes[0].coordinates.forEach(function (coord, index) {
      setTimeout(() => {


        store.dispatch(setCord([coord.lat, coord.lng]))

      }, 10*index);
    })






  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
