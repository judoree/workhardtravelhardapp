import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { theme } from "./colors";
import { useState } from "react";

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});
  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const onChangeText = (payload) => setText(payload);
  const addToDo = () => {
    if (text === "") {
      return;
    }
    const newToDos = Object.assign({}, toDos, { [Data.now()]: { text, work: working } });
    setText("");
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text style={{ ...styles.btnText, color: working ? "white" : theme.grey }}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text style={{ ...styles.btnText, color: !working ? "white" : theme.grey }}>Travel</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          onSubmitEditing={addToDo}
          value={text}
          onChangeText={onChangeText}
          returnKeyType="send"
          placeholder={working ? "Add to To Do" : "Where do you want to go? "}
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
  },
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 100,
  },
  btnText: {
    fontWeight: 600,
    fontSize: 33,
  },
  input: {
    backgroundColor: "white",
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});
