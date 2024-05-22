import { TextInputGroup, TextInputGroupMain } from "@patternfly/react-core";
import React from 'react';

function TodoSearch() {
 const [value, setValue] = React.useState('');
  return (
    <TextInputGroup>
      <TextInputGroupMain
        value={value} 
        onChange={(_event, value) => setValue(value)}
      />
    </TextInputGroup>
  );
}
export { TodoSearch };
