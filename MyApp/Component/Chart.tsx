import { Dimensions, View } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
}

const tempData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [50, 20, 2, 86, 71, 100],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`
    }
  ]
}

const Chart = () => {
  return (
    <View style={{ marginTop: 35 }}>
      <LineChart
        bezier
        data={tempData}
        width={Dimensions.get('screen').width}
        height={200}
        chartConfig={chartConfig}
      />
    </View>
  )
}

export default Chart