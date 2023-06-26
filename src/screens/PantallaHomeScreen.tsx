import React, { memo } from 'react';
import { View, Text, Image } from 'react-native';
import { Accordion } from '../components/Accordion';
import  GridView from '../components/GridView';
import { dataGridView } from '../data/data-gridview';
import { gridViewStyle } from '../core/gridview.style';

const PantallaHomeScreen = () => {

  return (
    <View style={{ paddingTop: 10 }}>
      <View><Text style={gridViewStyle.titulo}>Opciones</Text></View>
      <GridView      
        data={dataGridView}
        renderItem={(item) => {
          return (
            <View style={[gridViewStyle.imgContenedor]}>
                <View style={[gridViewStyle.imageCircular]}>
                  <Image 
                    source={item.image}  
                    style={[gridViewStyle.imagen]}
                    resizeMode={"cover"}
                    />
                </View>
              <Text style={gridViewStyle.titulogrid}>{item.name}</Text>
            </View>
          );
        }}
      />
      <Accordion />
    </View>
    /**/
  );
};

export default memo(PantallaHomeScreen);