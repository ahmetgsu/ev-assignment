import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Snackbar, TextInput} from 'react-native-paper';
import {Block, ColorButton, Text} from '../../components/common';
import {colors} from '../../styles/colors';
import {textInputTheme} from '../../styles/text-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {users} from '../../mocks/users';
import Logo from '../../assets/images/logo.svg';

const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState();

  const toggleSecureText = () => setSecureText(prev => !prev);
  const toggleSnackBar = () => setError(prev => !prev);

  const signinHandler = async () => {
    // As I do not have any backend for this project
    // I use simple signin logic on frontend
    const relatedUser = users.find(e => e.email === email);
    // Check first if email exist in db
    if (!relatedUser) {
      setErrorMsg('Email not found');
      toggleSnackBar();
      return;
    }
    // If email exist, then check password
    if (relatedUser.password !== password) {
      setErrorMsg('Please check your password');
      toggleSnackBar();
      return;
    }
    await AsyncStorage.setItem('user', JSON.stringify(relatedUser));
    navigation.navigate(relatedUser.isAdmin ? 'AdminTabs' : 'UserTabs');
  };

  return (
    <Block flex={1} color={colors.white}>
      <Snackbar
        visible={error}
        style={styles.snackbar}
        duration={2000}
        onDismiss={toggleSnackBar}>
        {errorMsg}
      </Snackbar>
      <Block flex={1} center middle>
        <Logo height={50} width={200} />
      </Block>
      <Block flex={2} mb={50}>
        <Block flex={1} center middle>
          <Text
            size={22}
            color={colors.main}
            weight="bold"
            style={styles.welcome}>
            Welcome!
          </Text>
          <Text color={colors.main} style={styles.subText}>
            Please sign in to continue
          </Text>
        </Block>
        <Block flex={false} mb={15} ph={20}>
          <TextInput
            mode="outlined"
            label="Email"
            value={email}
            // secureTextEntry
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="email"
            underlineColor={colors.main}
            selectionColor={colors.main}
            outlineColor={colors.main}
            style={styles.inputField}
            theme={textInputTheme}
          />
        </Block>
        <Block flex={false} ph={20}>
          <TextInput
            mode="outlined"
            label="Password"
            value={password}
            secureTextEntry={secureText}
            autoCompleteType="password"
            onChangeText={text => setPassword(text)}
            underlineColor={colors.main}
            selectionColor={colors.main}
            outlineColor={colors.main}
            style={styles.inputField}
            theme={textInputTheme}
            right={
              <TextInput.Icon
                name={secureText ? 'eye' : 'eye-off'}
                color={colors.main}
                onPress={toggleSecureText}
              />
            }
          />
        </Block>
        <Block flex={0.3} row center right pr={30}>
          <TouchableOpacity onPress={() => {}} activeOpacity={0.2}>
            <Text color={colors.main} size={14}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </Block>
        <Block flex={0.8} column middle ph={30}>
          <ColorButton text="Sign In" callback={signinHandler} />
        </Block>
      </Block>
    </Block>
  );
};

export default Signin;

const styles = StyleSheet.create({
  inputField: {
    width: '100%',
    // height: 60,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  welcome: {
    paddingVertical: 10,
  },
  snackbar: {
    marginHorizontal: 30,
  },
});
