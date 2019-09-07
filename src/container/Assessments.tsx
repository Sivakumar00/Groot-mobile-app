import React from 'react';
import { View, Text } from 'react-native';

interface IAssessmentProps{
	tabLabel: string,
	key:string
}

const Assessments = (props:IAssessmentProps) => {
  return (
		<View>
			<Text>Assessments</Text>
		</View>
  );
};

export default Assessments;

