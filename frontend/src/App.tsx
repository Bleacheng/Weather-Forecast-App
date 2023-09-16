import React from 'react';
import './App.css';
import {
      FluentProvider,
      webLightTheme,
      Button
} from "@fluentui/react-components";

function App() {
  return (
          <FluentProvider theme={webLightTheme}>
              <Button appearance="primary">Hello Fluent UI React</Button>
          </FluentProvider>
  );
}

export default App;
