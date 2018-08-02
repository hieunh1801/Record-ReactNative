# Cài đặt 
react-native install react-native-voice

# Nâng cấp phiên bản của SDK build tool để sử dụng react-native-voice
- Mở file build.gradle : 
    dependencies {
            classpath 'com.android.tools.build:gradle:3.1.0' // sửa 

           
        }
    subprojects {
        project.configurations.all {
            resolutionStrategy.eachDependency { details ->
            if (details.requested.group == 'com.android.support'
                    && !details.requested.name.contains('multidex')
            ) {
                details.useVersion "27.0.1"
            }
            }
        }
    }
- Mở file gradle-wrapper.properties 
distributionUrl=https\://services.gradle.org/distributions/gradle-4.4-all.zip