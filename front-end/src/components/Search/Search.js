import './Search.css'

export default function Search() {
    return(
        <div className='Search'>
            <div className='SearchBar'>
            
                <input type='text' placeholder='Search...'>
                </input>
                <div className='SearchBtn'>
                    <h1>Q</h1>
                </div>
            </div>
        </div>
    );
}