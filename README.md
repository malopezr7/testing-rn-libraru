# React Native Template

# How to launch the project
1. Install node dependencies with `yarn`
2. Install pods `cd ios/ && pod install && cd ..`
3. Launch with `yarn ios` or `yarn android`

# How to bump version
1. Launch `yarn bump 1.2.3 12`
# How to sign Android
1. Change keyAlias inside `android/app/build.gradle`
2. Put `prod.keystore` inside `android/app/` folder
3. Set your `ANDROID_KEY_PASSWORD` ans `ANDROID_STORE_PASSWORD` passwords
4. Compile!