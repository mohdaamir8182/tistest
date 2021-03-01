import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableWithoutFeedback, ScrollView, TouchableOpacity} from 'react-native';
import * as Api from 'axios';
import {BASE_URL, GET_DEALS} from '../../services/index';

const OffersListing = (props) => {
  const {navigation, route} = props;

  const {keyword} = route.params;

  const [deals, setDeals] = useState([]);

  useEffect(() => {
    async function fetchDeals() {
      const response = await Api.get(BASE_URL + GET_DEALS, {
        params: {
          searchKeyword: keyword,
        },
      });

      setDeals(response.data);

      console.log('OFFERS....', response.data);
    }
    fetchDeals();
  }, []);

  const navigateToDetail = (dealID) => {
      navigation.navigate("offerdetails" , {
          id : dealID
      })
  }

  return (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}} >
        {
            deals.length == 0 ? (
                <ActivityIndicator color="#000" />
            ) : (
            //    deals &&  <FlatList
            //         data={deals}
            //         extraData={deals}
            //         contentContainerStyle={{flexGrow: 1}}
            //         keyExtractor={(deal) => deal.dealID}
            //         renderItem={({deal , index}) => 
            //             (
            //                 <Text>{deal.dealID}</Text>
            //             )
            //         }
            //     />
            
            deals.map((deal) => (
                
                <TouchableOpacity  key={deal.dealID} style={styles.card} onPress={()=>navigateToDetail(deal.dealID)}>
                    <Text>{deal.displayName}</Text>
                </TouchableOpacity>
               
            ))
            )
        }
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center'
  },
  card:{
      height: 200,
      marginHorizontal: 10,
      marginVertical: 5,
      padding: 8,
      borderRadius: 10,
      backgroundColor: '#d0d0d0'
  }
});

export default OffersListing;
