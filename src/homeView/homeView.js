import React from 'react';
import { View, Text, FlatList, Image } from 'react-native'
import styles from './homeView.styles'

class Vista extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            persona: [],
            url: 'https://reqres.in/api/users?page=2'
        }
    }

    componentDidMount() {
        this.getPersona();
    }

    getPersona = () => {
        this.setState({ loading: true });

        fetch(this.state.url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    persona: res.data,
                    loading: false
                });
            })
    };

    render() {

        if (this.state.loading) {
            return (
                <View>
                    <Text>Descargando Contenido</Text>
                </View>
            );
        }

        return (
            <View>
                <FlatList
                    data={this.state.persona} 
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (

                        <View>
                            <Text>--------------</Text>
                            <View>
                                <Text>
                                    {item.first_name} {item.last_name}
                                </Text>
                            </View>
                            <View>
                                <Text>{item.email}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        );
    }
};

export default Vista;