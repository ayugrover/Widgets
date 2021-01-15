import React, {useState} from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';
import Translate from './Components/Translate';
import Route from './Components/Route';
import Header from './Components/Header';

const items = [
{
   title: 'What is React',
   content : 'React is a front end js framework'
},
{
  title: 'Why use react?',
  content : 'Its a fovourite lib among engineers'
},
{
  title: 'How do you use react?',
  content : 'By creating components'
}
];

const options = [
  {
     label: 'Red',
     value : 'Red'
  },
  {
     label: 'Yellow',
     value : 'Yellow'
  },
  {
     label: 'Blue',
     value : 'Blue'
  }
  ];

const App =  () => {
  const [selected, setSelected] = useState(options[0]);

  return(
    <div> 
      <Header/>
     <Route path ="/">
       <Accordion items={items}/>
     </Route>
     <Route path ="/list">
       <Search />
     </Route>
     <Route path ="/dropdown">
     <Dropdown 
            label = "Select a Colour"
            options= {options}
            selected = {selected}
            onSelectedChange ={setSelected}
            />
     </Route>
     <Route path ="/translate">
       <Translate />
     </Route>
    </div>
  );
};

export default App;