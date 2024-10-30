import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, BackHandler, StyleSheet } from 'react-native';

class Lista extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data
        };

        this.mostraLikes = this.mostraLikes.bind(this)
        this.like = this.like.bind(this)
    }

    mostraLikes(likers) {
        let feed = this.state.feed;

        if (feed.likers <= 0) {
            return;
        }

        return (
            <Text style={s.likes}>
                {feed.likers} {feed.likers > 1 ? 'Curtidas' : 'curtida'}
            </Text>
        );
    }

    like() {
        let feed = this.state.feed;

        if (feed.likeada) {
            this.setState({
                feed: {
                    ...feed,
                    likeada: false,
                    likers: feed.likers - 1,
                }
            })
        } else {
            this.setState({
                feed: {
                    ...feed,
                    likeada: true,
                    likers: feed.likers + 1,
                }
            })
        }
    }

    render() {
        return (
            <View style={s.areaFeed}>

                <View style={s.viewPerfil} >
                    <Image source={{ uri: this.state.feed.imgperfil }} style={s.fotoPerfil} />
                    <Text style={s.nomeUsuario}>{this.state.feed.nome}</Text>
                </View>

                <Image resizeMode='cover' style={s.fotoPublicacao} source={{ uri: this.state.feed.imgPublicacao }} />

                <View style={s.areaIcone} >
                    <TouchableOpacity onPress={this.like}>
                        <Image source={this.state.feed.likeada ? require('../img/likeada.png') : require('../img/like.png')} style={s.iconeLike} />
                    </TouchableOpacity>
                    <TouchableOpacity style={s.btnSend} >
                        <Image source={require('../img/send.png')} style={s.iconeLike} />
                    </TouchableOpacity>
                </View>

                {
                    this.mostraLikes(this.state.feed.likers)
                }

                <View style={s.viewRodape} >
                    <Text style={s.nomeRodape} >{this.state.feed.nome}</Text>
                    <Text style={s.descRodape} >{this.state.feed.descricao}</Text>
                </View>

            </View>
        );
    }
}

const s = StyleSheet.create({
    areaFeed: {
        marginTop: 15
    },
    nomeUsuario: {
        fontSize: 22,
        textAlign: 'left',
        color: '#000'

    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8,
    },
    fotoPublicacao: {
        flex: 1,
        height: 400,
        alignItems: 'center'
    },
    iconeLike: {
        width: 30,
        height: 30,
    },
    btnSend: {
        paddingLeft: 5
    },
    areaIcone: {
        flexDirection: 'row',
        padding: 5,
    },
    viewRodape: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    nomeRodape: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 5
    },
    descRodape: {
        paddingLeft: 5,
        fontSize: 15,
        color: '#000'
    },
    likes: {
        fontWeight: 'bold',
        marginLeft: 5,
    },

})

export default Lista;