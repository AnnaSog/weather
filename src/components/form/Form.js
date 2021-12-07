
import './form.css';

const Form = ({weatherMethod, error}) => {

    return(
        <div>
            <form onSubmit={weatherMethod}>
                <input type="text" name='city' required placeholder="Search city"/>
                <button>Search</button>
            </form>
            {error ? <p className='error'>Enter the correct city or remove the space at the end</p> : null}
        </div>
    )
}

export default Form;