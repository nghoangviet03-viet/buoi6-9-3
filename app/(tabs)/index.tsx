import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert
} from "react-native";

export default function HomeScreen() {

  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  // format số điện thoại
  const formatPhone = (text: string) => {
    let cleaned = text.replace(/\D/g, "");

    let formatted = cleaned
      .replace(/(\d{3})(\d)/, "$1 $2")
      .replace(/(\d{3})(\d)/, "$1 $2")
      .replace(/(\d{2})(\d{1,2})$/, "$1 $2");

    setPhone(formatted);

    validatePhone(cleaned);
  };

  // kiểm tra số điện thoại
  const validatePhone = (text: string) => {
    if (text.length < 10) {
      setError("Số điện thoại không đúng định dạng");
    } else {
      setError("");
    }
  };

  // khi click button
  const handleContinue = () => {
    const cleaned = phone.replace(/\D/g, "");

    if (cleaned.length !== 10) {
      Alert.alert(
        "Lỗi",
        "Số điện thoại không đúng định dạng. Vui lòng nhập lại"
      );
      return;
    }

    Alert.alert("Thành công", "Số điện thoại hợp lệ");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Đăng nhập</Text>

      <Text style={styles.label}>Nhập số điện thoại</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="numeric"
        value={phone}
        onChangeText={formatPhone}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <View style={styles.button}>
        <Button title="Tiếp tục" onPress={handleContinue} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    marginTop: 60
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },

  label: {
    fontSize: 16,
    marginBottom: 10
  },

  input: {
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 16
  },

  error: {
    color: "red",
    marginTop: 5
  },

  button: {
    marginTop: 20
  }

});