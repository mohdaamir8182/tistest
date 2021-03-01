import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { categories } from '../../utils/data';
import Category from '../../components/Category';

const Home = (props) => {

    const {navigation} = props;

    const data = [...categories];

    const [keyword , setKeyword] = useState("");

    const performSearch = () => {
        navigation.navigate("offerlisting" , {
            keyword : keyword
        });
    }

    const renderItem = ({ item }) => (
      <Category 
        title={item.name}
        icon={item.icon}
      />
    );

    

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchbox}>
          <TextInput
            placeholder="Search"
            value={keyword}
            style={styles.input}
            onChangeText={(val) => setKeyword(val)}
            onSubmitEditing={performSearch}
          />
        </View>
      </View>
      
      <View style={styles.categoryListContainer}>
        <FlatList 
          data={categories}
          numColumns={3}
          contentContainerStyle={{flexGrow : 1, justifyContent: 'center' , alignItems: 'center'}}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer:{
    flex: 2,
    justifyContent: 'center'
  },
  searchbox: {
    height: 50,
    marginHorizontal: 30,
    marginTop: 5,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#d0d0d0',
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  categoryListContainer:{
    flex: 3,
    //alignItems: 'center',
    //justifyContent: 'center'
  },
  separator:{
    width: 16
  }
});

export default Home;
