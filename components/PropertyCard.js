import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import React, { Children } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';

const PropertyCard = ({rooms,children,property,adults,selectedDates,availableRooms}) => {
  const route=useRoute();
  
  const {height,width}=Dimensions.get('window');
  const navigation=useNavigation();
  return (
    <View>
      <Pressable 
        onPress={()=> navigation.navigate("Info",{

          name:property.name,
          rating:property.rating,
          oldPrice:property.oldPrice,
          newPrice:property.newPrice,
          photos:property.photos,
          availableRooms:property.rooms,
          adults:adults,
          children:children,
          rooms:rooms,
          selectedDates:selectedDates,

        })}
        style={{flexDirection:"row",backgroundColor:"white",margin:12}}>
        
        <Image style={{height:height/3.5, width:width-260}} source={{uri:property.image}}/>
        
        <View style={{padding:10}}>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <Text style={{width:200}}>{property.name}</Text>
            <AntDesign name="hearto" size={24} color="red" />
          </View>
          <View style={{flexDirection:"row", alignItems:"center",gap:6}}>
            <MaterialIcons name="stars" size={20} color="black" />
            <Text>{property.rating}</Text>
          </View>
          <Text style={{width:180,marginTop:4, color:"gray",fontWeight:'bold'}}>{property.address.length>50 ? property.address.substr(0,50) : property.address}</Text>
          <Text style={{marginTop:4,fontSize:15,fontWeight:"500"}}>Price for 1 night {adults} adults</Text>        
          <View style={{flexDirection:"row",alignItems:"center",gap:8}}>
            <Text style={{color:"red",textDecorationLine:"line-through",fontSize:15}}>{property.oldPrice*adults}</Text>
            <Text style={{fontSize:15}}>Rs. {property.newPrice*adults}</Text>
          </View>
          <View style={{marginTop:6, }}>
            <Text style={{fontSize: 12, color:"gray"}}>Delux Room</Text>
            <Text style={{fontSize: 12, color:"gray"}}>Hotel room: 1 bed</Text>
          </View>
        </View>
      </Pressable>
      
    </View>
  )
}

export default PropertyCard

const styles = StyleSheet.create({})