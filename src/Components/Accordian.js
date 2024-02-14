import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../Assets/Theme';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

const Accordian = ({user, item, navigation}) => {
  const [DropOpen, setDropOpen] = useState(false);
  return (
    <>
      <Collapse
        isExpanded={user && true}
        onToggle={() => setDropOpen(prev => !prev)}>
        <CollapseHeader>
          {/* <TouchableOpacity onPress={() => setDropOpen(prev => !prev)}> */}
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              backgroundColor: COLORS.white,
              borderRadius: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                ...FONTS.h2,
                fontWeight: 600,
                color: COLORS.black,
              }}>
              Week {item.weekNumber}
            </Text>
            <Image
              source={{
                uri: DropOpen
                  ? 'https://cdn-icons-png.freepik.com/128/10009/10009171.png?ga=GA1.1.1634828664.1699686714&semt=ais'
                  : 'https://cdn-icons-png.freepik.com/128/10009/10009177.png?ga=GA1.1.1634828664.1699686714&semt=ais',
              }}
              alt=""
              style={{
                width: 15,
                height: 15,
                borderRadius: 0,
                tintColor: COLORS.green,
                transform: user ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          </View>
          {/* </TouchableOpacity> */}
        </CollapseHeader>
        <CollapseBody>
          <View
            style={{
              padding: 10,
              display: 'flex',
              gap: 5,
              backgroundColor: COLORS.white,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingHorizontal: 40,
            }}>
            {item.information.map(item => (
              <>
                <Text
                  style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    textTransform: 'capitalize',
                  }}>
                  {item.info}
                </Text>
              </>
            ))}
          </View>
        </CollapseBody>
      </Collapse>
    </>
  );
};

export default Accordian;
