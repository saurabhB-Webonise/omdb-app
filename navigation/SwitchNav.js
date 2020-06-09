
import { createAppContainer, createSwitchNavigator } from 'react-navigation';



import One from '../screens/switch/one';
import Two from '../screens/switch/two';
import Three from '../screens/switch/three';

const SwitchNav = createSwitchNavigator({
    rOne: One,
    rTwo: Two,
    rThree: Three
});

export default createAppContainer(SwitchNav);
