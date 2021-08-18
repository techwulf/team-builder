import React, {useState} from 'react';

import Form from './components/Form';
import Item from './components/Item';

const initialForm = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [formData, setFormData] = useState(initialForm);
  const [items, addItems] = useState([]);

  const submitForm = () => {
    const newItem = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      role: formData.role
    };
    if (!newItem.name || !newItem.email || !newItem.role) {
      return;
    } else {
      addItems([newItem, ...items]);
      console.log(items);
      setFormData(initialForm);
    }
  };
  const updateFormValues = (inName, inData) => {
    setFormData({...formData, [inName]: inData});
  };

  return (
    <div>
      <Form 
        values={formData}
        submit={submitForm}
        update={updateFormValues}
      />
      {
        items.map((item, index)=> {
          return (
            <Item key={index} user={item}/>
          )
        })
      }
    </div>
  );
}

export default App;
