import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import {BASE_URL, GET_DEAL_DETAILS} from '../../services/index';
import * as Api from 'axios';
import Header from '../../components/Header';

const OfferDetails = (props) => {
  
  const {navigation, route} = props;

  const {id} = route.params;

  const [dealinfo, setDealinfo] = useState(null);

  useEffect(() => {
    async function fetchDealDetails() {
      const response = await Api.get(BASE_URL + GET_DEAL_DETAILS, {
        params: {
          dealID: id,
        },
      });

      setDealinfo(response.data);

    }
    fetchDealDetails();
  }, []);

  return (
    <View style={styles.container}>
      <Header
        {...props}
        title={dealinfo === null ? '' : dealinfo.outlet.displayName}
        leftIcon={require('../../assets/back.png')}
        onLeftIconPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        {dealinfo === null ? (
          <View style={styles.indicator}>
            <ActivityIndicator color="teal" />
          </View>
        ) : (
          <>
            <View style={styles.imageConatiner}>
              <Image
                source={{uri: dealinfo.outlet.outletImageUrls[0]}}
                style={styles.image}
                resizeMode="cover"
              />
            </View>

            <Text style={styles.heading}>Outlet Description</Text>

            <Text style={styles.description}>
              {dealinfo.voucher.brandDescription}
            </Text>

            <View style={styles.distanceinfo}>
              <Text style={styles.location}>
                {dealinfo.outlet.clusterName} , {dealinfo.outlet.buildingName} ,{' '}
                {dealinfo.outlet.cityName}
              </Text>
              <Text style={styles.distance}>{dealinfo.outlet.distance} Km</Text>
            </View>

            <View style={styles.footerContainer}>
              <View style={styles.info}>
                <Image
                  source={require('../../assets/direction.png')}
                  style={styles.imageIcon}
                  resizeMode="contain"
                />
                <Text style={styles.infoText}>Get Directions</Text>
              </View>

              <View style={styles.verticleLine} />

              <View style={styles.info}>
                <Image
                  source={require('../../assets/website.png')}
                  style={styles.imageIcon}
                  resizeMode="contain"
                />
                <Text style={styles.infoText}>View Website</Text>
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cdd0cb',
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  heading: {
    marginVertical: 20,
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    marginHorizontal: 30,
    textAlign: 'justify',
  },
  distanceinfo: {
    height: 200,
    backgroundColor: 'black',
    opacity: 0.7,
    marginTop: 30,

    alignItems: 'center',
    justifyContent: 'center',
  },
  location: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    marginHorizontal: 10,
    color: '#f0f0f0',
  },
  distance: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#f0f0f0',
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
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#d0d0d0',
  },
  imageIcon: {
    height: 50,
    width: 50,
    tintColor: 'teal',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'teal',
  },
});

export default OfferDetails;
