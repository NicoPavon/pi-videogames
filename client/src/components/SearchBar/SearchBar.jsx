import './SearchBar.css'
import { useState} from 'react';
import { useDispatch} from 'react-redux';
import { getGameByName} from '../../actions/index';


const SearchBar = ({onSearch}) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    
    function handleInput(e){
        e.preventDefault();
        setName(e.target.value)
      }
      
      function handleSubmit(e){
        e.preventDefault();
        dispatch(getGameByName(name));
        setName('');
      }

    //   lo que retorna
    return (
        <div class="input-group">
          
          <input className='input'
           value={name}
           type="text" placeholder='Type to Search...'
           onChange ={(e) =>handleInput(e)}/>
      
          <button type ='submit' class="button--submit"
          onClick={(e) => handleSubmit(e)} >Search</button>
      
        </div>
    )

}

export default SearchBar;