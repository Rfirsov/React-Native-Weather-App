import RootNavigator
  from "./components/RootNavigator";
import TemperatureContextProvider
  from "./context/TemperatureContext";

export default function App() {
  return (
    <TemperatureContextProvider>
      <RootNavigator />
    </TemperatureContextProvider>
  );
};