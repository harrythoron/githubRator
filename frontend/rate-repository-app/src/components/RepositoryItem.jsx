import { View, Text, Image, StyleSheet } from "react-native";
import CustomText from "./Text";

const styles = StyleSheet.create({
    nameImgContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,

    },
    nameContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5
    },
    mainContainer: {

        backgroundColor: 'white',

        padding: 10
    },
    allRatingsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5,
        paddingTop: 15,
        textAlign: 'center'
    }

});
function roundNum(num) {
    if (num < 1000) return num;
    const dividedNum = num / 1000;
    const rounded = Math.round(dividedNum * 10) / 10;
    return rounded + 'k';
}

const RepositoryItem = ({ item }) => {


    return (
        <View style={styles.mainContainer}>
            <View style={styles.nameImgContainer}>
                <Image style={{ height: 50, width: 50, borderRadius: 5 }} source={{ uri: item.ownerAvatarUrl }} />
                <View style={styles.nameContainer}>
                    <CustomText fontWeight='bold'>{item.fullName}</CustomText>

                    <CustomText style={{ paddingRight: 10 }}>{item.description}</CustomText>
                    <CustomText style={{ backgroundColor: '#0366d6', alignSelf: 'flex-start', color: 'white', padding: 5, borderRadius: 5 }}>{item.language}</CustomText>
                </View>
            </View>
            <View style={styles.allRatingsContainer}>
                <View>
                    <CustomText fontWeight='bold' style={{ textAlign: 'center' }}>{roundNum(item.stargazersCount)}</CustomText>
                    <CustomText style={{ textAlign: 'center' }}>Stars</CustomText>

                </View>
                <View>
                    <CustomText fontWeight='bold' style={{ textAlign: 'center' }}>{roundNum(item.forksCount)}</CustomText>
                    <CustomText style={{ textAlign: 'center' }}>Forks</CustomText>

                </View>

                <View>
                    <CustomText fontWeight='bold' style={{ textAlign: 'center' }}>{roundNum(item.reviewCount)}</CustomText>
                    <CustomText style={{ textAlign: 'center' }}>Reviews</CustomText>
                </View>
                <View>
                    <CustomText fontWeight='bold' style={{ textAlign: 'center' }}>{roundNum(item.ratingAverage)}</CustomText>
                    <CustomText style={{ textAlign: 'center' }}>Rating</CustomText>

                </View>

            </View>





        </View>
    )
};

export default RepositoryItem;