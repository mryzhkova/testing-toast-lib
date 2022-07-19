import { useState } from 'react';
import { ToastProvider, useToastService } from 'toast-lib-test';
import './App.css';

const toastParams = {
  // position: 'top-left'
};

const App = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [variant, setVariant] = useState('Info');
  const [color, setColor] = useState('');

  const notify = useToastService();

  const clearFormHandler = () => {
    setTitle('');
    setDescription('');
    setVariant('Info');
    setColor('');
  };

  const addToastHandler = e => {
    e.preventDefault();
    switch(variant) {
      case "Info": {
        notify.info(title, {
          description: description,
          color: color
        });
        break;
      }
      case "Success": {
        notify.success(title, {
          description: description,
          color: color
        });
        break;
      }
      case "Warning": {
        notify.warning(title, {
          description: description,
          color: color
        });
        break;
      }
      case "Error": {
        notify.error(title, {
          description: description,
          color: color
        });
        break;
      }
      default: {
        notify.info(title, {
          description: description,
          color: color
        })
      }
    }
  };

  return (
    <div className="app">
      <h1>Testing Toast library</h1>
      <div className="form">
        <form id='add-toast' onSubmit={addToastHandler}>
          <div className='variant'>
            <label htmlFor="type">Toast type</label>
            <select id='type' value={variant} onChange={e => setVariant(e.target.value)}>
              <option value="Info">Info</option>
              <option value="Success">Success</option>
              <option value="Warning">Warning</option>
              <option value="Error">Error</option>
            </select>
          </div>
          <input
            type="text"
            value={title}
            placeholder="Toast Title"
            onChange={e => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={description}
            placeholder="Toast desription"
            onChange={e => setDescription(e.target.value)}
          />
          <div className='toast-color'>
            <label htmlFor="color">Toast color</label>
            <input
              id='color'
              type="color"
              value={color}
              onChange={e => setColor(e.target.value)}
            />
          </div>
          <button form='add-toast'>Create Toast</button>
          <button type='button' onClick={clearFormHandler}>Clear form</button>
        </form>
      </div>
      <ToastProvider {...toastParams}/>
    </div>
  );
};

export default App;
