import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

interface CoinPriceGraphProps {
  dataString: string;
}

const CoinPriceGraph = ({ dataString }: CoinPriceGraphProps) => {
  const data = JSON.parse(dataString);

  return (
    <View>
      <LineChart
        data={{
          labels: ["-7d", "-6d", "-5d", "-4d", "-3d", "-2d", "-1d", "now"],
          datasets: [
            {
              data,
            },
          ],
        }}
        width={Dimensions.get("window").width - 20} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(18, 85, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "0",
            strokeWidth: "1",
            stroke: "#ffa726",
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default CoinPriceGraph;
