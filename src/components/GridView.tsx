import {View, StyleSheet} from 'react-native';
import { Text } from 'react-native-paper';

interface Props<T> { 
    data: T[];
    renderItem(item: T): JSX.Element;
    col?: number;
  }

  const GridView = <T extends any>(props: Props<T>) => {
    const {data, col = 3, renderItem} = props;
    return (
      <View style={styles.container}>
        {data.map((item, index) => {
          return (
            <View key={index} style={{width: 100 / col + '%' , alignItems: "center"}}>
              <Text style={{padding: 15}}>{renderItem(item)}</Text>
            </View>
          );
        })}
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {width: '100%', flexDirection: 'row', flexWrap: 'wrap'},
  });

export default GridView;