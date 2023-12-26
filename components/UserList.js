import React, { useEffect } from 'react';
import {Text, View} from 'react-native';
import { useDispatch, useSelector} from 'react-redux';
import { getUserList } from './redux/action';

const UserList = ()=>{
  const dispatch = useDispatch();
  // const userList = useSelector((state)=>state.reducer);
  const userList = useSelector(state=>state.reducer[0].users);
  useEffect(()=>{
    dispatch(getUserList());
  },[])
  console.warn('In Component', userList);
  return(
    <View style={{flex:1}}>
      {
        userList.length ?
        userList.map((item, index) => (
          <Text key={index} style={{ fontSize: 25, textAlign: 'center', padding: 5 }}>
            Name: {item.name}, Gender: {item.gender}
          </Text>
        ))
        : null
      }
    </View>
  );
}

export default UserList;
