import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Button, Card, Header, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class PegawaiDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputID: "",
      textInputNama: "",
      textInputGaji: "",
    };
  }

  componentDidMount() {
    this.setState({
      textInputID: this.props.route.params.ID,
      textInputNama: this.props.route.params.NAMA,
      textInputGaji: this.props.route.params.GAJI,
    });
  }

  ubahDataPegawai = () => {
    fetch("http://localhost/my-react-crud/UpdateDataPegawai.php", {
      method: "POST",
      body: JSON.stringify({
        pegawai_id: this.state.textInputID,
        pegawai_nama: this.state.textInputNama,
        pegawai_gaji: this.state.textInputGaji,
      }),
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        Alert.alert(responseJSON);
        console.log(responseJSON);
      })
      .catch((error) => {
        console.error(error);
      });
    // redirect ke PegawaiView
    this.props.navigation.push("PegawaiView");
  };

  hapusDataPegawai = () => {
    fetch("http://localhost/my-react-crud/HapusDataPegawai.php", {
      method: "POST",
      body: JSON.stringify({
        pegawai_id: this.state.textInputID,
      }),
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        Alert.alert(responseJSON);
        console.log(responseJSON);
      })
      .catch((error) => {
        console.error(error);
      });
    // redirect ke PegawaiView
    this.props.navigation.push("PegawaiView");
  };

  render() {
    return (
      <View style={myStyle.container}>
        <Text style={myStyle.teksJudul}>Melihat Detail Pegawai</Text>
        <Input
          placeholder="Nama Pegawai"
          leftIcon={{ name: "home", type: "font-awesome" }}
          value={this.state.textInputNama}
          onChangeText={(TextInputValue) =>
            this.setState({ textInputNama: TextInputValue })
          }
        />
        <Input
          placeholder="Gaji Pegawai"
          leftIcon={{ name: "home", type: "font-awesome" }}
          value={this.state.textInputGaji}
          onChangeText={(TextInputValue) =>
            this.setState({ textInputGaji: TextInputValue })
          }
        />
        <Text style={myStyle.teksPadding} />

        <Button onPress={this.ubahDataPegawai} title="Ubah Data Pegawai" />
        <Button onPress={this.hapusDataPegawai} title="Hapus Data Pegawai" />
      </View>
    );
  }
}

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 12,
    padding: 6,
  },
  teks: {
    color: "blue",
    fontSize: 14,
  },
  teksJudul: {
    fontSize: 18,
    textAlign: "center",
    margin: 16,
  },
  teksPadding: {
    padding: 14,
  },
});
