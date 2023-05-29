

import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default App=()=>  {

  // constructor(props) {
  //   super(props);
  //   this.state = { m_no: '', m_name: '', m_course: '' };
  // }

  const[m_no, setM_no] = useState(m_no);
  const[m_name, setM_name] = useState(m_name);
  const[m_course, setM_course] = useState(m_course);

  Register = () => {
    // let m_no = this.state.m_no;
    // let m_name = this.state.m_name;
    // let m_course = this.state.m_course;



    if (m_no.length === 0 || m_name.length === 0 || m_course.length === 0) {
      alert("Required Field is Missing");
    } else {
      let InsertAPIURL = "http://192.168.43.57/dev_labo/insert.php";

      let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      let Data = {
        m_no: m_no,
        m_name: m_name,
        m_course: m_course
      };

      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
        .then((response) => response.json())
        .then((response) => {
          alert(response[0].Message);
        })
        .catch((error) => {
          alert("Error" + error);
        })
    }
  }

  
    return (
      <View style={styles.ViewStyle}>
        <TextInput
          placeholder={"Member No"}
          placeholderTextColor={"tomato"}
          keyboardType={"numeric"}
          style={styles.txtStyle}
          onChangeText={m_no => setM_no( m_no)}
        />
        <TextInput
          placeholder={"Member Name"}
          placeholderTextColor={"tomato"}
          style={styles.txtStyle}
          onChangeText={m_name => setM_name( m_name )}
        />
        <TextInput
          placeholder={"Member Course"}
          placeholderTextColor={"tomato"}
          style={styles.txtStyle}
          onChangeText={m_course => setM_course( m_course )}
        />
        <Button
          title={"Register"}
          onPress={Register}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    padding: 60,
    marginTop: 20
  },
  txtStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'tomato',
    marginBottom: 30
  }
});
