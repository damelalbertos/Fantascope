export default function DrawingScreen({navigation}){
    return(
    <View style={styles.container}>
      <DrawingCanvas
      />
      <StatusBar style="auto" />
    </View>
    );
};