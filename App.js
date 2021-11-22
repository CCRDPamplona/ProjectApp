import * as React from 'react';
import { StyleSheet, Text, View, Image, Button, Pressable, ScrollView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Image style={styles.imageSize} source={require('./assets/MH.png')}/>
      <Text style={styles.textDesign}>Welcome To MediApp</Text>
      <Text style={styles.textDesign}>The Wiki For Medical Herbs On the Go</Text>
      <Text style={styles.textDesign}>Select One of the Buttons below</Text>
      <Text style={styles.textDesign}>For your preffered option to use said herbs</Text>
      <Text style={styles.textDesign}>However while this may provide some information</Text>
      <Text style={styles.textDesign}>It is still better to do some research</Text>
      <Pressable style={styles.customButton}>
        <Text style={{color:"#fff"}}>Drinkable</Text>
      </Pressable>
      <Pressable style={styles.customButton}>
        <Text style={{color:"#fff"}}>Apply to Skin</Text>
      </Pressable>
      <Pressable style={styles.customButton}>
        <Text style={{color:"#fff"}}>Digested/Spices</Text>
      </Pressable>
      <Pressable style={styles.customButton}>
        <Text style={{color:"#fff"}}>EMERGENCY!</Text>
      </Pressable>
      </ScrollView>
    </View>
  );
}

function Drinkable({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Image style={styles.imageSize} source={require('./assets/MH.png')}/>
      <Text style={styles.textDesign}>Use the herbs in this category in a tea</Text>
      <Image style={styles.herbSize} source={require('./assets/Ginger.jpg')}/>
      <Text style={styles.textDesign}>Ginger Tea</Text>
      <Text style={styles.textDesign}>Ginger tea has a long history dating back to China some 5,000 years ago, where it was traditionally used as a health tonic.</Text>
      <Text style={styles.textDesign}>It May help to ease digestive discomfort, Anti-inflammatory, May help to reduce blood pressure</Text>
      <Text style={styles.textDesign}>May aid weight loss, Ease headaches and migraines</Text>
      <Image style={styles.herbSize} source={require('./assets/Chamomile.jpg')}/>
      <Text style={styles.textDesign}>Chamomille</Text>
      <Text style={styles.textDesign}>Chamomile tea has long been used, as a traditional folk remedy, for a wide range of health issues.</Text>
      <Text style={styles.textDesign}>Nowadays, researchers are increasingly exploring its effectiveness in managing illnesses, including cancer and diabetes.</Text>
      <Text style={styles.textDesign}>Useful in Reducing menstrual pain, Treating diabetes and lowering blood sugar, Slowing or preventing osteoporosis and many more</Text>
      <Image style={styles.herbSize} source={require('./assets/Peppermint.jpg')}/>
      <Text style={styles.textDesign}>Peppermint</Text>
      <Text style={styles.textDesign}>Peppermint can consist of fresh or dry leaves for use in food or as a tea. </Text>
      <Text style={styles.textDesign}>Peppermint essential oil is used in tinctures, chest rubs, and creams.</Text>
      <Text style={styles.textDesign}>Mostly used to help Indigestion, Irritable bowel syndrome, Skin conditions, Headaches and migraines, Colds and flu</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      </ScrollView>
    </View>
  );
}

function Apply({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Image style={styles.imageSize} source={require('./assets/MH.png')}/>
      <Text style={styles.textDesign}>Apply directly to skin the herbs here via oil or direct from the herb itself</Text>
      <Image style={styles.herbSize} source={require('./assets/Cinnamon.jpg')}/>
      <Text style={styles.textDesign}>Cinnamon</Text>
      <Text style={styles.textDesign}>Cinnamon, better known as dalchini, can go a long way in giving you flawless skin.</Text>
      <Text style={styles.textDesign}>It has antibacterial properties and hence is a godsend for acne, It is a powerful antioxidant and thus prevents signs of ageing</Text>
      <Text style={styles.textDesign}>It can make your skin look plumper and more even-toned, It has anti-inflammatory properties</Text>
      <Image style={styles.herbSize} source={require('./assets/Garlic.jpg')}/>
      <Text style={styles.textDesign}>Garlic</Text>
      <Text style={styles.textDesign}>Shocking we know but believe it or not. Garlic has it amazing uses in helping your skin</Text>
      <Text style={styles.textDesign}>Gets rid of blackheads and whiteheads, Gets rid of stubborn acne, Minimizes enlarged pores</Text>
      <Text style={styles.textDesign}>Promotes healthy hair and Prevents grey hair</Text>
      <Image style={styles.herbSize} source={require('./assets/Tumeric.jpg')}/>
      <Text style={styles.textDesign}>Tumeric</Text>
      <Text style={styles.textDesign}>For hundreds of years, people around the world have linked turmeric to healing properties and cosmetic benefits.</Text>
      <Text style={styles.textDesign}>It contains properties that contribute to a natural glow, It can heal wounds, It can help your psoriasis</Text>
      <Text style={styles.textDesign}>It may help with acne scarring and It has been linked to scabies treatment</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      </ScrollView>
    </View>
  );
}

function Spices({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Image style={styles.imageSize} source={require('./assets/MH.png')}/>
      <Text style={styles.textDesign}>Use the herbs in this category in your cooking</Text>
      <Image style={styles.herbSize} source={require('./assets/Basil.jpg')}/>
      <Text style={styles.textDesign}>Basil</Text>
      <Text style={styles.textDesign}>Mostly grown above ground. Basil is a herb mostly used in cooking</Text>
      <Text style={styles.textDesign}>It can be used be for stomach spasms, loss of appetite, intestinal gas, kidney conditions,</Text>
      <Text style={styles.textDesign}>fluid retention, head colds, warts, and worm infections.</Text>
      <Image style={styles.herbSize} source={require('./assets/Oregano.jpg')}/>
      <Text style={styles.textDesign}>Oregano</Text>
      <Text style={styles.textDesign}>Oregano provides other antioxidants when people consume it in the diet.</Text>
      <Text style={styles.textDesign}>Mostly used in the Mediterranean</Text>
      <Text style={styles.textDesign}>skins sores, aching muscles, asthma, cramping, diarrhea, indigestion, colds and to boost overall health</Text>
      <Image style={styles.herbSize} source={require('./assets/Rosemary.jpg')}/>
      <Text style={styles.textDesign}>Rosemary</Text>
      <Text style={styles.textDesign}>Rosemary is a fragrant evergreen herb native to the Mediterranean.</Text>
      <Text style={styles.textDesign}>It is used as a culinary condiment, to make bodily perfumes, and for its potential health benefits.</Text>
      <Text style={styles.textDesign}>Mostly used to help Antioxidants, Anti-inflammatory, Improving Digestions, Enhancing memory and concentration</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      </ScrollView>
    </View>
  );
}

function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textDesign}>This App is developed to help those with illnesses talk to real doctors and consult on proper treatment without leaving the comfort of their home</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function Contact({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textDesign}>Contact Infromation:</Text>
      <Text style={styles.textDesign}>Cellphone: 0555877111</Text>
      <Text style={styles.textDesign}>Telephone: 022885810</Text>
      <Text style={styles.textDesign}>Email: HerbalDictionary@Gmail.com</Text>
      <Text style={styles.textDesign}>Address: 21 Apple St. New York, New York, USA</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Drinkable" component={Drinkable} />
        <Drawer.Screen name="Apply to Skin" component={Apply} />
        <Drawer.Screen name="Digested/Spices" component={Spices} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2660c5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textDesign:{
    color: '#1cb411',
    fontSize: 30,
    padding:15,
    alignItems: "center",
  },

  imageSize:{
    width: "50",
    height: "50%",
    resizeMode: 'stretch',
  },

  inputDesign:{
    width: "80%",
    padding:20,
    backgroundColor:'#fff',
    marginBottom:10
  },

  herbSize:{
    width: "50%",
    height: "25%",
    resizeMode: 'stretch',
  },

  customButton:{
    width: "50%",
    height: 50,
    backgroundColor:"#0082B5",
    color: "#fff",
    padding: 15,
    alignItems: "center",
    margin: 15,

  scrollView:{
      marginHorizontal: 20,
      width: "100%",
    },
  },  
});
