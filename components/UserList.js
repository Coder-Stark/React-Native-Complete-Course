import React, { useEffect } from 'react';
import {Text, View} from 'react-native';
import { useDispatch, useSelector} from 'react-redux';
import { getUserList } from './redux/action';

const UserList = ()=>{
  const dispatch = useDispatch();
  const userList = useSelector((state)=>state.reducer);
  useEffect(()=>{
    dispatch(getUserList());
  })
  console.warn('In Component', userList);
  return(
    <View>
      <View>
        <Text style={{fontSize:25, textAlign:'center', padding:5, justifyContent:'center'}}>User List Screen</Text>
      </View>
    </View>
  );
}

export default UserList;
