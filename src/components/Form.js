import React from 'react';

const Form = () => (
    <form className="formulaire">
        <label>
        Nom:
        <input type="text" name="name" />
        </label>
        <br />
        
        <label>
        Reference:
        <input type="text" name="reference" />
        </label>
        <br />

        <label>
        Emplacement:
        <input type="text" name="emplacement" />
        </label>

        <div>
        <label for="pic">Photo:</label>
        <input type="file"
               id="pic" name="pic"
               accept="image/png, image/jpeg, image/jpg" />
        </div>

        <hr />
        <input type="submit" value="Submit" />
    </form>
);

export default Form;