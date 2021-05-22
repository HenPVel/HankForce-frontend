import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import LoadingScreen from '../assets/components/LoadingScreen';
import HomeScreen from '../assets/components/HomeScreen';
import OpportunitiesIndex from '../assets/components/OpportunitiesIndex';
import OpportunityShow from '../assets/components/OpportunityShow';
import NewActivityPage from '../assets/components/NewActivityPage';
import NewOpportunityPage from '../assets/components/NewOpportunityPage';
const screens ={

    LoadingScreen: {
        screen: LoadingScreen
    },
    HomeScreen: {
        screen: HomeScreen
    },
    OpportunitiesIndex: {
        screen: OpportunitiesIndex
    },
    OpportunityShow: {
        screen: OpportunityShow
    },
    NewActivityPage: {
        screen: NewActivityPage
    },
    NewOpportunityPage: {
        screen: NewOpportunityPage
    }

}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack);