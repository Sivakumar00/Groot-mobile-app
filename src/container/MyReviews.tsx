import React from 'react';
import { View, Text } from 'react-native';

interface IMyReview{
	tabLabel: string,
	key:string
}
const MyReviews = (props:IMyReview) => {
  return (
		<View>
			<Text>my reviews</Text>
		</View>
  );
};

export default MyReviews;

