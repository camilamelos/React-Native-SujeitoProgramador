import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Switch,
  TextInput,
  TouchableOpacity
} from "react-native";
import Slider from "@react-native-community/slider";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 300,
      status: false,
      nome: 0,
      idade: 0
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewDados}>
          <View
            style={{
              justifyContent: "center",
              width: "100%",
              height: "15%",
              backgroundColor: "#f0be00"
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 30,
                color: "#FF7F00",
                fontWeight: "bold"
              }}
            >
              {" "}BANCO REACT
            </Text>
            <Text
              style={{
                marginTop: -44,
                textAlign: "center",
                fontSize: 30,
                color: "white",
                fontWeight: "bold"
              }}
            >
              {" "}BANCO REACT
            </Text>
          </View>

          <TextInput
            style={styles.textInput}
            placeholder="Nome Completo"
            value={this.state.nome}
            onValueChange={valorNome => this.setState({ nome: valorNome })}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Idade"
            value={this.state.idade}
            onValueChange={valorIdade => this.setState({ nome: valorIdade })}
          />

          <Slider
            style={{ marginTop: 10, width: "100%" }}
            minimumValue={300}
            maximumValue={1500}
            onValueChange={valorSelecionado =>
              this.setState({ valor: valorSelecionado })}
            value={this.state.valor}
            minimumTrackTintColor="#759194"
            maximumTrackTintColor="#0459ba"
          />

          <Text style={{ textAlign: "center", fontSize: 20 }}>
            Seu limite será de R$ {this.state.valor.toFixed(2)}
          </Text>
          <View>
            <Switch
              style={{ marginiTop: -40 }}
              value={this.state.status}
              onValueChange={valorSwitch =>
                this.setState({ status: valorSwitch })}
            />

            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                width: "90%",
                marginTop: -38,
              }}
            >
              É estudadnte? {this.state.status ? "Sim" : "Não"}
            </Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <TouchableOpacity
              style={{
                marginTop: 15,
                backgroundColor: "#FF7F00",
                width: "70%",
                height: "25%",
                marginLeft: '15%',
                borderRadius: 40
              }}
            >
              <Text style={{fontSize: 15, textAlign: 'center', padding: 10, color: 'white', fontWeight: 'bold'  }}>ABRIR CONTA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  viewDados: {
    backgroundColor: "#FFFF",
    width: "90%",
    height: "85%",
    marginTop: 30
  },
  textInput: {
    width: "90%",
    height: "8%",
    marginLeft: "5%",
    marginTop: 5,
    backgroundColor: "#DBDCDB",
    padding: 10,
    borderRadius: 5
  }
});
