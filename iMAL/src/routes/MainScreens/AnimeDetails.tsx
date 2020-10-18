import React from "react";
import { ActivityIndicator, Dimensions, StyleSheet, Text, View, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { Anime, GetDetails } from "../../APIManager/AnimeDetails";
import { AnimeNode } from "../../components/AnimeItem";
import { Divider } from "../../components/Divider";
import { LargeText } from "../../components/LargeText";
import { Colors } from "../../Configuration/Colors";

type State = {
    animeNode?: AnimeNode,
    anime?: Anime
}

//TODO Everything
export default class AnimeDetails extends React.Component<NavigationStackScreenProps, State>{
    private styles = StyleSheet.create({
        appContainer: {
            backgroundColor: "#1a1a1a"
        }
    });

    constructor(props: NavigationStackScreenProps) {
        super(props);
        let animeNode = (props.navigation.getParam("item") as AnimeNode);
        if (animeNode == undefined) {
            animeNode = {
                node: {
                    id: 1,
                    title: "failure",
                    main_picture: {
                        medium: "https://image.shutterstock.com/image-photo/portrait-surprised-cat-scottish-straight-260nw-499196506.jpg",
                        large: "https://image.shutterstock.com/image-photo/portrait-surprised-cat-scottish-straight-260nw-499196506.jpg"
                    }
                }
            }
        }
        //#region state
        // this.state = {
        //     animeNode: animeNode,
        //     anime: {
        //         id: 34572,
        //         title: "Black Clover",
        //         main_picture: {
        //             medium: "https://api-cdn.myanimelist.net/images/anime/2/88336.jpg",
        //             large: "https://api-cdn.myanimelist.net/images/anime/2/88336l.jpg"
        //         },
        //         alternative_titles: {
        //             synonyms: [],
        //             en: "Black Clover",
        //             ja: "ブラッククローバー"
        //         },
        //         start_date: "2017-10-03",
        //         synopsis: "Asta and Yuno were abandoned at the same church on the same day. Raised together as children, they came to know of the \"Wizard King\"—a title given to the strongest mage in the kingdom—and promised that they would compete against each other for the position of the next Wizard King. However, as they grew up, the stark difference between them became evident. While Yuno is able to wield magic with amazing power and control, Asta cannot use magic at all and desperately tries to awaken his powers by training physically.\n\nWhen they reach the age of 15, Yuno is bestowed a spectacular Grimoire with a four-leaf clover, while Asta receives nothing. However, soon after, Yuno is attacked by a person named Lebuty, whose main purpose is to obtain Yuno's Grimoire. Asta tries to fight Lebuty, but he is outmatched. Though without hope and on the brink of defeat, he finds the strength to continue when he hears Yuno's voice. Unleashing his inner emotions in a rage, Asta receives a five-leaf clover Grimoire, a \"Black Clover\" giving him enough power to defeat Lebuty. A few days later, the two friends head out into the world, both seeking the same goal—to become the Wizard King!\n\n[Written by MAL Rewrite]",
        //         mean: 7.29,
        //         rank: 2386,
        //         popularity: 114,
        //         num_list_users: 680687,
        //         num_scoring_users: 280342,
        //         nsfw: "white",
        //         created_at: "2016-12-18T03:03:37+00:00",
        //         updated_at: "2020-10-17T19:01:12+00:00",
        //         media_type: "tv",
        //         status: "currently_airing",
        //         genres: [
        //             {
        //                 id: 1,
        //                 name: "Action"
        //             },
        //             {
        //                 id: 4,
        //                 name: "Comedy"
        //             },
        //             {
        //                 id: 16,
        //                 name: "Magic"
        //             },
        //             {
        //                 id: 10,
        //                 name: "Fantasy"
        //             },
        //             {
        //                 id: 27,
        //                 name: "Shounen"
        //             }
        //         ],
        //         my_list_status: {
        //             status: "watching",
        //             score: 0,
        //             num_episodes_watched: 147,
        //             is_rewatching: false,
        //             updated_at: "2020-10-17T11:04:15+00:00"
        //         },
        //         num_episodes: 0,
        //         start_season: {
        //             year: 2017,
        //             season: "fall"
        //         },
        //         broadcast: {
        //             day_of_the_week: "tuesday",
        //             start_time: "18:25"
        //         },
        //         source: "manga",
        //         average_episode_duration: 1430,
        //         rating: "pg_13",
        //         pictures: [
        //             {
        //                 medium: "https://api-cdn.myanimelist.net/images/anime/5/88165.jpg",
        //                 large: "https://api-cdn.myanimelist.net/images/anime/5/88165l.jpg"
        //             },
        //             {
        //                 medium: "https://api-cdn.myanimelist.net/images/anime/4/88335.jpg",
        //                 large: "https://api-cdn.myanimelist.net/images/anime/4/88335l.jpg"
        //             },
        //             {
        //                 medium: "https://api-cdn.myanimelist.net/images/anime/2/88336.jpg",
        //                 large: "https://api-cdn.myanimelist.net/images/anime/2/88336l.jpg"
        //             },
        //             {
        //                 medium: "https://api-cdn.myanimelist.net/images/anime/1232/93334.jpg",
        //                 large: "https://api-cdn.myanimelist.net/images/anime/1232/93334l.jpg"
        //             },
        //             {
        //                 medium: "https://api-cdn.myanimelist.net/images/anime/1426/94678.jpg",
        //                 large: "https://api-cdn.myanimelist.net/images/anime/1426/94678l.jpg"
        //             },
        //             {
        //                 medium: "https://api-cdn.myanimelist.net/images/anime/1816/94756.jpg",
        //                 large: "https://api-cdn.myanimelist.net/images/anime/1816/94756l.jpg"
        //             },
        //             {
        //                 medium: "https://api-cdn.myanimelist.net/images/anime/1461/101072.jpg",
        //                 large: "https://api-cdn.myanimelist.net/images/anime/1461/101072l.jpg"
        //             },
        //             {
        //                 medium: "https://api-cdn.myanimelist.net/images/anime/1476/104943.jpg",
        //                 large: "https://api-cdn.myanimelist.net/images/anime/1476/104943l.jpg"
        //             },
        //             {
        //                 medium: "https://api-cdn.myanimelist.net/images/anime/1190/105182.jpg",
        //                 large: "https://api-cdn.myanimelist.net/images/anime/1190/105182l.jpg"
        //             }
        //         ],
        //         background: "The series\" broadcast went on hiatus following the release of episode 132 on April 28, 2020. Beginning May 5, the series has rebroadcast from its first episode until further notice. The series continued it'\"s broadcast from episode 133 on July 7th, 2020.",
        //         related_anime: [
        //             {
        //                 node: {
        //                     id: 33950,
        //                     title: "Black Clover: Jump Festa 2016 Special",
        //                     main_picture: {
        //                         medium: "https://api-cdn.myanimelist.net/images/anime/7/84639.jpg",
        //                         large: "https://api-cdn.myanimelist.net/images/anime/7/84639l.jpg"
        //                     }
        //                 },
        //                 relation_type: "alternative_version",
        //                 relation_type_formatted: "Alternative version"
        //             },
        //             {
        //                 node: {
        //                     id: 38768,
        //                     title: "Black Clover: Jump Festa 2018 Special",
        //                     main_picture: {
        //                         medium: "https://api-cdn.myanimelist.net/images/anime/1585/96894.jpg",
        //                         large: "https://api-cdn.myanimelist.net/images/anime/1585/96894l.jpg"
        //                     }
        //                 },
        //                 relation_type: "side_story",
        //                 relation_type_formatted: "Side story"
        //             },
        //             {
        //                 node: {
        //                     id: 39864,
        //                     title: "Petit Clover Advance",
        //                     main_picture: {
        //                         medium: "https://api-cdn.myanimelist.net/images/anime/1752/101126.jpg",
        //                         large: "https://api-cdn.myanimelist.net/images/anime/1752/101126l.jpg"
        //                     }
        //                 },
        //                 relation_type: "side_story",
        //                 relation_type_formatted: "Side story"
        //             },
        //             {
        //                 node: {
        //                     id: 40031,
        //                     title: "Mugyutto! Black Clover",
        //                     main_picture: {
        //                         medium: "https://api-cdn.myanimelist.net/images/anime/1066/101736.jpg",
        //                         large: "https://api-cdn.myanimelist.net/images/anime/1066/101736l.jpg"
        //                     }
        //                 },
        //                 relation_type: "other",
        //                 relation_type_formatted: "Other"
        //             }
        //         ],
        //         related_manga: [],
        //         studios: [
        //             {
        //                 id: 1,
        //                 name: "Studio Pierrot"
        //             }
        //         ],
        //         statistics: {
        //             status: {
        //                 watching: "417027",
        //                 completed: "32",
        //                 on_hold: "58726",
        //                 dropped: "76180",
        //                 plan_to_watch: "128687"
        //             },
        //             num_list_users: 680652
        //         }
        //     }
        // }
        //#endregion state
        this.state = {
            animeNode: animeNode
        }

        GetDetails(animeNode.node.id).then((res) => {
            this.setState({
                animeNode: animeNode,
                anime: res
            });
            console.log(JSON.stringify(res))
        })
            .catch((err) => {
                console.log("Anime details error weewoo");
                console.log(err);
            });
    }

    NiceString(text: string | undefined) {
        if (text == undefined) return "";
        text = text.replace("_", " ");
        return text.slice(0, 1).toUpperCase() + text.slice(1, text.length);
    }

    render() {
        return (
            <SafeAreaProvider style={this.styles.appContainer}>
                {this.state.anime == undefined ?
                    <ActivityIndicator
                        style={styles.loading}
                        size="large"
                        color={Colors.BLUE} /> :
                    <ScrollView style={styles.page}>
                        <View style={styles.TopArea}>
                            <Image style={styles.image} source={{ uri: this.state.anime?.main_picture?.large }} />
                            <View style={styles.TitleArea}>
                                <Text style={styles.title}>{this.state.anime.title}</Text>
                                {
                                    this.state.anime.title != this.state.anime.alternative_titles?.en ?
                                        <Text style={styles.alternateTitle}>{this.state.anime.alternative_titles?.en}</Text>
                                        :
                                        (undefined)
                                }
                                <Text style={styles.alternateTitle}>{this.state.anime.alternative_titles?.ja}</Text>
                                <Divider color={Colors.DIVIDER} widthPercentage={100} />
                                <View style={styles.TopAreaData}>
                                    <View style={styles.TopAreaLabels}>
                                        <Text style={styles.TopAreaLabel}>Score:</Text>
                                        <Text style={styles.TopAreaLabel}>Rank:</Text>
                                        <Text style={styles.TopAreaLabel}>Popularity:</Text>
                                    </View>
                                    <View style={styles.TopAreaValues}>
                                        <Text style={styles.TopAreaValue}>{this.state.anime.mean}</Text>
                                        <Text style={styles.TopAreaValue}>#{this.state.anime.rank}</Text>
                                        <Text style={styles.TopAreaValue}>#{this.state.anime.popularity}</Text>
                                    </View>
                                </View>
                                <Divider color={Colors.DIVIDER} widthPercentage={100} />
                                <View style={styles.TopAreaData}>
                                    <View style={styles.TopAreaLabels}>
                                        <Text style={styles.TopAreaLabel}>Status:</Text>
                                        <Text style={styles.TopAreaLabel}>Aired:</Text>
                                        <Text style={styles.TopAreaLabel}>Episodes:</Text>
                                        <Text style={styles.TopAreaLabel}>Genres:</Text>
                                    </View>
                                    <View style={styles.TopAreaValues}>
                                        <Text style={styles.TopAreaValue}>{this.NiceString(this.state.anime.status)}</Text>
                                        <Text style={styles.TopAreaValue}>{this.state.anime.start_date}</Text>
                                        <Text style={styles.TopAreaValue}>{this.state.anime.num_episodes == 0 ? "N/A" : this.state.anime.num_episodes}</Text>
                                        <Text style={styles.TopAreaValue}>{this.state.anime.genres?.map(x => x.name).join(", ")}</Text>
                                    </View>
                                </View>

                            </View>
                        </View>

                        <Text style={styles.head2}>Synopsis</Text>
                        <Divider color={Colors.DIVIDER} widthPercentage={100} />
                        <LargeText text={this.state.anime.synopsis} />
                        {
                            this.state.anime.background != undefined && this.state.anime.background != "" ?
                                <View>
                                    <Text style={styles.head2}>Background</Text>
                                    <Divider color={Colors.DIVIDER} widthPercentage={100} />
                                    <LargeText text={this.state.anime.background} />
                                </View> : undefined
                        }
                    </ScrollView>
                }
            </SafeAreaProvider>
        );
    }
}

const styles = StyleSheet.create({
    loading: {
        marginTop: Dimensions.get("window").height / 2
    },
    image: {
        width: Dimensions.get("window").width / 2.5,
        height: (Dimensions.get("window").width / 2.5) * 1.5
    },
    title: {
        color: Colors.TEXT,
        fontSize: 17,
        marginLeft: 5
    },
    alternateTitle: {
        color: Colors.SUBTEXT,
        marginLeft: 5,
        fontSize: 13
    },
    page: {
        margin: 10
    },
    TopArea: {
        flexDirection: "row",
        alignItems: "stretch",
        width: Dimensions.get("window").width - 20,
        marginBottom: 10
    },
    TitleArea: {
        flexDirection: "column",
        marginLeft: 10,
        flex: 1
    },
    Synopsis: {
        color: Colors.TEXT
    },
    ReadMore: {
        color: Colors.BLUE,
        textDecorationStyle: "solid",
        textDecorationLine: "underline",
        textDecorationColor: Colors.BLUE,
        fontSize: 15
    },
    head2: {
        fontSize: 17,
        color: Colors.TEXT
    },
    TopAreaLabels: {
        flexDirection: "column",
        flex: 1.3
    },
    TopAreaValues: {
        flexDirection: "column",
        flex: 2
    },
    TopAreaData: {
        flexDirection: "row",
    },
    TopAreaLabel: {
        color: Colors.TEXT,
        fontWeight: "bold",
        fontSize: 12
    },
    TopAreaValue: {
        color: Colors.TEXT,
        fontSize: 12
    }
});