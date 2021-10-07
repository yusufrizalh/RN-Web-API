import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Button, Card, Header, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class PegawaiView extends Component {
  // lifecycle
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataPegawaiArray: [],
    };
  }

  componentDidMount() {
    this.ambilDataPegawai();
    this.focusListener = this.props.navigation.addListener("focus", () => {
      this.ambilDataPegawai();
    });
  }

  ambilDataPegawai = () => {
    fetch("http://localhost/my-react-crud/LihatSemuaPegawai.php")
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        this.setState({
          isLoading: false,
          dataPegawaiArray: responseJSON,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  passDataPegawai = (pegawai_id, pegawai_nama, pegawai_gaji) => {
    this.props.navigation.navigate("PegawaiDetail", {
      ID: pegawai_id,
      NAMA: pegawai_nama,
      GAJI: pegawai_gaji,
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 16 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View>
        <FlatList
          data={this.state.dataPegawaiArray}
          keyExtractor={(item) => item.pegawai_id}
          renderItem={({ item }) => (
            <Card>
              <View>
                <TouchableOpacity
                  onPress={this.passDataPegawai.bind(
                    this,
                    item.pegawai_id,
                    item.pegawai_nama,
                    item.pegawai_gaji
                  )}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 16,
                      padding: 6,
                      margin: 2,
                    }}
                  >
                    ID: {item.pegawai_id} | Nama: {item.pegawai_nama}
                  </Text>
                </TouchableOpacity>
              </View>
            </Card>
          )}
        />
      </View>
    );
  }
}
