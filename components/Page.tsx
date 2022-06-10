import React from 'react'
import {View} from 'react-native'
import { Dimensions } from 'react-native';

interface PageProps {
title:string
index:number
}

const {height,width} = Dimensions.get('window')


const Page : React.FC<PageProps> = () => {
return <View style={{width,height,backgroundColor:'blue'}}/>
}

export default Page