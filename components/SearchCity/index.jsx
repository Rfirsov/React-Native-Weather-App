import { TextInput, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTemp } from "../../context/TemperatureContext";

import styles from "./SearchCity.style";
import { PRIMARY_LIGHT_COLOR, PRIMARY_LIGHT_COLOR_2 } from "../../constants/colors";

const SearchCity = ({ cityVal, setCityVal }) => {
  const { getStateWeatherData } = useTemp();

  const submitHandler = () => {
    getStateWeatherData(cityVal);
    setCityVal('');
  }
  const changeCityHandler = (val) => {
    setCityVal(val);
  }

  return (
    <View style={styles.searchCity}>
      <TextInput style={styles.search}
        placeholder="Search Cities"
        placeholderTextColor={PRIMARY_LIGHT_COLOR_2}
        keyboardType='web-search'
        value={cityVal}
        onChangeText={changeCityHandler}
      />
      <TouchableOpacity onPress={submitHandler} style={styles.searchBtn}>
        <MaterialIcons name="search" size={24} color={PRIMARY_LIGHT_COLOR} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchCity;
