import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { List, ListItem, ButtonGroup, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import PostRoutine from '../Actions/PostRoutine';
import mapStateToProps from '../config/ReducerHelper';
import Store from '../Store';
import text from '../config/text';
import { CONTAINER } from '../config/styles';

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  componentDidMount() {
    this.setState({
      taggedIngredients: Store.getState().main.tagData,
      routine: Store.getState().main.routineData,
     });
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }

  _onPressAdd = (brand, name) => {
    const full = brand.toUpperCase() + ' ' + name;

    if (!this.state.routine.includes(full)) {
      (this.state.routine).push(full);
    }
  }

  render() {
    const icon1 = () => <Icon name="view-stream" size={24} />;
    const icon2 = () => <Icon name="view-list" size={24} />;
    const buttons = [{ element: icon1 }, { element: icon2 }];

    const { selectedIndex } = this.state;
    const { brand, ingredient_list } = this.props.navigation.state.params;
    const { taggedIngredients } = this.state;
    let { name } = this.props.navigation.state.params;
    name = name[0].toUpperCase() + name.slice(1);

    if (!taggedIngredients) {
      return <Text />;
    }

    const ingItems = ingredient_list.map((ingredient, i) => {
      const info = taggedIngredients.includes(ingredient) ? '#FEE284' : '#FFFFFF';

      if (this.state.selectedIndex === 0) {
        return (<Text key={i} style={{ backgroundColor: info }}>{ingredient}, </Text>);
      }
      return (<ListItem key={i} title={ingredient} hideChevron={true} containerStyle={{ backgroundColor: info }} />);
    });

    const content = this.state.selectedIndex === 0 ?
      (<Text style={[text.p, { textAlign: 'justify', lineHeight: 26 }]}>{ingItems}</Text>) :
      (<List style={{ flex: 1, justifyContent: 'flex-start' }} containerStyle={{ marginTop: 0 }}>{ingItems}</List>)

    return (
      <View style={{ flex: 1, paddingLeft: 20, paddingRight: 20, paddingTop: 30, backgroundColor: 'white' }}>
        <Text style={[text.smallBold, { textAlign: 'center' }]}>{brand.toUpperCase()}</Text>
        <Text style={[text.medium, { textAlign: 'center' }]}>{name}</Text>

        <View style={CONTAINER.details}>
          <View style={CONTAINER.details}>
            <Icon name="favorite" size={24} iconStyle={{ color: '#e1e1e1', marginRight: 10 }} />
            <Icon name="add-circle" size={24} onPress={() => this._onPressAdd(brand, name)} />
          </View>

          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ height: 36, width: 74, backgroundColor: '#eeeeee', borderWidth: 0, marginTop: 15, marginBottom: 10 }}
            selectedBackgroundColor="#f5f5f5"
            innerBorderStyle={{ color: '#f5f5f5' }}
          />
        </View>

        <Text style={[text.small, { marginTop: 20 }]}>INGREDIENTS:</Text>
        <ScrollView style={{ margin: 10 }}>{content}</ScrollView>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 25, marginTop: 5 }}>
          <Text style={text.small}>100% ACCURATE</Text>
          <Icon name="sentiment-dissatisfied" size={18} iconStyle={{ padding: 4, marginLeft: 5 }} />
          <Icon name="sentiment-satisfied" size={18} iconStyle={{ padding: 4 }} />
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, { PostRoutine })(Product);
