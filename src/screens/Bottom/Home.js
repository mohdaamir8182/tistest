import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  ScrollView
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
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="teal" />

      <Header
        {...props}
        title="Categories"
        leftIcon={require('../../assets/menu.png')}
        onLeftIconPress={onLeftIconPress}
      />

      <View style={styles.searchContainer}>
        <View style={styles.searchbox}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#cdd0cb',
  },
  searchContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  searchbox: {
    height: 50,
    marginHorizontal: 30,
    marginTop: 5,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  categoryListContainer: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
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
