import { LineChart } from "react-native-chart-kit";
import { Dimensions, View } from "react-native";
import { PRIMARY_DARK_COLOR_2 } from "../../constants/colors";
import styles from "./DaillyData.style";

const { width } = Dimensions.get("window");

const DailyData = ({dayData, tempData}) => {
  return (
    <View style={styles.main}>
      <LineChart
        data={{labels: dayData, datasets: [{data: tempData}]}} width={width -40}
        height={115} withInnerLines={false} yAxisInterval={1}
        chartConfig={{
          backgroundColor: PRIMARY_DARK_COLOR_2,
          backgroundGradientFrom: PRIMARY_DARK_COLOR_2,
          backgroundGradientTo: PRIMARY_DARK_COLOR_2,
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(230, 230, 230, ${opacity})`,
          style: {borderRadius: 25},
          propsForDots: {
            r: "4",
            strokeWidth: "2",
            stroke: PRIMARY_DARK_COLOR_2,
          },
        }}
        bezier
        style={styles.lineChart}
      />
    </View>
  );
};

export default DailyData;
