import React, { useRef, useState } from 'react'
import { Text, Image, TouchableOpacity, View } from 'react-native'

import {
  Transition,
  Transitioning,
  TransitioningView,
} from 'react-native-reanimated'
import { dataAcordion } from '../data/data-acordion'
import { acordionStyle } from '../core/acordion.style'

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

export function Accordion() {
  const [currentCardIndex, setCurrentCardIndex] = useState(-1)
  const viewRef = useRef<TransitioningView>(null)
 
  const [iconRow, setImage] = useState(require('../assets/rowdown.png'))

  function handleToggleCard(cardIndex: number) {
    viewRef.current?.animateNextTransition()
    if (cardIndex === currentCardIndex) {      
      setImage(require('../assets/rowdown.png'))
      setCurrentCardIndex(-1)
    } else {
      setImage(require('../assets/rowup.png'))
      setCurrentCardIndex(cardIndex)
    }    
  }

  return (
    <Transitioning.View
      ref={viewRef}
      transition={transition}
    >
      {dataAcordion.map(
        ({ id, category, content, backgroundColor }, index) => (
          <TouchableOpacity
            key={id}
            onPress={() => handleToggleCard(index)}
            activeOpacity={1.0}
          >
            <View style={[acordionStyle.card, {backgroundColor}]}>
              <View style={[acordionStyle.cabecera]}>
                <Text style={[acordionStyle.titulo]}>{category}</Text>
                
                <Image source={iconRow}  style={[{  width: 30, height: 30, marginVertical: 10}]}/>
              </View>
              {index === currentCardIndex && (
                <View >
                  <Text
                      key={content}
                      style={[acordionStyle.content]} >
                      {content}
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        )
      )}
    </Transitioning.View>
  );
}