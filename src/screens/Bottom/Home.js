import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';
import Category from '../../components/Category';
import Header from '../../components/Header';

const Home = (props) => {

  const {navigation} = props;

  const [keyword, setKeyword] = useState('');

  const performSearch = () => {
    setKeyword('');
    navigation.navigate('offerlisting', {
      keyword: keyword,
    });
  };

  const onCategoryPress = (category) => {
    navigation.navigate('offerlisting', {
      keyword: category,
    });
  };


  const onLeftIconPress = () => {
    navigation.toggleDrawer();
  };

  return (
    <ImageBackground source={require('../../assets/bg.jpeg')} resizeMode="cover" style={styles.container} >

      <StatusBar backgroundColor="teal" />

      <Header
        {...props}
        title="Categories"
        leftIcon={require('../../assets/menu.png')}
        onLeftIconPress={onLeftIconPress}
      />

      <ScrollView contentContainerStyle={{flexGrow: 1}}  showsVerticalScrollIndicator={false} >

      <View style={styles.searchContainer}>
        <View style={styles.searchbox}>
          <Image source={require('../../assets/search.png')} style={styles.searchIcon} />
          <TextInput
            placeholder="Search Category, Place or Merchant"
            value={keyword}
            style={styles.input}
            onChangeText={(val) => setKeyword(val)}
            onSubmitEditing={performSearch}
          />
        </View>
      </View>

      <View style={styles.categoryListContainer}>

        <View style={styles.top}>
          <Category 
            title="Food & Drinks"
            icon={require("../../assets/food.png")}
            onPress={onCategoryPress}
          />
          <Category 
            title="Pizza"
            icon={require("../../assets/pizza.png")}
            style={{marginHorizontal: 10}}
            onPress={onCategoryPress}
          />
          <Category 
            title="Sports & Leisure"
            icon={require("../../assets/sports.png")}
            onPress={onCategoryPress}
          />
        </View>

        <View style={styles.top}>
          <Category 
            title="Beauty & Wellness"
            icon={require("../../assets/beauty.png")}
            onPress={onCategoryPress}
          />
          <Category 
            title="Learning"
            icon={require("../../assets/learning.png")}
            style={{marginHorizontal: 10}}
            onPress={onCategoryPress}
          />
          <Category 
            title="Family & Locals"
            icon={require("../../assets/family.png")}
            onPress={onCategoryPress}
          />
        </View>

      </View>

      </ScrollView>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    //backgroundColor: '#cdd0cb',
  },
  searchContainer: {
    flex: 2,
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  searchbox: {
    height: 50,
    flexDirection: 'row',
    alignItems: "center",
    marginHorizontal: 30,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
  },
  searchIcon:{
    height: 20, 
    width: 20, 
    tintColor: 'grey',
    marginLeft: 5,
    marginRight: 10
  },
  input: {
    flex: 1,
    fontSize: 10
  },
  categoryListContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: "flex-end",
    marginBottom: 50
  },
  top:{
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    width: 10,
  },
});

export default Home;
