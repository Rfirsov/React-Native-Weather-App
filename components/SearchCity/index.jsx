import { TextInput, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { PRIMARY_LIGHT_COLOR, PRIMARY_LIGHT_COLOR_2 } from "../../constants/colors";
import useStateCity from "../../hooks/useStateCity";
import styles from "./SearchCity.style";

const SearchCity = ({ getStateWeatherData }) => {
  const { city, setCity } = useStateCity();

  const submitHandler = () => {
    getStateWeatherData(city);
    setCity('');
  }

  const changeCityHandler = (val) => {
    setCity(val);
  }

  return (
    <View style={styles.searchCity}>
      <TextInput style={styles.search}
        placeholder="Search Cities"
        placeholderTextColor={PRIMARY_LIGHT_COLOR_2}
        keyboardType='web-search'
        value={city}
        onChangeText={changeCityHandler}
        accessibilityLabel="City Search Input"
        accessibilityHint="Type the name of the city to search for weather information."
      />
      <TouchableOpacity
        onPress={submitHandler}
        style={styles.searchBtn}
        accessibilityLabel="Search City"
        accessibilityHint="Tap to search for the weather of the entered city."
      >
        <MaterialIcons name="search" size={24} color={PRIMARY_LIGHT_COLOR} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchCity;
