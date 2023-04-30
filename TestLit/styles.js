//script:  Global Styles Sheet
//author:  Steven Motz
//date:    4/20/2023
import { StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#001442',
    },
    buttonContainer: {
      marginTop: 20,
      width: 200,
    },
    titleText: {
      fontSize: 30,
      fontWeight: "bold"
    },
    otherText: { 
      fontSize: 20,
      fontWeight: "bold"
    },
    card: {
        backgroundColor: '#002885',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        flex: 1,
    },
    cardText: {
        color: '#fff',
        fontSize: 20,
    },
    headerButtonLayout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerButton: {
        backgroundColor: '#002885',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        flex: 1,
    },    
    deleteHeaderButton: {
      backgroundColor: '#bd0000',
      margin: 10,
      padding: 10,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 5,
      flex: 1,
  },
  deleteButton: {
    backgroundColor: '#bd0000',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
},

    flashButtonContainer: {
        marginTop: 20,
        marginBottom: 50,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },


  });