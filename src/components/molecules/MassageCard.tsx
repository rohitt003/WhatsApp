import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const MassageCard = ({ name, massage, time, count, image,logoComponent }: any) => {
    return (
        <TouchableOpacity style={styles.button}>

            <View style={styles.leftContainer}>
                <View>
                    <Image source={image} style={styles.image} />
                    {logoComponent}
                    <View>

                        <Text style={styles.name}>{name}</Text>
                    </View>
                    <Text style={styles.massage}>{massage}</Text>

                </View>
            </View>

            <View style={styles.rightContainer}>

                {time && < Text style={styles.time}>{time}</Text>}
                {
                    !!count && (
                        <View style={styles.massageCountContainer}>
                            <Text style={styles.massageCount}>{count}</Text>
                        </View>
                    )
                }


            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: scale(20),
        paddingVertical: verticalScale(15),

    },
    image: {
        height: moderateScale(53),
        width: moderateScale(53),
        borderRadius: moderateScale(53),
    },
    name: {
        fontWeight: "bold",
        fontSize: moderateScale(14),
        color: "black",
    },
    massage: {
        fontSize: moderateScale(13),
        color: "#88909",
        fontWeight: "500",
    },
    time: {
        color: "#88909",
        fontWeight: "bold",
        fontSize: moderateScale(12),

    },
    massageCountContainer: {
        backgroundColor: "#036A01",
        width: moderateScale(22),
        height: moderateScale(22),
        borderRadius: moderateScale(22),
        justifyContent: "center",
        alignItems: "center"
    },
    massageCount: {
        color: "white",
        fontSize: moderateScale(12),
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: scale(10),

    },
    rightContainer: {
        alignItems: "flex-end",
        gap: verticalScale(10),

    },


})

export default MassageCard