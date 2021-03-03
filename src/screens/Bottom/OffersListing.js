import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import * as Api from 'axios';
import {BASE_URL, GET_DEALS} from '../../services/index';
import Header from '../../components/Header';

const OffersListing = (props) => {

  const {navigation, route} = props;

  const {keyword} = route.params;

  const [deals, setDeals] = useState([]);

  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchDeals() {
      try {
        const response = await Api.get(BASE_URL + GET_DEALS, {
          params: {
            searchKeyword: keyword,
          },
        });

        setDeals(response.data);
      } catch (error) {
        setError(true);
      }
    }
    fetchDeals();
    
  }, []);

  const navigateToDetail = (dealID) => {
    navigation.navigate('offerdetails', {
      id: dealID,
    });
  };

  return (
    <ImageBackground source={require('../../assets/bg2.jpeg')} resizeMode="cover" style={styles.container} >
      <Header
        {...props}
        title="Others"
        leftIcon={require('../../assets/back.png')}
        onLeftIconPress={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} >
        {deals.length == 0 && !error ? (
          <View style={styles.indicator}>
            <ActivityIndicator color="#fff" style={{height: 30}} />
          </View>
        ) : error ? (
          <View style={styles.indicator}>
            <Text style={styles.noData}>No Data Found</Text>
          </View>
        ) : (
          deals.map((deal) => (
            <TouchableOpacity
              activeOpacity={1}
              key={deal.dealID}
              style={styles.card}
              onPress={() => navigateToDetail(deal.dealID)}>
              <View style={styles.imageConatiner}>
                <Image
                  source={{uri: deal.outletImageUrl}}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>

              <View style={styles.bottom}>
                <View style={styles.titleRow}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>{deal.displayName}</Text>
                    <Text style={styles.subtitle}>{deal.displayInfo}</Text>
                  </View>

                  <Image
                    source={require('../../assets/heart.png')}
                    style={styles.heart}
                    resizeMode="contain"
                  />
                </View>

                <View style={styles.footerContainer}>
                  <View style={styles.info}>
                    <Text style={styles.infoText}> {deal.distance}</Text>
                    <Text style={styles.infoDescription}>
                      {deal.distanceUOM} away
                    </Text>
                  </View>

                  <View style={styles.verticleLine} />

                  <View style={styles.info}>
                    <Text style={styles.infoText}> {deal.validUntil}</Text>
                    <Text style={styles.infoDescription}>Expires</Text>
                  </View>

                  <View style={styles.verticleLine} />

                  <View style={styles.info}>
                    <Text style={styles.infoText}> {deal.validFor}</Text>
                    <Text style={styles.infoDescription}>Valid For</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: 340,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingTop: 0,
    borderRadius: 10,
    backgroundColor: '#d0d0d0',
    marginVertical: 15,
    marginHorizontal: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  imageConatiner: {
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  bottom: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {},
  title: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 17,
  },
  subtitle: {
    marginTop: 3,
    marginLeft: 10,
    fontSize: 12,
  },
  heart: {
    width: 20,
    height: 20,
    marginRight: 20,
    tintColor: 'red',
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    //backgroundColor: 'teal',
    marginTop: 15,
    paddingTop: 10,
    marginBottom: 10,
    borderTopColor: '#d0d0d0',
    borderTopWidth: 1,
  },
  info: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 11,
    color: 'teal',
    textAlign: 'center',
    marginTop: 5
  },
  infoDescription: {
    fontSize: 10,
    color: 'grey',
    textAlign: 'center',
    marginTop: 2
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#d0d0d0',
  },
  noData:{
    fontSize: 20,
    color: '#fff'
  }
});

export default OffersListing;
