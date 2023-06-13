import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

export interface SafePageContainerProps
  extends React.ComponentPropsWithRef<typeof SafeAreaView> {
  contentContainerStyle?: React.ComponentProps<
    typeof ScrollView
  >["contentContainerStyle"];
}

const SafePageContainer: React.FC<SafePageContainerProps> = ({
  style,
  children,
  contentContainerStyle,
  ...props
}) => {
  return (
    <SafeAreaView style={[style, { flex: 1 }]} {...props}>
      <ScrollView contentContainerStyle={[{ flex: 1 }, contentContainerStyle]}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SafePageContainer;
