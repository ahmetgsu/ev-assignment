## Get Started

### 1. System Requirements

- Globally installed [node](https://nodejs.org/en/)

- Globally installed [react-native CLI](https://facebook.github.io/react-native/docs/getting-started.html)

- Depending on your OS and target OS, you will need `Android Studio`, `Watchman`, `Xcode`, `JDK` and `CocoaPods` as described in [Official React Native documentation](https://reactnative.dev/docs/environment-setup#installing-dependencies). If you do not have one of those required tools, please follow the intallation instructions first.

### 2. Installation

On the command prompt run the following commands

```sh
$ git clone https://github.com/ahmetgsu/ev-assignment.git

$ cd ev-assignment/

$ yarn
  or
  npm install

  (I suggest using yarn instead of npm)

$ cd ios && pod install
```

### Run on iOS 📱

- Run `npx react-native run-ios` in your terminal, on the root folder of the project

### Run on Android 📱

- Run `npx react-native run-android` in your terminal, on the root folder of the project

### Signin to app

I have created 2 separate users: admin and user

```sh
Admin Account: email: admin@gmail.com - password: secret
User  Account: email: customer@gmail.com - password: 123
```

Since it is just a front-end task, I checked email and password validity on the front-end. I handled the wrong email and password combinations and display a related error message.
When a user successfully signed-in, according to the user role, which is determined by `isAdmin` prop in `mocks/users.js file`, a relevant user interface is shown.

I have created dummy charge points data in `mocks/chargepoints.js`. When the application is loaded for the first time, this data is written to AsyncStorage. Then, users can make CRUD operations.
I have choosen 3 countries (Netherlands - Germany - UK), and created 3 operators in each country.

### Aim of the project 🎯

- To create a bug-free cleanly coded quality react native application that has 2 separate user interfaces.
  One for admin user in which admin can create a promotion for Country and/or Operator.
  Other is for the standard user interface in which the user may create a charging session and may see all his/her past charging sessions.

- My main focus is to create a well-working react native application on IOS to keep it simple. The android application also works as expected. However, `app logo` and `splashscreen` features were only added for the IOS app.

* Users can see past charging details after tapping related cards (includes map integration).

### Personal Choices

#### Roles

- To keep the app flow simple in lack of project back-end, I decided to give a boolean `isAdmin` value to user object to differentiate roles.
  According to this isAdmin value, different user interfaces are shown.

![Simple Role Implementation](./app/assets/images/simple-roles.png)

This can be acceptable in a simple app but in a real-life application user roles should be determined in a precise way. We may think of describing roles as follows:

![Real-life Role Implementation](./app/assets/images/real-life-roles.png)

In my simple application, I prefer to have a single sign-in screen and redirect users to the related screen according to their boolean role. However, in a real-life app, roles may be more complex (e.g. an admin user may also be a customer). It would be better to handle the user role as an array of objects. On the other hand, displaying different sign-in screens to admin and customers would be better to prevent complications during the sign-in process.

#### Technical

- I prefer to use custom components, such as `Block`, `Text`, `CHeader` and `ConfirmationModal`, instead of native `View`, `Text` components. Creating a custom component lets me prevent using inline styling and I think it is more readable.
- I have chosen `FlatList` instead of the simple `ScrollView` component taking into account performance issues. The main reason for my choice is that `FlatList` is more performant when we have an unlimited number of items to display on the screen and it provides us a scroll-to-fetch feature. On the other hand, React native warns us that VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.
- To provide a better user experience, I have added an illustration on the User charging history screen to not to show a blank screen to users.
- I have also preferred to display a confirmation modal before taking significant action. This is to verify that users truly intended to perform that action.
- I have initially used a 3rd party library for `Timer` on the customer session screen. However, I have been getting a react native warning saying that componentWillReceiveProps is deprecated and is not recommended for use. I had 2 options: The first one is to fork the library, make necessary changes, and open a PR. It would take some time for me. The second one is to create my timer component with modern react features. In my case, I have pragmatically chosen the second option.

### Demo

![Demo](./app/assets/images/app-flow.gif)

### ScreenShots

![SS1](./app/assets/images/01.png) ![SS2](./app/assets/images/02.png)

![SS3](./app/assets/images/03.png) ![SS4](./app/assets/images/04.png)

![SS5](./app/assets/images/5_1.png) ![SS6](./app/assets/images/5_2.png)

![SS7](./app/assets/images/5_3.png) ![SS8](./app/assets/images/5_4.png)

![SS9](./app/assets/images/8_1.png) ![SS10](./app/assets/images/8_2.png)

![SS11](./app/assets/images/8_3.png) ![SS12](./app/assets/images/8_4.png)

![SS13](./app/assets/images/11_1.png) ![SS14](./app/assets/images/11_2.png)

![SS15](./app/assets/images/11_3.png) ![SS16](./app/assets/images/11_4.png)

![SS17](./app/assets/images/11_5.png) ![SS18](./app/assets/images/11_6.png)
