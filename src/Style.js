
import { StyleSheet ,Dimensions } from "react-native";
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#151515",
      alignItems: 'flex-start',
      justifyContent:'flex-start'
    },
    courseTitle:{
        fontSize:20,
        color:"white",
        fontWeight:'bold',
        marginTop:20
    },
    animatedCard:{
        flexGrow:1,
        backgroundColor:'#0D0D0D',
        position:'absolute',
        bottom:0,
        top:0,
        right:0,
        left:0,
        paddingHorizontal:15,
        paddingVertical:20,
    },
    listContainer:{
        width:'50%',
        height:'80%'
    },
    titleDesc:{
        marginVertical:15
    },
    coursetitle:{
        fontSize:25,
        color:'white',
        fontWeight:"bold",
    },
    courseDesc:{
        color:"white"
    },
    title:{
        color:"white",
        fontWeight:"bold",
        // fontSize:20,
    },
    titleContainer:{
        width:'100%',
        backgroundColor:"transparent",
        marginTop:40,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        borderWidth:1.5,
        borderColor:"white"
    },
    createtaskContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"space-between"
    },
    titleTask:{
        color:"white",
        fontSize:20,
        fontWeight:"bold"
    },
    input:{
        backgroundColor:"transparent",
        height:50,
        width:windowWidth-20,
        borderRadius:5,
        marginVertical:10,
        borderColor:"white",
        borderWidth:2,
        color:'white',
        padding:10
    },
    inputBoxex:{
        width:'100%',
        alignItems:"center"
    },
    btnContainer:{
        backgroundColor:"white",
        width:windowWidth-20,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        borderWidth:2,
        borderColor:"#646866",
        marginBottom:10
    },
    btnText:{
        color:"black",
        fontWeight:"bold",
        fontSize:15
    }
})
export default styles;